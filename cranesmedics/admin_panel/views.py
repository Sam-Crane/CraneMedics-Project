# views.py
from django.contrib.admin.views.decorators import staff_member_required

@staff_member_required
def admin_dashboard(request):
    # IT Admin-specific logic
    pass