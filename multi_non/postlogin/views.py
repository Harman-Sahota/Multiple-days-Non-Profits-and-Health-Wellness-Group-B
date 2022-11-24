from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection
from .models import users
from .models import inventory
from django.shortcuts import redirect

# Create your views here.
def overview(request):
    return render(request, 'postlogin/overview.html', {'title': 'Overview'})


def tracker(request):
    if request.method == "POST":
        newData = inventory()
        newData.Description = request.POST.get("description")
        newData.Category = request.POST.get("category")
        newData.Quantity = request.POST.get("quantity")
        newData.Qunits = request.POST.get("qunits")
        newData.DivertClients = request.POST.get("clients")
        newData.DivertAFeed = request.POST.get("animalfeed")
        newData.DivertCompost = request.POST.get("compost/fert")
        newData.DivertPartNet = request.POST.get("partnet")
        newData.DivertLandfill = request.POST.get("landfill")
        cursor = connection.cursor()
        sql = "INSERT INTO inventory (Description,Category,Quantity,Qunits,DivertClients,DivertAFeed,DivertCompost,DivertPartNet,DivertLandfill) VALUES (%s, %s,%s, %s,%s,%s,%s,%s,%s)"
        val = (newData.Description, newData.Category, newData.Quantity,
               newData.Qunits, newData.DivertClients, newData.DivertAFeed, newData.DivertCompost, newData.DivertPartNet, newData.DivertLandfill)
        cursor.execute(sql, val)
        return redirect('../../postlogin/tracker')
        

    cursor = connection.cursor()
    sql = "SELECT Description AS Description,Category AS Category,Quantity,Qunits,DivertClients,DivertAFeed,DivertCompost,DivertPartNet,DivertLandfill FROM inventory"
    cursor.execute(sql)
    rows = cursor.fetchall()
    context = {
        'title': 'Tracker',
        'Object': rows
    }
    return render(request, 'postlogin/tracker.html', context)


def network(request):
    return render(request, 'postlogin/network.html', {'title': 'Network'})


def profile(request):
    return render(request, 'postlogin/profile.html', {'title': 'Profile'})


def admin(request):
    cursor = connection.cursor()
    sql = "SELECT CONCAT(FirstName, ' ', LastName) AS FirstName,Email AS Email,Roles AS Roles,Approve FROM users"
    cursor.execute(sql)
    rows = cursor.fetchall()
    context = {
        'title': 'Admin',
        'Object': rows
    }

    if request.method == "POST":
        newUser = users()
        newUser.Approve = request.POST.getlist("approve[]")
        newUser.Email = request.POST.getlist("id[]")
        for i, j in zip(newUser.Approve, newUser.Email):
            if(i == 'approve' or i == 'disapprove'):
                 cursor = connection.cursor()
                 sql2 = "UPDATE users SET Approve = %s WHERE id = %s"
                 val = (i,j)
                 cursor.execute(sql2,val)
        
        return redirect('../../postlogin/admin')

            

       

    return render(request, 'postlogin/admin.html', context)
