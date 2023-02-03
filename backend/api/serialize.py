from rest_framework import serializers
from api.models import users
from api.models import permissions
from api.models import comments

class userSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
    
class adminInsertSerialize(serializers.ModelSerializer):
    class Meta:
        model = permissions
        fields = '__all__'
        
class commentsSerialize(serializers.ModelSerializer):
    class Meta:
        model = comments
        fields = ['Comments']