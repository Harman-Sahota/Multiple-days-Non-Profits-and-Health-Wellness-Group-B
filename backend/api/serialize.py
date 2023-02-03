from rest_framework import serializers
from api.models import users
from api.models import permissions

class userSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
    
class adminInsertSerialize(serializers.ModelSerializer):
    class Meta:
        model = permissions
        fields = '__all__'
        