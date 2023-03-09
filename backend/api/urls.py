from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path("registerInsert/", views.registerInsert),
    path("adminInsert/", views.adminInsert),
    path("adminPull/", views.adminPull),
    path("adminPullApprove/", views.adminPullApprove),
    path("adminPullDecline/", views.adminPullDecline),
    path("adminUpdate/<pk>", views.adminUpdate),
    # path("commentInsert/",views.commentInsert),
    path("login/", views.Login.as_view(), name='login'),
    path("networkInsert/", views.networkInsert),
    path("networkPull/", views.networkPull),
    path("networkUpdate/<pk>",views.networkUpdate),
    path("networkPullSharing/", views.networkPullSharing),
    path("networkPullReceiving/", views.networkPullReceiving),
    path("networkSearch/", views.networkSearch),
    path("networkPullCreator/", views.networkPullCreator), 
    path("profileUpdate/<pk>", views.profileUpdate),
    path("profilePull/", views.profilePull),
    path('trackerInsert/', views.trackerInsert),
    path('trackerPull/', views.trackerPull),
    path('trackerUpdate/', views.trackerUpdate),
    path('trackerPercentageSum/', views.trackerPercentageSum),
     path('trackerCategorySum/', views.trackerCategorySum),
    # path('token/', jwt_views.TokenObtainPairView.as_view(),name='token_obtain_pair'),
    # path('token/refresh/',  jwt_views.TokenRefreshView.as_view(),name='token_refresh')

]
