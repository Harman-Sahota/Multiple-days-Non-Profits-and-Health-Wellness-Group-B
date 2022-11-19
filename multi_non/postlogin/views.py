from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection


# Create your views here.
def overview(request):
    return render(request, 'postlogin/overview.html', {'title': 'Overview'})


def tracker(request):
    return render(request, 'postlogin/tracker.html', {'title': 'Tracker'})


def network(request):
    return render(request, 'postlogin/network.html', {'title': 'Network'})


def profile(request):
    return render(request, 'postlogin/profile.html', {'title': 'Profile'})


def admin(request):
    cursor = connection.cursor()
    sql = "SELECT CONCAT(FirstName, ' ', LastName) AS FirstName,Email AS Email,Roles AS Roles FROM users"
    cursor.execute(sql)
    rows = cursor.fetchall()
    context = {
        'title': 'Admin',
        'Object': rows
    }

    if request.method == "POST":
        newUser = users()
        newUser.Approve = request.POST.getlist("approve")

    return render(request, 'postlogin/admin.html', context)
