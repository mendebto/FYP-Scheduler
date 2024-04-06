from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import BaseUserManager

# Create your models here.
class AvailableTimes(models.Model):
    availabletimes = models.CharField(max_length=100)
    class Meta:
        db_table = "available_times"    

class StaffUser(models.Model):
    staff_id = models.CharField(max_length=10, primary_key=True)
    password = models.CharField(max_length=100)
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=30)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    

    class Meta:
        db_table = "staff_user"

class StudentUser(models.Model):
    student_id = models.CharField(max_length=10, primary_key=True)
    supervisor = models.ForeignKey(StaffUser, on_delete=models.CASCADE )
    password = models.CharField(max_length=100)
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=30)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = "student_user"

class GeneratedTimetable(models.Model):
    staffuser = models.ForeignKey(StaffUser, models.DO_NOTHING)
    chosentimes = models.ForeignKey(AvailableTimes, models.DO_NOTHING)

    class Meta:
        db_table = "generated_timetable"
