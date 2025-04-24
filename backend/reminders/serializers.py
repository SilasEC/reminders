
from rest_framework import serializers
from reminders import models

class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Reminder
        fields = "__all__"
