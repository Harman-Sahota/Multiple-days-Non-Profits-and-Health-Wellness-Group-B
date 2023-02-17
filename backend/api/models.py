
from django.db import models

class users(models.Model):
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Password = models.CharField(max_length=255)
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
    Quantity = models.IntegerField(max_length=55)
    Qunits = models.CharField(max_length=255)
    amountToClients = models.IntegerField(max_length=55)
    amountToAFeed = models.IntegerField(max_length=55)
    amountToCompost = models.IntegerField(max_length=55)
    amountToPartNet = models.IntegerField(max_length=55)
    amountToLandfill = models.IntegerField(max_length=55)
    percentClients = models.IntegerField(max_length=55)
    percentAFeed = models.IntegerField(max_length=55)
    percentCompost = models.IntegerField(max_length=55)
    percentPartNet = models.IntegerField(max_length=55)
    percentLandfill = models.IntegerField(max_length=55)

    class Meta:
        db_table = "tracker"