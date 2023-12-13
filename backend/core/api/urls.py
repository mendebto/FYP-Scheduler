from rest_framework.routers import DefaultRouter
from ga.api.urls import ga_router
from django.urls import path,include

router = DefaultRouter

router.registry.extend(ga_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
