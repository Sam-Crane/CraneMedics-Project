from django.db import models

class Doctor(models.Model):
    doctor_id = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    # Other fields...
