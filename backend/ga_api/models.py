from django.db import models



TIMES = (
    ('10:00','10:00'),
    ('10;30','10:30'),
    ('11:00','11:00'),
    ('11:30','11:30'),
    ('12:00','12:00'),
    ('12:30','12:30'),
    ('13:00','13:00'),
    ('13:30','13:30'),
    ('14:00','14:00'),
    ('14:30','14:30'),
    ('15:00','15:00'),
    ('15:30','15:30'),
    ('16:00','16:00'),
    ('16:30','16:30'),
    ('17:00','17:00'),
    ('17:30','17:30'),
    )

# Create your models here.
class times(models.Model):
    studentid=models.CharField(max_length=10)
    mon=models.CharField(max_length=8, choices=TIMES)
    tue=models.CharField(max_length=8, choices=TIMES)
    wed=models.CharField(max_length=8, choices=TIMES)
    thu=models.CharField(max_length=8, choices=TIMES)
    fri=models.CharField(max_length=8, choices=TIMES)
    

def __str__(self):
    return '{}, {}'.format(self.lastname, self.firstname)