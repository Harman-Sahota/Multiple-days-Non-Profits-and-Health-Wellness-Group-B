import os
from django.shortcuts import render
from django.shortcuts import render
from django.db import connection
from django.shortcuts import redirect
import json
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')
