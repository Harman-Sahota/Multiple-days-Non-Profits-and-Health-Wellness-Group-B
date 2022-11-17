from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse



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
     return render(request, 'postlogin/admin.html', {'title': 'Admin'})