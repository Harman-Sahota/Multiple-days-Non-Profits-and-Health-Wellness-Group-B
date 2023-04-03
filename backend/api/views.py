
from django.core.signing import TimestampSigner
import json
from api.models import users
from api.models import posts
from api.models import permissions
from api.models import tracker
import jwt
import datetime
from api.serialize import userSerialize
from django.db.models import Sum
from django.utils import timezone
from api.serialize import passwordSerialize
from api.serialize import adminInsertSerialize
from api.serialize import adminPullSerialize
from api.serialize import adminUpdateSerialize
from api.serialize import networkUpdateSerialize
from api.serialize import networkInsertSerialize
from api.serialize import networkPullSerialize
from api.serialize import postSharedSerialize
from api.serialize import postNameSerialize
from api.serialize import profileSerialize
from api.serialize import trackerInsertSerialize
from api.serialize import trackerPullSerialize
from api.serialize import trackerUpdateSerialize
from django.core.mail import send_mail
from django.core.signing import TimestampSigner, BadSignature
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.core import signing
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login, authenticate
from django.db.models import Q


@api_view(["POST"])
def registerInsert(request):
    if request.method == "POST":
        request.data['Password'] = make_password(request.data['Password'])
        saveserialize = userSerialize(data=request.data)
        email = request.data['Email']

        duplicated = users.objects.filter(Email=email).count()
        if duplicated != 0:
            return Response(status=status.HTTP_409_CONFLICT)
        if saveserialize.is_valid() and duplicated == 0:
            saveserialize.save()
            token = jwt.encode(saveserialize.data, 'secret',
                               algorithm='HS256').decode('utf-8')
            return Response({"data": saveserialize.data, "token": token}, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def adminInsert(request):
    if request.method == 'POST':
        saveserialize = adminInsertSerialize(data=request.data, many=True)
        if saveserialize.is_valid():
            permissions.objects.all().delete()
            saveserialize.save()
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def adminPull(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve__isnull=False)
        serialize = adminPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["GET"])
def adminPullApprove(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve='decline')
        results = results.exclude(Approve__isnull=True)
        serialize = adminPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["GET"])
def adminPullDecline(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve='approve')
        results = results.exclude(Approve__isnull=True)
        serialize = adminPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["PUT"])
def adminUpdate(request, pk):
    if request.method == 'PUT':
        saveserialize = adminUpdateSerialize(
            data=request.data, allow_null=True)
        if saveserialize.is_valid():
            users.objects.filter(id=pk).update(
                Approve=saveserialize.data["Approve"])
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["PUT"])
def networkUpdate(request, pk):
    if request.method == 'PUT':
        saveserialize = networkUpdateSerialize(
            data=request.data, allow_null=True)
        if saveserialize.is_valid():
            posts.objects.filter(id=pk).update(
                state='closed', shared_with=request.data['shared_with'])

            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def postsPullShared(request):
    exists = users.objects.filter(Email=request.data['Email']).count()
    if request.method == 'POST' and exists == 1:
        results = posts.objects.filter(Email=request.data['Email']).exclude(
            shared_with__isnull=True).exclude(shared_with__exact='').values('shared_with').distinct()
        serialize = postSharedSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["POST"])
class Login(APIView):
    def post(self, request):
        if request.method == 'POST':
            email = request.data.get("Email")
            password = request.data.get("Password")
        if not email or not password:
            return Response({"error": "Please fill all fields"}, status=status.HTTP_400_BAD_REQUEST)

        check_user = users.objects.filter(
            Email=email).exists()
        if check_user:
            user = users.objects.filter(Email=email)
            if check_password(password, user.Password):
                results = users.objects.get(Email=email)
                data = {
                    "firstname": results.FirstName,
                    "lastname": results.LastName,
                    "email": email,
                    "roles": results.Roles,
                    "organization": results.Organization,
                    "consent": results.Consent,
                    "approve": results.Approve,
                    "id": results.id,
                }
                token = jwt.encode(
                    data, 'secret', algorithm='HS256').decode('utf-8')
                return Response({"success": "success logged in", "data": data, "token": token}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "invalid login credentials"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "user does not exist"}, status=status.HTTP_404_NOT_FOUND)


def postsPullName(request):
    if request.method == 'POST':
        results = users.objects.filter(Email=request.data['Email'])
        serialize = postNameSerialize(results, many=True)
        return Response(serialize.data)


class Login(APIView):
    def post(self, request):
        if request.method == 'POST':
            email = request.data.get("Email")
            password = request.data.get("Password")
        if not email or not password:
            return Response({"error": "Please fill all fields"}, status=status.HTTP_400_BAD_REQUEST)

        check_user = users.objects.filter(
            Email=email).exists()
        if check_user:
            user = users.objects.get(Email=email)
            if check_password(password, user.Password):
                results = users.objects.get(Email=email)
                data = {
                    "firstname": results.FirstName,
                    "lastname": results.LastName,
                    "email": email,
                    "roles": results.Roles,
                    "organization": results.Organization,
                    "consent": results.Consent,
                    "approve": results.Approve,
                    "id": results.id,
                }
                token = jwt.encode(
                    data, 'secret', algorithm='HS256').decode('utf-8')
                return Response({"success": "success logged in", "data": data, "token": token}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "invalid login credentials"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "user does not exist"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def networkInsert(request):
    if request.method == "POST":
        saveserialize = networkInsertSerialize(
            data=request.data, allow_null=True)
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def networkPull(request):
    if request.method == 'GET':
        results = posts.objects.exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["GET"])
def networkPullSharing(request):
    if request.method == 'GET':
        results = posts.objects.filter(Type='Sharing').exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["POST"])
def networkPullCreator(request):
    if request.method == 'POST':
        results = posts.objects.filter(
            Email=request.data['Email']).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
def networkPullReceiving(request):
    if request.method == 'GET':
        results = posts.objects.filter(
            Type='Receiving').exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["POST"])
def networkSearch(request):
    if request.method == 'POST':
        if request.data['filter'] == 'Product':
            results = posts.objects.filter(
                product__icontains=request.data['input']).exclude(state='closed')
        if request.data['filter'] == 'Email':
            results = posts.objects.filter(
                Email__contains=request.data['input']).exclude(state='closed')

        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data)


@api_view(["POST"])
def profilePull(request):
    if request.method == 'POST':
        id = request.data.get("id")
        results = users.objects.filter(id=id)
        serialize = adminPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_201_CREATED)


@api_view(["PUT"])
def profileUpdate(request, pk):
    deleted = ""
    if request.method == 'PUT':
        saveserialize = profileSerialize(data=request.data)
        if saveserialize.is_valid():
            users.objects.filter(id=pk).update(
                FirstName=saveserialize.data["FirstName"])
            users.objects.filter(id=pk).update(
                LastName=saveserialize.data["LastName"])
            users.objects.filter(id=pk).update(
                Roles=saveserialize.data["Roles"])
            users.objects.filter(id=pk).update(
                Organization=saveserialize.data["Organization"])
            users.objects.filter(id=pk).update(
                Consent=saveserialize.data["Consent"])
            if saveserialize.data["Consent"] == 'unconsented':
                users.objects.filter(id=pk).delete()
                deleted = "deleted",
            return Response({"data": saveserialize.data, "deleted": deleted}, status=status.HTTP_201_CREATED)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def resetPassword(request):
    if request.method == 'POST':
        try:
            user = users.objects.get(Email=request.data['Email'])
        except:
            return Response({"Email": ["User with this email does not exist."]}, status=status.HTTP_400_BAD_REQUEST)
        subject = 'Password reset'
        token = signing.dumps({'user_id': user.id})
        link = link = 'http://localhost:3000/newpswd?token=' + str(token)
        message = 'please press this link to set a new password ' + \
            link + ' if this wasnt you please ignore this message'
        from_email = 'noreply@example.com'
        recipient_list = [user.Email]
        send_mail(subject, message, from_email,
                  recipient_list, fail_silently=False)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def verifytoken(request):

    if request.method == 'POST':
        token = request.data['token']
    try:
        data = signing.loads(token)
        user_id = data['user_id']
        print(user_id)
        user = users.objects.get(id=user_id)
        # You can return any user information you need here
        return Response({'email': user.Email}, status=status.HTTP_200_OK)
    except signing.BadSignature:
        # Handle the case where the token is invalid
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['POST'])
def changePassword(request):
    if request.method == 'POST':
        users.objects.filter(Email=request.data['Email']).update(
            Password=make_password(request.data['Password']))
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(['PUT'])
def trackerDelete(request, pk):
    if request.method == 'PUT':
        tracker.objects.filter(id=pk).delete()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(['POST'])
def trackerInsert(request):
    if request.method == 'POST':
        saveserialize = trackerInsertSerialize(data=request.data)
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)

        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def trackerPull(request):
    if request.method == 'GET':
        email = request.GET.get('Email')
        organization = request.GET.get('Organization')

        # Retrieve user with given email
        user = users.objects.filter(Email=email).first()

        if user is not None and user.Approve == 'approve':
            # If user has an approved account, get data that has their email or organization
            queryset = tracker.objects.filter(
                Q(Email=email) | Q(Organization=organization))
        else:
            # If user does not have an approved account, get data that has only their email
            queryset = tracker.objects.filter(Email=email)

        # Serialize and return data
        serialize = trackerPullSerialize(queryset, many=True)
        return Response(serialize.data)


@ api_view(['PUT'])
def trackerUpdate(request, pk):
    if request.method == 'PUT':
        saveserialize = trackerUpdateSerialize(
            data=request.data, allow_null=True)
        if saveserialize.is_valid():
            tracker.objects.filter(id=pk).update(
                Category=saveserialize.data['Category'])
            tracker.objects.filter(id=pk).update(
                Description=saveserialize.data['Description'])
            tracker.objects.filter(id=pk).update(
                Quantity=saveserialize.data['Quantity'])
            tracker.objects.filter(id=pk).update(
                Qunits=saveserialize.data['Qunits'])
            tracker.objects.filter(id=pk).update(
                amountToClients=saveserialize.data['amountToClients'])
            tracker.objects.filter(id=pk).update(
                amountToAFeed=saveserialize.data['amountToAFeed'])
            tracker.objects.filter(id=pk).update(
                amountToCompost=saveserialize.data['amountToCompost'])
            tracker.objects.filter(id=pk).update(
                amountToPartNet=saveserialize.data['amountToPartNet'])
            tracker.objects.filter(id=pk).update(
                amountToLandfill=saveserialize.data['amountToLandfill'])
            tracker.objects.filter(id=pk).update(
                percentClients=saveserialize.data['percentClients'])
            tracker.objects.filter(id=pk).update(
                percentAFeed=saveserialize.data['percentAFeed'])
            tracker.objects.filter(id=pk).update(
                percentCompost=saveserialize.data['percentCompost'])
            tracker.objects.filter(id=pk).update(
                percentPartNet=saveserialize.data['percentPartNet'])
            tracker.objects.filter(id=pk).update(
                percentLandfill=saveserialize.data['percentLandfill'])
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        print(trackerUpdateSerialize.errors)
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def trackerPercentageSum(request):
    if request.method == 'GET':
        email = request.GET.get('Email')
        organization = request.GET.get('Organization')

        queryset = tracker.objects.all()
        # Retrieve user with given email
        user = users.objects.filter(Email=email).first()

        if user is not None and user.Approve == 'approve':
            # If user has an approved account, get data that has their email or organization
            queryset = tracker.objects.filter(
                Q(Email=email) | Q(Organization=organization))
        else:
            # If user does not have an approved account, get data that has only their email
            queryset = tracker.objects.filter(Email=email)

        sum = queryset.aggregate(Sum('percentClients'), Sum('percentAFeed'), Sum(
            'percentCompost'), Sum('percentPartNet'), Sum('percentLandfill'))

        return Response(sum, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def trackerCategorySum(request):
    if request.method == 'GET':
        email = request.GET.get('Email')
        organization = request.GET.get('Organization')

        produce_sum = 0
        meat_sum = 0
        canned_food_sum = 0
        bread_sum = 0
        dairy_sum = 0
        reclaimed_sum = 0

        queryset = tracker.objects.all()
        # Retrieve user with given email
        user = users.objects.filter(Email=email).first()

        if user is not None and user.Approve == 'approve':
            # If user has an approved account, get data that has their email or organization
            queryset = tracker.objects.filter(
                Q(Email=email) | Q(Organization=organization))
        else:
            # If user does not have an approved account, get data that has only their email
            queryset = tracker.objects.filter(Email=email)

        produce_queryset = queryset.filter(Category='Fresh Produce')
        if produce_queryset.exists():
            produce_sum = produce_queryset.aggregate(Sum('Quantity'))[
                'Quantity__sum']

        meat_queryset = queryset.filter(Category='Meat')
        if meat_queryset.exists():
            meat_sum = meat_queryset.aggregate(Sum('Quantity'))[
                'Quantity__sum']

        canned_food_queryset = queryset.filter(Category='Canned Food')
        if canned_food_queryset.exists():
            canned_food_sum = canned_food_queryset.aggregate(Sum('Quantity'))[
                'Quantity__sum']

        bread_queryset = queryset.filter(Category='Bread')
        if bread_queryset.exists():
            bread_sum = bread_queryset.aggregate(
                Sum('Quantity'))['Quantity__sum']

        dairy_queryset = queryset.filter(Category='Dairy')
        if dairy_queryset.exists():
            dairy_sum = dairy_queryset.aggregate(
                Sum('Quantity'))['Quantity__sum']

        reclaimed_queryset = queryset.filter(Category='Reclaimed')
        if reclaimed_queryset.exists():
            reclaimed_sum = reclaimed_queryset.aggregate(Sum('Quantity'))[
                'Quantity__sum']

        sum = {
            'Produce': produce_sum,
            'Meat': meat_sum,
            'Canned_Food': canned_food_sum,
            'Bread': bread_sum,
            'Dairy': dairy_sum,
            'Reclaimed': reclaimed_sum
        }

        return Response(sum, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(["POST"])
def NetworkGraphing(request):
    if request.method == 'POST':
        results = tracker.objects.filter(Email=request.data['user_email']).aggregate(Sum('percentClients'), Sum(
            'percentAFeed'), Sum('percentCompost'), Sum('percentPartNet'), Sum('percentLandfill'))
        results2 = tracker.objects.filter(Email=request.data['compare_email']).aggregate(Sum('percentClients'), Sum(
            'percentAFeed'), Sum('percentCompost'), Sum('percentPartNet'), Sum('percentLandfill'))
        return Response({"user": results, "comparee": results2})


@ api_view(["GET"])
def Past_Hour(request):
    timer = datetime.datetime.now() - datetime.timedelta(hours=1)
    if request.method == 'GET':
        results = posts.objects.filter(
            date_time__lt=timer).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response("error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(["GET"])
def Past_Day(request):
    timer = datetime.datetime.now() - datetime.timedelta(days=1)
    if request.method == 'GET':
        results = posts.objects.filter(
            date_time__lt=timer).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response("error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(["GET"])
def Past_Week(request):
    timer = datetime.datetime.now() - datetime.timedelta(days=7)
    if request.method == 'GET':
        results = posts.objects.filter(
            date_time__lt=timer).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response("error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(["GET"])
def Past_Month(request):
    timer = datetime.datetime.now() - datetime.timedelta(days=30)
    if request.method == 'GET':
        results = posts.objects.filter(
            date_time__lt=timer).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response("error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@ api_view(["GET"])
def Past_6Months(request):
    timer = datetime.datetime.now() - datetime.timedelta(days=182)
    if request.method == 'GET':
        results = posts.objects.filter(
            date_time__lt=timer).exclude(state='closed')
        serialize = networkPullSerialize(results, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    return Response("error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
