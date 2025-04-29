"""
models.py

Authors: Ethan L'Heureux
Created: 2025-04-15
Updated: 2025-04-24
"""

from django.db import models
from django.utils import timezone

# Reminder: A model class representing a reminder
class Reminder(models.Model):
    
    # The name field stores the name of the reminder as a string (up to 255 characters)
    name = models.CharField("name", max_length=255)
    
    # The time field stores the date and time for the reminder (using timezone.now)
    time = models.DateTimeField("time", default=timezone.now)
    
    def __str__(self):
        return self.name
