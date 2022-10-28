import imp
from turtle import title
from django.shortcuts import render
from django.http import HttpResponse


def register(request):
    return render(request, 'healthenow/register.html', {'title': 'register'})
    