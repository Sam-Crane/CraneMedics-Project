from django.urls import path
from .views import HealthRecommendationAPIView

urlpatterns = [
    path('recommendations/<int:patient_id>/', HealthRecommendationAPIView.as_view(), name='health_recommendations'),
]
