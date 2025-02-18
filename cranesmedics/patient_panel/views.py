from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .models import Patient
from .ml_model import predict
import numpy as np

class HealthRecommendationAPIView(APIView):
    def get(self, request, patient_id, format=None):
        patient = Patient.objects.get(id=patient_id)
        patient_features = np.array([patient.feature1, patient.feature2, patient.feature3])  # Example features
        recommendations = predict(patient_features.reshape(1, -1))
        
        return Response({'recommendations': recommendations.tolist()})