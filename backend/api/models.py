
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.contrib.auth.models import UserManager

# class UserManager(BaseUserManager):
#     def create_user(self, email,Email,username=None,password=None):
    

#         if email is None:
#             raise TypeError('Users must have an email address.')

#         user = self.model(username=username, email=self.normalize_email(email))
#         user.set_password(password)
#         user.save()

#         return user

#     def create_superuser(self, email, password,username=None):
       
#         if password is None:
#             raise TypeError('Superusers must have a password.')

#         user = self.create_user(username, email, password)
#         user.is_superuser = True
#         user.is_staff = True
#         user.save()

#         return user

class users(models.Model):
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    Email = models.EmailField(max_length=255,unique=True)
    Password = models.CharField(max_length=255,default='Password')
    Roles = models.CharField(max_length=255)
    Consent = models.CharField(max_length=50)
    Organization = models.CharField(max_length=255, null=True)
    Approve = models.CharField(max_length=50,null=True)
    # last_login = models.CharField(max_length=50,null=True)
    # USERNAME_FIELD = 'Email'
    # REQUIRED_FIELDS = ['Password']
    # objects = UserManager()
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
    product = models.CharField(max_length=255)
    Type = models.CharField(max_length=255)
    Quantity = models.IntegerField()
    Units = models.CharField(max_length=3)
    Description = models.CharField(max_length=255)
    Email = models.EmailField(max_length=255)
    date_time = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=255,default='open')
    shared_with = models.CharField(max_length=255,default='')
    id = models.AutoField(primary_key=True);


    class Meta:
        db_table = "posts"

class tracker(models.Model):
    Category = models.CharField(max_length=255)
    Description = models.CharField(max_length=255)
    Quantity = models.FloatField()
    Qunits = models.CharField(max_length=255)
    amountToClients = models.FloatField()
    amountToAFeed = models.FloatField()
    amountToCompost = models.FloatField()
    amountToPartNet = models.FloatField()
    amountToLandfill = models.FloatField()
    percentClients = models.FloatField()
    percentAFeed = models.FloatField()
    percentCompost = models.FloatField()
    percentPartNet = models.FloatField()
    percentLandfill = models.FloatField()
    date_time = models.DateTimeField(auto_now_add=True)
    Email = models.EmailField(max_length=255)
    Organization = models.CharField(max_length=255, null=True)

    #Email = models.CharField(max_length=255)


    class Meta:
        db_table = "tracker"
    
