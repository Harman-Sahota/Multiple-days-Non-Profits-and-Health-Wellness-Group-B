from django.urls import path
from . import views

urlpatterns = [
    path("registerInsert/",views.registerInsert),
    path("adminInsert/",views.adminInsert),
    path("adminPull/",views.adminPull),
    path("adminPullApprove/",views.adminPullApprove),
    path("adminPullDecline/",views.adminPullDecline),
    path("adminUpdate/<pk>",views.adminUpdate),
    path("commentInsert/",views.commentInsert),
    path("login/",views.Login.as_view(),name='login')
]