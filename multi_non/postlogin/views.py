from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection
from .models import users,permissions
from .models import inventory
from django.shortcuts import redirect
from django.http import JsonResponse
import json
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
        newData.DivertClients = request.POST.get("percentclients")
        newData.DivertAFeed = request.POST.get("percentanimalfeed")
        newData.DivertCompost = request.POST.get("percentcompost/fert")
        newData.DivertPartNet = request.POST.get("percentpartnet")
        newData.DivertLandfill = request.POST.get("percentlandfill")
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
    data = list(rows)
  
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

        newPerm = permissions()
        newPerm.Role = request.POST.getlist("role[]")
        for object in newPerm.Role:
            if(object == "User non-profit managers/CEO"):
                newPerm.Metrics = request.POST.getlist("metrics-CEO[]")
                newPerm.Network = request.POST.getlist("network-CEO")
                newPerm.readwrite = request.POST.getlist("readwrite-CEO")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)

            if(object == "User non-profit warehouse boss"):
                newPerm.Metrics = request.POST.getlist("metrics-warehouse[]")
                newPerm.Network = request.POST.getlist("network-warehouse")
                newPerm.readwrite = request.POST.getlist("readwrite-warehouse")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)

            if(object == "Admin"):
                newPerm.Metrics = request.POST.getlist("metrics-Admin[]")
                newPerm.Network = request.POST.getlist("network-Admin")
                newPerm.readwrite = request.POST.getlist("readwrite-Admin")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)

            if(object == "User non-profit volunteer"):
                newPerm.Metrics = request.POST.getlist("metrics-volunteer[]")
                newPerm.Network = request.POST.getlist("network-volunteer")
                newPerm.readwrite = request.POST.getlist("readwrite-volunteer")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)
 
            if(object == "Sponsors"):
                newPerm.Metrics = request.POST.getlist("metrics-Sponsors[]")
                newPerm.Network = request.POST.getlist("network-Sponsors")
                newPerm.readwrite = request.POST.getlist("readwrite-Sponsors")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)

            if(object == "Experts"):
                newPerm.Metrics = request.POST.getlist("metrics-Experts[]")
                newPerm.Network = request.POST.getlist("network-Experts")
                newPerm.readwrite = request.POST.getlist("readwrite-Experts")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics),newPerm.Network,newPerm.readwrite,object)
                cursor.execute(sql,val)



        for i, j in zip(newUser.Approve, newUser.Email):
            if(i == 'approve' or i == 'decline'):
                 cursor = connection.cursor()
                 sql2 = "UPDATE users SET Approve = %s WHERE id = %s"
                 val = (i,j)
                 cursor.execute(sql2,val)
        
        return redirect('../../postlogin/admin')

            

       

    return render(request, 'postlogin/admin.html', context)


    
