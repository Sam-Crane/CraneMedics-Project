from django.contrib.auth.backends import ModelBackend
from .models import CustomUser

class MongoAuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        # Implement authentication logic here
        pass

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None