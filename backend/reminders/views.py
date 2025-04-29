"""
views.py

Authors: Ethan L'Heureux
Created: 2025-04-15
Updated: 2025-04-24
"""

from rest_framework import viewsets
from reminders import models, serializers

# ReminderViewSet: A viewset that provides CRUD functionality for the Reminder model
class ReminderViewSet(viewsets.ModelViewSet):

    # This will retrieve all Reminder objects from the database.
    queryset = models.Reminder.objects.all()

    # The serializer_class is used to convert the model data to JSON and vice versa.
    serializer_class = serializers.ReminderSerializer
