from rest_framework import serializers
from api.models import users
from api.models import permissions
from api.models import comments
from api.models import posts


class userSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
    
class adminInsertSerialize(serializers.ModelSerializer):
    class Meta:
        model = permissions
        fields = '__all__'

class adminPullSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'

class adminUpdateSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ['Approve']
              
class commentsSerialize(serializers.ModelSerializer):
    class Meta:
        model = comments
        fields = ['Comments']

class networkInsertSerialize(serializers.ModelSerializer):
    class Meta:
        model = posts
        fields = '__all__'

class networkPullSerialize(serializers.ModelSerializer):
    class Meta:
        model = posts
        fields = '__all__'

class profileSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ['FirstName', 'LastName', 'Email', 'Organization', 'Consent']