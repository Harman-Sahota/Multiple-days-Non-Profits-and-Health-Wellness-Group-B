
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
    product = models.CharField(max_length=255,primary_key = True)
    Type = models.CharField(max_length=255)
    Quantity = models.IntegerField()
    Units = models.CharField(max_length=3)
    Description = models.CharField(max_length=255)
    
    Email = models.CharField(max_length=255)


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

    #Email = models.CharField(max_length=255)


    class Meta:
        db_table = "tracker"
    
