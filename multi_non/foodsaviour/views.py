import imp
from turtle import title
from django.shortcuts import render
from django.http import HttpResponse


def register(request):
    return render(request, 'foodsaviour/register.html', {'title': 'Register'})

def home(request):
    return render(home, 'foodsaviour/home.html', {'title': 'Home'})
    