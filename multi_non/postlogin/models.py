from django.db import models

# Create your models here.
class users(models.Model):
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Password = models.CharField(max_length=255)
    Roles = models.CharField(max_length=255)
    Consent = models.CharField(max_length=50)
    Organization = models.CharField(max_length=255,null=True)
    Approve = models.CharField(max_length=50,null=True)

class inventory(models.Model):
    Description = models.CharField(max_length=255)
    Category = models.CharField(max_length=255)
    Quantity = models.PositiveIntegerField()
    Qunits = models.CharField(max_length=255)
    DivertClients = models.PositiveIntegerField()
    DivertAFeed = models.PositiveIntegerField()
    DivertCompost = models.PositiveIntegerField()
    DivertPartNet = models.PositiveIntegerField()
    DivertLandfill = models.PositiveIntegerField()
