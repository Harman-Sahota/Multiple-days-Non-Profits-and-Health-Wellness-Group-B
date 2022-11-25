import imp
from turtle import title
from django.shortcuts import render
from django.http import HttpResponse
from foodsaviour.models import users
from django.db import connection
from django.contrib.auth.hashers import make_password
from django.shortcuts import redirect

def register(request):
    if request.method == "POST":
        newUser = users()
        newUser.Roles = str(request.POST.getlist("roles[]"))
        newUser.FirstName = request.POST.get("firstname")
        newUser.LastName = request.POST.get("lastname")
        newUser.Email = request.POST.get("email")
        newUser.Password = request.POST.get("password")
        newUser.Consent = request.POST.get("consent", False)
        newUser.Organization = request.POST.get("organization")
        cursor = connection.cursor()
        sql = "INSERT INTO users (FirstName,LastName,Email,Password,Roles,Consent,Organization) VALUES (%s, %s,%s, %s,%s, %s,%s )"
        val = (newUser.FirstName, newUser.LastName, newUser.Email,
               newUser.Password, newUser.Roles, newUser.Consent, newUser.Organization)
        cursor.execute(sql, val)
   
        request.session['FirstName'] =  newUser.FirstName
        request.session["LastName"]=  newUser.LastName
        request.session['Roles']= newUser.Roles
        request.session['Email']=  newUser.Email
        request.session["Organization"]= newUser.Organization

        return redirect('../../postlogin/tracker')

    return render(request, 'foodsaviour/register.html', {'title': 'Register'})


def home(request):
    return render(request, 'foodsaviour/home.html', {'title': 'Home'})


def login(request):
    if request.method == "POST":
        newUser = users()
        newUser.Email = request.POST.get("email")
        newUser.Password = request.POST.get("password")

        if newUser.Email != "" and newUser.Password != "":

            cursor = connection.cursor()

            # Check if the email and password exist in the database
            sql = "SELECT Email, Password FROM users WHERE Email = %s AND Password = %s"
            values = (newUser.Email, newUser.Password)
            cursor.execute(sql, values)
            rows = cursor.fetchall()
            numberOfRecords = len(rows)

            sql2 = "SELECT * FROM users WHERE Email = %s"
            values = (newUser.Email)
            cursor.execute(sql2, values)
            rows = cursor.fetchall()
      
         
            request.session['FirstName'] = rows[0][0]
            request.session['LastName'] = rows[0][1]
            request.session['Email'] = rows[0][2]
            request.session['Organization'] = rows[0][7]
            request.session['Roles'] = rows[0][4]
            request.session['Status'] = rows[0][8]

            if (numberOfRecords > 0):
                return redirect("../../postlogin/tracker")
            else:
                pass
        
    return render(request, 'foodsaviour/login.html', {'title': 'Login'})


def about(request):
    return render(request, 'foodsaviour/about.html', {'title': 'About'})


def contact(request):
    return render(request, 'foodsaviour/contact.html', {'title': 'Contact'})


def resetPassword(request):
    return render(request, 'foodsaviour/resetPassword.html', {'title': 'Reset Password'})
