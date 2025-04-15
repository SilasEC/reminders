from django.db import models
from django.utils import timezone
# Create your models here.

class Reminder(models.Model):
    name = models.CharField("name", max_length=255)
    time = models.DateTimeField("time", default=timezone.now)

