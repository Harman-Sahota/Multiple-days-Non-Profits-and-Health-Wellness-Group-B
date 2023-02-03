
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
    role = models.CharField(max_length=255,null=True)
    metrics = models.CharField(max_length=255,null=True)
    network = models.CharField(max_length=10,null=True)
    readwrite = models.CharField(max_length=10,null=True)
    
    class Meta:
        db_table = "permissions"

class comments(models.Model):
    product = models.CharField(max_length=255)
    Type = models.CharField(max_length=255)
    Quantity = models.IntegerField()
    Units = models.CharField(max_length=3)
    Description = models.CharField(max_length=255)
    Comments = models.CharField(max_length=255)
    username = models.CharField(max_length=255)

    class Meta:
        db_table = "comments"