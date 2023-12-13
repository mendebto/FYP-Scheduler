from django.db import models

# Create your models here.
"""
CONTAINS PYTHON CLASSES THAT DEFINE THE DB SCHEMA
MODELS ARE USER TO REPRESENT THE DATA THAT IS 
STORED IN THE DATABASE
"""
class Timeslot(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

class Supervisor(models.Model):
    name = models.CharField(max_length=80)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    
class Student(models.Model):
    name = models.CharField(max_length=80)
    email = models.EmailField()
    password = models.CharField(max_length=50)