from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import GAViewSet

ga_router = DefaultRouter
ga_router.register(r'ga', GAViewSet)