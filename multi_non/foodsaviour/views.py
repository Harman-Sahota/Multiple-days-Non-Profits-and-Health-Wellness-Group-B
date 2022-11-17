import imp
from turtle import title
from django.shortcuts import render
from django.http import HttpResponse
from foodsaviour.models import users
from django.db import connection
 

def register(request):
    if request.method == "POST":
        newUser = users() 
        newUser.Roles = str(request.POST.getlist("roles[]"))
        newUser.FirstName = request.POST.get("firstname")
        newUser.LastName = request.POST.get("lastname")
        newUser.Email = request.POST.get("email")
        newUser.Password = request.POST.get("password")
        newUser.Consent = request.POST.get("consent",False)
        newUser.Organization = request.POST.get("organization")
        cursor = connection.cursor()
        sql = "INSERT INTO users (FirstName,LastName,Email,Password,Roles,Consent) VALUES (%s, %s,%s, %s,%s, %s,%s )"
        val = (newUser.FirstName,newUser.LastName,newUser.Email,newUser.Password,newUser.Roles,newUser.Consent,newUser.Organization)
        cursor.execute(sql,val)

    return render(request, 'foodsaviour/register.html', {'title': 'Register'})

def home(request):
    return render(request, 'foodsaviour/home.html', {'title': 'Home'})
    
def login(request):
    return render(request, 'foodsaviour/login.html', {'title': 'Login'})

def about(request):
    return render(request, 'foodsaviour/about.html', {'title': 'About'})

def contact(request):
    return render(request, 'foodsaviour/contact.html', {'title': 'Contact'})

def resetPassword(request):
    return render(request, 'foodsaviour/resetPassword.html', {'title': 'Reset Password'})