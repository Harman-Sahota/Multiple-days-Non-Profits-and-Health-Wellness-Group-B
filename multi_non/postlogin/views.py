from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse



# Create your views here.
def overview(request):
    return render(request, 'postlogin/overview.html', {'title': 'Overview'})
