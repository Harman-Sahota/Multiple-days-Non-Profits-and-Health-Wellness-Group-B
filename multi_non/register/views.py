import imp
from django.shortcuts import render
from django.http import HttpResponse


def register(request):
    return HttpResponse("<h1>test</h1>")
    