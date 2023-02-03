from api.models import users
from api.models import permissions
from api.serialize import userSerialize
from api.serialize import adminInsertSerialize
from api.serialize import commentsSerialize
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
        saveserialize = adminInsertSerialize(data=request.data)
        if saveserialize.is_valid():
            saveserialize.save();
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
        
