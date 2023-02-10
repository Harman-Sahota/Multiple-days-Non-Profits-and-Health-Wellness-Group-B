
from api.models import users
from api.models import posts
from api.models import permissions
from api.serialize import userSerialize
from api.serialize import adminInsertSerialize
from api.serialize import commentsSerialize
from api.serialize import adminPullSerialize
from api.serialize import adminUpdateSerialize
from api.serialize import networkInsertSerialize
from api.serialize import networkPullSerialize
from api.serialize import profileSerialize
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
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)       
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
        saveserialize = adminUpdateSerialize(data=request.data)
        if saveserialize.is_valid():
            users.objects.filter(id=pk).update(Approve=saveserialize.data["Approve"]) 
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)



        
@api_view(["POST"])
def commentInsert(request):
    if request.method == 'POST':
        saveserialize = commentsSerialize(data=request.data)
        if saveserialize.is_valid():
            saveserialize.save();
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

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
                "approve": results.Approve


            }
            return Response({"success":"success logged in","data":data},status=status.HTTP_200_OK)
        else:
            return Response({"error":"invalid login credentials"},status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def networkInsert(request):
    if request.method == "POST":
        saveserialize = networkInsertSerialize(data = request.data)
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)       
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def networkPull(request):
    if request.method == 'GET':
        results = posts.objects.all()
        serialize = networkPullSerialize(results,many=True)
        return Response(serialize.data)


@api_view(["PUT"])
def profileUpdate(request,pk):
    if request.method == 'PUT':
        saveserialize = profileSerialize(data=request.data)
        if saveserialize.is_valid():
            if not request.data["FirstName"]:
                users.objects.filter(id=pk).update(FirstName=saveserialize.data["FirstName"]) 
            if not request.filter(id=pk).data["LastName"]:
                users.objects.update(FirstName=saveserialize.data["LastName"]) 
            if not request.filter(id=pk).data["Email"]:
                users.objects.update(FirstName=saveserialize.data["Email"]) 
            if not request.filter(id=pk).data["Organization"]:
                users.objects.update(FirstName=saveserialize.data["Organization"]) 
            if not request.filter(id=pk).data["Consent"]:
                users.objects.update(FirstName=saveserialize.data["Consent"]) 
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)    
        return Response(saveserialize.data,status=status.HTTP_500_INTERNAL_SERVER_ERROR)