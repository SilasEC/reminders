"""
serializers.py

Authors: Ethan L'Heureux
Created: 2025-04-15
Updated: 2025-04-24
"""

from rest_framework import serializers
from reminders import models

# A serializer class to convert Reminder model instances to JSON format
class ReminderSerializer(serializers.ModelSerializer):

    # The Meta class inside the serializer defines the model and fields to be serialized.
    class Meta:
        # Specify the model that this serializer is for
        model = models.Reminder
        
        # Specify that all fields in the model should be included in the serialization
        fields = "__all__"
