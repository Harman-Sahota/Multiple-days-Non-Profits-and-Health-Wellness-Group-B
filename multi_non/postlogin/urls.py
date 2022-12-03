from django.urls import path
from . import views

urlpatterns = [
    path('overview/', views.overview,name='overview'),
    path('tracker/', views.tracker,name='tracker'),
    path('network/', views.network,name='network'),
    path('profile/', views.profile,name='profile'),
    path('admin/', views.admin,name='admin'),
    path('network/', views.network,name='network'),
    path('ajax/getData',views.getData,name="getData"),

    path('comment/<str:product>/<str:qty>/<str:units>/<slug:description>/<str:status>',views.comment,name="comment"),
     path('comment/',views.comment,name="comment")


]
