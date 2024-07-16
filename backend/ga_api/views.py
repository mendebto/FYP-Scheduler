from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.forms import Form
from django.views import View
from rest_framework import viewsets, status
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken, TokenError
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from .models import StudentUser, StaffUser, AvailableTimes
from .serializers import StaffSerializer, StudentSerializer, AvailTimesSerializer

#Student view
class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset=StudentUser.objects.all()

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
    
    @action(detail=True, methods=['post'])
    def login(self,request):
        email = request.data['email']
        password = request.data['password']

        try: 
            user = User.objects.get(email=email,password=password)
        except User.DoesNotExist:
            raise AuthenenticationFailed('Invalid credentials')
        if user is  None:
            raise AuthenenticationFailed('Invalid credentials')
        if not user.check_password(password):
            raise AuthenenticationFailed('Invalid credentials')
        access_token = AccessToken.for_user(user)
        refresh_token = RefreshToken.for_user(user)
        return Response({
            'access_token':str(access_token),
            'refresh_token':str(refresh_token)
        },status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])       
    def register(self,request):
        serializers = StudentSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'])
    def logout(self,request):
        try:
            refresh_token = request.data['refresh_token']
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
            return Response({'message':'Successfully logged out'},status=status.HTTP_200_OK)
        except TokenError:
            return Response({'message':'Invalid token'},status=status.HTTP_400_BAD_REQUEST)
        raise AuthenenticationFailed('Invalid credentials')

#Staff view
class StaffViewSet(viewsets.ModelViewSet):
    serializer_class = StaffSerializer
    queryset=StaffUser.objects.all()
    @action(detail=True, methods=['post'])
    def login(self,request):
        email = request.data['email']
        password = request.data['password']

        try: 
            user = User.objects.get(email=email,password=password)
        except User.DoesNotExist:
            raise AuthenenticationFailed('Invalid credentials')
        if user is  None:
            raise AuthenenticationFailed('Invalid credentials')
        if not user.check_password(password):
            raise AuthenenticationFailed('Invalid credentials')
        access_token = AccessToken.for_user(user)
        refresh_token = RefreshToken.for_user(user)
        return Response({
            'access_token':str(access_token),
            'refresh_token':str(refresh_token)
        },status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def register(self,request):
        serializers = StaffSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'])
    def logout(self,request):
        try:
            refresh_token = request.data['refresh_token']
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
            return Response({'message':'Successfully logged out'},status=status.HTTP_200_OK)
        except TokenError:
            return Response({'message':'Invalid token'},status=status.HTTP_400_BAD_REQUEST)
        raise AuthenenticationFailed('Invalid credentials')

#Available times view
class AvailTimesViewSet(viewsets.ModelViewSet):
    serializer_class = AvailTimesSerializer
    queryset=AvailableTimes.objects.all()