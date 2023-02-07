from django.urls import path

from . import views

urlpatterns = [
    path("registerInsert/",views.registerInsert),
    path("adminInsert/",views.adminInsert),
    path("adminPull/",views.adminPull),
    path("adminUpdate/<pk>",views.adminUpdate),
    path("commentInsert/",views.commentInsert)
]