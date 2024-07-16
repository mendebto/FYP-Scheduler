from django.urls import path
from django.conf.urls import include
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'availtimes', AvailTimesViewSet)
router.register(r'students', StudentViewSet)
router.register(r'staffs', StaffViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('student/logout/', LogoutView.as_view(), name='logout'),
]