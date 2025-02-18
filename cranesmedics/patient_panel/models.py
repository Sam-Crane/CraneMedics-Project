from django.db import models
from cranesmedics.admin_panel.models import CustomUser


class PatientProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    blood_group = models.CharField(max_length=3)
    conditions = models.ArrayField(models.CharField(max_length=50))  # MongoDB specific
    medications = models.JSONField(default=dict)
    allergies = models.ArrayField(models.CharField(max_length=50))  # MongoDB specific
    emergency_contact = models.CharField(max_length=100)
    emergency_contact_number = models.CharField(max_length=15)



class MedicalRecord(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE)
    visit_date = models.DateTimeField(auto_now_add=True)
    symptoms = models.TextField()
    diagnosis = models.TextField()
    prescription = models.ArrayField(models.CharField(max_length=100))
    notes = models.TextField()
    doctor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='doctor')