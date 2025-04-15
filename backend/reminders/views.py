"""

"""

from rest_framework import viewsets

from reminders import models, serializers

# Create your views here.

class ReminderViewSet(viewsets.ModelViewSet):
    queryset = models.Reminder.objects.all()
    serializer_class = serializers.ReminderSerializer


