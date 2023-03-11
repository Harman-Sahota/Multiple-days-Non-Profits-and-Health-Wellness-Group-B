
import json
from api.models import users
from api.models import posts
from api.models import permissions
from api.models import tracker
import jwt,datetime
from api.serialize import userSerialize
from django.db.models import Sum
from django.utils import timezone


# from api.serialize import commentsSerialize

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

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth import login,authenticate

@api_view(["POST"])
def registerInsert(request):
    if request.method == "POST":
        saveserialize = userSerialize(data = request.data)
        email = request.data['Email'];
        duplicated =  users.objects.filter(Email = email).count(); 
        if duplicated != 0:
             return Response(status=status.HTTP_409_CONFLICT) 
        if saveserialize.is_valid() and duplicated == 0:
            saveserialize.save()
            token = jwt.encode(saveserialize.data,'secret',algorithm='HS256').decode('utf-8')
            return Response({"data":saveserialize.data,"token":token},status=status.HTTP_201_CREATED)       
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

@api_view(["POST"])
def adminInsert(request):
    if request.method == 'POST':
        saveserialize = adminInsertSerialize(data=request.data,many=True)
        if saveserialize.is_valid():
            permissions.objects.all().delete()
            saveserialize.save();
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def adminPull(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve__isnull=False)
        serialize = adminPullSerialize(results,many=True)
        return Response(serialize.data)

@api_view(["GET"])
def adminPullApprove(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve='decline')
        results = results.exclude(Approve__isnull=True)
        serialize = adminPullSerialize(results,many=True)
        return Response(serialize.data)

@api_view(["GET"])
def adminPullDecline(request):
    if request.method == 'GET':
        results = users.objects.exclude(Approve='approve')
        results = results.exclude(Approve__isnull=True)
        serialize = adminPullSerialize(results,many=True)
        return Response(serialize.data)

@api_view(["PUT"])
def adminUpdate(request,pk):
    if request.method == 'PUT':
        saveserialize = adminUpdateSerialize(data=request.data,allow_null = True)
        if saveserialize.is_valid():
            users.objects.filter(id=pk).update(Approve=saveserialize.data["Approve"]) 
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["PUT"])
def networkUpdate(request,pk):
    if request.method == 'PUT':
        saveserialize = networkUpdateSerialize(data=request.data,allow_null = True)
        if saveserialize.is_valid():
            posts.objects.filter(id=pk).update(state='closed',shared_with=request.data['shared_with'])
            
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(["POST"])
def postsPullShared(request):
    exists =  users.objects.filter(Email = request.data['Email'] ).count(); 
    if request.method == 'POST' and exists == 1:
        results = posts.objects.filter(Email = request.data['Email']).exclude(shared_with__isnull=True).exclude(shared_with__exact='').values('shared_with').distinct()
        serialize = postSharedSerialize(results,many=True)
        return Response(serialize.data)

@api_view(["POST"])
def postsPullName(request):
    if request.method == 'POST':
        results = users.objects.filter(Email = request.data['Email'])
        serialize = postNameSerialize(results,many=True)
        return Response(serialize.data)

        
# @api_view(["POST"])
# def commentInsert(request):
#     if request.method == 'POST':
#         saveserialize = commentsSerialize(data=request.data)
#         if saveserialize.is_valid():
#             saveserialize.save();
#             return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
#         return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class Login(APIView):
    def post(self,request):
        if request.method == 'POST':
            email = request.data.get("Email")
            password = request.data.get("Password")
        if not email or not password:
            return Response({"error": "Please fill all fields"},status=status.HTTP_400_BAD_REQUEST)

        check_user = users.objects.filter(Email=email,Password=password).exists()
        if check_user:
            getdetails = users.objects.filter(Email=email,Password=password)
        if check_user == False:
            return Response({"error":"user does not exist"},status=status.HTTP_404_NOT_FOUND)

        if  getdetails: 
            
            results = users.objects.get(Email=email)
            data = {
                "firstname": results.FirstName,
                "lastname": results.LastName,
                "email": email,
                "roles": results.Roles,
                "organization": results.Organization,
                "consent": results.Consent,
                "approve": results.Approve,
                "id":results.id,
            }
            token = jwt.encode(data,'secret',algorithm='HS256').decode('utf-8')
            return Response({"success":"success logged in","data":data,"token":token},status=status.HTTP_200_OK)
        else:
            return Response({"error":"invalid login credentials"},status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def networkInsert(request):
    if request.method == "POST":
        saveserialize = networkInsertSerialize(data = request.data,allow_null=True)
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)      
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def networkPull(request):
    if request.method == 'GET':
        results = posts.objects.exclude(state='closed')
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)
    
@api_view(["GET"])
def networkPullSharing(request):
    if request.method == 'GET':
        results = posts.objects.filter(Type = 'Sharing').exclude(state='closed')
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)

@api_view(["POST"])
def networkPullCreator(request):
    if request.method == 'POST':
        results = posts.objects.filter(Email = request.data['Email']).exclude(state='closed')
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data,status=status.HTTP_200_OK)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(["GET"])
def networkPullReceiving(request):
    if request.method == 'GET':
        results = posts.objects.filter(Type = 'Receiving').exclude(state='closed')
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)
    


@api_view(["POST"])
def networkSearch(request):
    if request.method == 'POST':
        if request.data['filter'] == 'Product':
            results = posts.objects.filter( product__icontains =  request.data['input']);
        if request.data['filter'] == 'Email':
            results = posts.objects.filter( Email__contains =  request.data['input']);
            
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)


@api_view(["POST"])
def profilePull(request):
    if request.method == 'POST':
        id = request.data.get("id")
        results = users.objects.filter(id=id)
        serialize = adminPullSerialize(results,many=True)
        return Response(serialize.data,status=status.HTTP_201_CREATED)

@api_view(["PUT"])
def profileUpdate(request,pk):
    deleted = ""
    if request.method == 'PUT':
        saveserialize = profileSerialize(data=request.data)
        if saveserialize.is_valid():
            users.objects.filter(id=pk).update(FirstName=saveserialize.data["FirstName"]) 
            users.objects.filter(id=pk).update(LastName=saveserialize.data["LastName"]) 
            users.objects.filter(id=pk).update(Roles=saveserialize.data["Roles"]) 
            users.objects.filter(id=pk).update(Organization=saveserialize.data["Organization"]) 
            users.objects.filter(id=pk).update(Consent=saveserialize.data["Consent"]) 
            if saveserialize.data["Consent"] == 'unconsented':
                users.objects.filter(id=pk).delete()
                deleted = "deleted"
            return Response({"data":saveserialize.data,"deleted":deleted},status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
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
        results = tracker.objects.all()
        serialize = trackerPullSerialize(results, many=True)
        return Response(serialize.data)

    
@api_view(['PUT'])
def trackerUpdate(request, pk):
    if request.method == 'PUT':
        saveserialize = trackerUpdateSerialize(data=request.data, allow_null = True)
        if saveserialize.is_valid():
            # .objects.filter(id=pk).update(Category=saveserialize.data['Category'])
            # .objects.filter(id=pk).update(Description=saveserialize.data['Description'])
            # .objects.filter(id=pk).update(Quantity=saveserialize.data['Quantity'])
            # .objects.filter(id=pk).update(Qunits=saveserialize.data['Qunits'])
            # .objects.filter(id=pk).update(amountToClients=saveserialize.data['amountToClients'])
            # .objects.filter(id=pk).update(amountToAFeed=saveserialize.data['amountToAFeed'])
            # .objects.filter(id=pk).update(amountToCompost=saveserialize.data['amountToCompost'])
            # .objects.filter(id=pk).update(amountToPartNet=saveserialize.data['amountToPartNet'])
            # .objects.filter(id=pk).update(amountToLandfill=saveserialize.data['amountToLandfill'])
            # .objects.filter(id=pk).update(percentClients=saveserialize.data['percentClients'])
            # .objects.filter(id=pk).update(percentAFeed=saveserialize.data['percentAFeed'])
            # .objects.filter(id=pk).update(percentCompost=saveserialize.data['percentCompost'])
            # .objects.filter(id=pk).update(percentPartNet=saveserialize.data['percentPartNet'])
            # .objects.filter(id=pk).update(percentLandfill=saveserialize.data['percentLandfill'])
            return Response(saveserialize.data, status=status.HTTP_201_CREATED)
        
        return Response(saveserialize.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['GET'])
def trackerPercentageSum(request):
    if request.method == 'GET':
        sum = tracker.objects.aggregate(Sum('percentClients'),Sum('percentAFeed'),Sum('percentCompost'),Sum('percentPartNet'),Sum('percentLandfill'))
        return Response(sum, status=status.HTTP_200_OK)  

@api_view(['GET'])
def trackerCategorySum(request):
    if request.method == 'GET':
        sum = tracker.objects.filter(Category='Fresh Produce').aggregate(Produce = Sum('Quantity')),tracker.objects.filter(Category='Meat').aggregate(Meat = Sum('Quantity')),tracker.objects.filter(Category='Canned Food').aggregate(Canned_Food = Sum('Quantity')),tracker.objects.filter(Category='Bread').aggregate(Bread = Sum('Quantity')),tracker.objects.filter(Category='Dairy').aggregate(Dairy = Sum('Quantity')), tracker.objects.filter(Category='Reclaimed').aggregate(Reclaimed = Sum('Quantity'))
        return Response(sum, status=status.HTTP_200_OK) 


@api_view(["POST"])
def NetworkGraphing(request):
    if request.method == 'POST':
        results = tracker.objects.filter(Email = request.data['user_email']).aggregate(Sum('percentClients'),Sum('percentAFeed'),Sum('percentCompost'),Sum('percentPartNet'),Sum('percentLandfill'))
        results2 = tracker.objects.filter(Email=request.data['compare_email']).aggregate(Sum('percentClients'),Sum('percentAFeed'),Sum('percentCompost'),Sum('percentPartNet'),Sum('percentLandfill'))
        return Response({"user":results,"comparee":results2})
    
@api_view(["GET"])
def NetworkSorting(request):
    timer = datetime.datetime.utcnow().isoformat(sep='T',timespec='seconds')
    if request.method == 'GET':
        results = posts.objects.filter(date_time__lt = timer)
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)






