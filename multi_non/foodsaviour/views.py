import imp
from turtle import title
from django.shortcuts import render
from django.http import HttpResponse
from foodsaviour.models import users
from django.db import connection


def register(request):
    if request.method == "POST":
        newUser = users() 
        newUser.Roles = request.POST.get("roles")
        newUser.FirstName = request.POST.get("firstname")
        newUser.LastName = request.POST.get("lastname")
        newUser.Email = request.POST.get("email")
        newUser.Password = request.POST.get("password")
        newUser.Roles = request.POST.get("roles")
        newUser.Consent = request.POST.get("consent",False)
        cursor = connection.cursor()
        sql = "INSERT INTO users (FirstName,LastName,Email,Password,Roles,Consent) VALUES (%s, %s,%s, %s,%s, %s)"
        val = (newUser.FirstName,newUser.LastName,newUser.Email,newUser.Password,newUser.Roles,newUser.Consent)
        cursor.execute(sql,val)

    return render(request, 'foodsaviour/register.html', {'title': 'Register'})

def home(request):
    return render(request, 'foodsaviour/home.html', {'title': 'Home'})
    
def login(request):
    return render(request, 'foodsaviour/login.html', {'title': 'Login'})