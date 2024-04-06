from rest_framework import serializers
from django.db.models import User
from .models import times

class AvailTimesSerializer(serializers.ModelSerializer):
    class Meta:
        model=AvailableTimes
        fields='__all__' # ('firstname', 'lastname')
 
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        queryset=User.objects.all()
        model=StudentUser
        fields=('student_id', 'supervisor', 'password', 'firstname', 'lastname')
        extra_kwargs = {'password': {'write_only': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        queryset=User.objects.all()
        model=StaffUser
        fields=('staff_id', 'password', 'firstname', 'lastname')
        extra_kwargs = {'password': {'write_only': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user