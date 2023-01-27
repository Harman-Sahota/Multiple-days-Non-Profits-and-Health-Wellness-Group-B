from api.models import users
from api.serialize import userSerialize
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(["POST"])
def test(request):
    if request.method == "POST":
        saveserialize = userSerialize(data = request.data)
        if saveserialize.is_valid():
            saveserialize.save()
            return Response(saveserialize.data,status=status.HTTP_201_CREATED)
        return Response(saveserialize.data,status=status.HTTP_400_BAD_REQUEST)
        
