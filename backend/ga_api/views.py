from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.forms import MyForm
from django.core import serializers
from django.views import View
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .models import ga
from .serializers import UserSerializers, PasswordSerializer
# Create your views here.
"""
@api_view(['GET'])
def gettime(request):
    return #return times

def getgatt():#
    pass

@api_view(['POST'])
def uploadsttimes():#student uploads availability times
    pass
def uploadsvtimes():#supervisor uploads availability times
    pass
@api_view(['PUT'])
def updatesvtime():
    pass
def updatesttime():
    pass
@api_view(['DELETE'])
def deletetime():
    pass
"""

#User view
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset=User.objects.all()
    
    @action(detail=True, methods=['post'])
    def set_password(self,request,pk=None):
        user = self.get_object()
        serializers = PasswordSerializer(data=request.data)
        if serializers.is_valid():
            user.set_password(serializers.validated_data['password'])
            user.save()
            return Response({'status':'password set'})
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
        
        