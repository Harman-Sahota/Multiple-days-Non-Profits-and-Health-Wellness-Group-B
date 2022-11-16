from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register,name='register'),
    path('home/', views.home,name='home'),
    path('login/', views.login,name='login'),
    path('about/', views.about,name='about'),
    path('contact/', views.contact,name='contact'),
    path('resetPassword/', views.resetPassword,name='resetPassword')
]

