from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLES = (
        ('IT', 'Administrator'),
        ('DR', 'Doctor'),
        ('PT', 'Patient'),
    )
    
    role = models.CharField(max_length=2, choices=ROLES)
    phone = models.CharField(max_length=20)
    is_verified = models.BooleanField(default=False)
    # Additional fields as needed
