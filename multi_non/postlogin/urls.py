from django.urls import path
from . import views

urlpatterns = [
    path('overview/', views.overview,name='overview'),
    path('tracker/', views.tracker,name='tracker'),
    path('network/', views.network,name='network'),
    path('profile/', views.profile,name='profile')
]
