from rest_framework import serializers
from api.models import users

class userSerialize(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'