import os
from django.shortcuts import render
from django.shortcuts import render
from django.db import connection
from .models import users, permissions, posts,comments
from .models import inventory
from django.shortcuts import redirect
import json
from django.http import JsonResponse
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
        newData.Clients = request.POST.get("clients")
        newData.AFeed = request.POST.get("animalFeed")
        newData.Compost = request.POST.get("compost")
        newData.PartNet = request.POST.get("partnet")
        newData.Landfill = request.POST.get("landfill")
        cursor = connection.cursor()
        if request.POST.get("description"):
            sql = "INSERT INTO inventory (Description,Category,Quantity,Qunits,DivertClients,DivertAFeed,DivertCompost,DivertPartNet,DivertLandfill,Clients,AFeed,Compost,PartNet,Landfill) VALUES (%s, %s,%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            val = (newData.Description, newData.Category, newData.Quantity,
               newData.Qunits,newData.DivertClients, newData.DivertAFeed, newData.DivertCompost, newData.DivertPartNet, newData.DivertLandfill, newData.Clients, newData.AFeed, newData.Compost, newData.PartNet, newData.Landfill)
            cursor.execute(sql, val)
        
        if request.POST.get('field'):
            test = request.POST.get('field').split('|')
            cursor = connection.cursor()
            sql2 = "DELETE FROM inventory WHERE Description = %s AND Category = %s AND Quantity = %s AND Qunits = %s AND DivertClients = %s AND DivertAFeed = %s AND DivertCompost = %s AND DivertPartNet = %s AND DivertLandfill = %s" 
            val2 = (test[0],test[1],test[2],test[3],test[4],test[5],test[6],test[7],test[8])
            cursor.execute(sql2,val2)
        return redirect('../../postlogin/tracker')
        


    cursor = connection.cursor()
    sql = "SELECT Description AS Description,Category AS Category,Quantity,Qunits,DivertClients,DivertAFeed,DivertCompost,DivertPartNet,DivertLandfill FROM inventory"
    cursor.execute(sql)
    rows = cursor.fetchall()

    sql2 = "SELECT Description AS Description,Category AS Category,Quantity,Qunits,Clients,AFeed,Compost,PartNet,Landfill FROM inventory"
    cursor.execute(sql2)
    rows2 = cursor.fetchall()
    items = []
    for row in rows2:
        items.append({'Description': row[0], 'Category': row[1], 'Quantity': row[2], "Qunits": row[3], "DivertClients": row[4],
                     "DivertAFeed": row[5], "DivertCompost": row[6], "DivertPartNet": row[7], "DivertLandfill": row[8]})

    context = {
        'title': 'Tracker',
        'Object': rows,
        'json': json.dumps(items)
    }

    cursor = connection.cursor()
    # sql3 = "select * from permissions where role = %s || role = %s" 
    # val3 = (request.session['Roles'])
    # cursor.execute(sql3,val3)
    # rows3 = cursor.fetchall()
    

    

    return render(request, 'postlogin/tracker.html', context)


def network(request):
    if request.method == "POST":
        newPost = posts()
        newPost.Product = request.POST.get("product")
        newPost.Type = request.POST.get("type")
        newPost.Quantity = request.POST.get("quantity")
        newPost.Units = request.POST.get("qunits")
        newPost.Description = request.POST.get("description")
        cursor = connection.cursor()
        sql = "INSERT INTO posts VALUES (%s, %s,%s, %s,%s)"
        val = (newPost.Product, newPost.Type, newPost.Quantity,
               newPost.Units, newPost.Description)
        cursor.execute(sql, val)
        return redirect("../../postlogin/network")
    cursor = connection.cursor()
    context = {
        'title': 'Network',

    }
    return render(request, 'postlogin/network.html', context)


def getData(request):
    cursor = connection.cursor()
    sql = "SELECT * FROM posts"
    cursor.execute(sql)
    rows = cursor.fetchall()
    items = []
    for row in rows:
        items.append({'product': row[0], 'Type': row[1],
                     'Quantity': row[2], 'Qunits': row[3], 'desc': row[4]})
    return JsonResponse({'posts': list(items)})


def profile(request):
    return render(request, 'postlogin/profile.html', {'title': 'Profile'})




def admin(request):


    newUser = users()
    newUser.Approve = request.POST.getlist("approve[]")
    newUser.Email = request.POST.getlist("id[]")
    for i, j in zip(newUser.Approve, newUser.Email):
            if (i == 'approve' or i == 'decline'):
                cursor = connection.cursor()
                sql2 = "UPDATE users SET Approve = %s WHERE id = %s"
                val = (i, j)
                cursor.execute(sql2, val)
    if request.method == "POST":
      

        newPerm = permissions()
        newPerm.Role = request.POST.getlist("role[]")

        for object in newPerm.Role:
            
            if (object == "User non-profit managers/CEO"):
                newPerm.Metrics = request.POST.getlist("metrics-CEO[]")
                newPerm.Network = request.POST.getlist("network-CEO")
                newPerm.readwrite = request.POST.getlist("readwrite-CEO")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

            if (object == "User non-profit warehouse boss"):
                newPerm.Metrics = request.POST.getlist("metrics-warehouse[]")
                newPerm.Network = request.POST.getlist("network-warehouse")
                newPerm.readwrite = request.POST.getlist("readwrite-warehouse")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

            if (object == "Admin"):
                newPerm.Metrics = request.POST.getlist("metrics-Admin[]")
                newPerm.Network = request.POST.getlist("network-Admin")
                newPerm.readwrite = request.POST.getlist("readwrite-Admin")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

            if (object == "User non-profit volunteer"):
                newPerm.Metrics = request.POST.getlist("metrics-volunteer[]")
                newPerm.Network = request.POST.getlist("network-volunteer")
                newPerm.readwrite = request.POST.getlist("readwrite-volunteer")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

            if (object == "Sponsors"):
                newPerm.Metrics = request.POST.getlist("metrics-Sponsors[]")
                newPerm.Network = request.POST.getlist("network-Sponsors")
                newPerm.readwrite = request.POST.getlist("readwrite-Sponsors")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

            if (object == "Experts"):
                newPerm.Metrics = request.POST.getlist("metrics-Experts[]")
                newPerm.Network = request.POST.getlist("network-Experts")
                newPerm.readwrite = request.POST.getlist("readwrite-Experts")
                cursor = connection.cursor()
                sql = "UPDATE permissions set metrics = %s,network=%s,readwrite=%s WHERE role = %s "
                val = (str(newPerm.Metrics), newPerm.Network,
                       newPerm.readwrite, object)
                cursor.execute(sql, val)

       
        

        return redirect('../../postlogin/admin')
    cursor = connection.cursor()
    sql = "SELECT CONCAT(FirstName, ' ', LastName) AS FirstName,Email AS Email,Roles AS Roles,Approve FROM users"
    cursor.execute(sql)
    rows = cursor.fetchall()
    context = {
        'title': 'Admin',
        'Object': rows
    }

    return render(request, 'postlogin/admin.html', context)

def comment(request,product = "default",qty = "default",units="default",description='default',status='default'):
    if request.method == "POST":
        newComment = comments()
        newComment.Comments = request.POST.get("comment")
        newComment.Username = request.session['FirstName'] + " " + request.session['LastName']
        newComment.Product = product
        newComment.Type = status
        newComment.Quantity = qty
        newComment.Units = units
        newComment.Description = description.replace("_"," ")
       
      

        cursor = connection.cursor()
        sql = "INSERT INTO Comments VALUES (%s, %s,%s, %s,%s,%s,%s)"
        val = (newComment.Product,newComment.Type , newComment.Quantity,newComment.Units, newComment.Description,newComment.Comments, newComment.Username )
        cursor.execute(sql, val)
        return redirect(os.path.join('../../../../../../postlogin/comment',product,qty,units,description,status).replace("\\","/"))

    cursor = connection.cursor()
    sql2 = "SELECT * FROM Comments WHERE product = %s AND Type = %s AND Quantity = %s AND Units = %s"
    val2 = (product,status,qty,units)
    cursor.execute(sql2,val2)
    rows = cursor.fetchall()
    print(rows)
    Context = {
        'title':'Comment',
        'Object':rows
    }
        

    return render(request,'postlogin/comment.html',Context)
