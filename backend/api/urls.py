from django.urls import path
from . import views

urlpatterns = [
    path("registerInsert/",views.registerInsert),
    path("adminInsert/",views.adminInsert),
    path("adminPull/",views.adminPull),
    path("adminPullApprove/",views.adminPullApprove),
    path("adminPullDecline/",views.adminPullDecline),
    path("adminUpdate/<pk>",views.adminUpdate),
    # path("commentInsert/",views.commentInsert),
    path("login/",views.Login.as_view(),name='login'),
    path("networkInsert/",views.networkInsert),
    path("networkPull/",views.networkPull),
    path("profileUpdate/<pk>",views.profileUpdate),
    path('trackerInsert/',views.trackerInsert),
    path('trackerPull/',views.trackerPull),
    path('trackerUpdate/',views.trackerUpdate)

]