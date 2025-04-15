from django.db import models

# Create your models here.

class Reminder(models.Model):
    name = models.CharField("name", max_length=255)

