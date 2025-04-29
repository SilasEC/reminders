"""
urls.py

Authors: Ethan L'Heureux
Created: 2025-04-15
Updated: 2025-04-24
"""

from rest_framework import routers
from reminders import views

# Create an instance of DefaultRouter to automatically handle URL routing
router = routers.DefaultRouter()

# This will generate the necessary routes for handling reminder-related API requests
router.register(r"reminders", views.ReminderViewSet)

# These URL patterns will be used by Django to handle incoming requests to the API
urlpatterns = router.urls
