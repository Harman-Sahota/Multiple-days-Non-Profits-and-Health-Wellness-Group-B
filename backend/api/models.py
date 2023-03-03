
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import UserManager

class users(models.Model):
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    Email = models.EmailField(max_length=255,unique=True)
    Password = models.CharField(max_length=255,default='Password')
    Roles = models.CharField(max_length=255)
    Consent = models.CharField(max_length=50)
    Organization = models.CharField(max_length=255, null=True)
    Approve = models.CharField(max_length=50,null=True)
    class Meta: 
        db_table = "users"


class permissions(models.Model):
    role = models.CharField(primary_key=True,max_length=255)
    metrics = models.CharField(max_length=255,null=True,blank=True)
    network = models.CharField(max_length=10,null=True,blank=True)
    readwrite = models.CharField(max_length=10,null=True,blank=True)
    
    class Meta:
        db_table = "permissions"

# class comments(models.Model):
#     product = models.CharField(max_length=255)
#     Type = models.CharField(max_length=255)
#     Quantity = models.IntegerField()
#     Units = models.CharField(max_length=3)
#     Description = models.CharField(max_length=255)
#     Comments = models.CharField(max_length=255)
#     username = models.CharField(max_length=255)

#     class Meta:
#         db_table = "comments"

class posts(models.Model):
    product = models.CharField(max_length=255,primary_key = True)
    Type = models.CharField(max_length=255)
    Quantity = models.IntegerField()
    Units = models.CharField(max_length=3)
    Description = models.CharField(max_length=255)

    class Meta:
        db_table = "posts"

class tracker(models.Model):
    Category = models.CharField(max_length=255)
    Description = models.CharField(max_length=255)
    Quantity = models.IntegerField()
    Qunits = models.CharField(max_length=255)
    amountToClients = models.IntegerField()
    amountToAFeed = models.IntegerField()
    amountToCompost = models.IntegerField()
    amountToPartNet = models.IntegerField()
    amountToLandfill = models.IntegerField()
    percentClients = models.IntegerField()
    percentAFeed = models.IntegerField()
    percentCompost = models.IntegerField()
    percentPartNet = models.IntegerField()
    percentLandfill = models.IntegerField()

    class Meta:
        db_table = "tracker"
    
