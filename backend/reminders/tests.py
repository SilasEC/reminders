from django.utils import timezone
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from reminders.models import Reminder


class ReminderTests(APITestCase):
    """
    Test suite for the Reminder API endpoints.
    Covers model creation, listing, retrieving, creating, updating, and deleting reminders.
    """

    def setUp(self):
        """
        Set up a default reminder object to use in the tests.
        """
        self.reminder = Reminder.objects.create(
            name="Test Reminder",
            time=timezone.now()
        )

    def test_model_creation(self):
        """
        Ensure the Reminder model is created with the correct name and non-null time.
        """
        self.assertEqual(self.reminder.name, "Test Reminder")
        self.assertIsNotNone(self.reminder.time)

    def test_list_reminders(self):
        """
        Test that the list endpoint returns the correct reminders and HTTP 200 status.
        """
        response = self.client.get(reverse("reminder-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_reminder(self):
        """
        Test retrieving a single reminder returns the correct data and HTTP 200 status.
        """
        response = self.client.get(reverse("reminder-detail", args=[self.reminder.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Test Reminder")

    def test_create_reminder(self):
        """
        Test creating a new reminder via POST returns HTTP 201 and adds the object.
        """
        data = {
            "name": "New Reminder",
            "time": timezone.now()
        }
        response = self.client.post(reverse("reminder-list"), data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Reminder.objects.count(), 2)

    def test_update_reminder(self):
        """
        Test updating an existing reminder returns HTTP 200 and modifies the data.
        """
        data = {
            "name": "Updated Reminder",
            "time": self.reminder.time
        }
        response = self.client.put(
            reverse("reminder-detail", args=[self.reminder.id]), data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.reminder.refresh_from_db()
        self.assertEqual(self.reminder.name, "Updated Reminder")

    def test_delete_reminder(self):
        """
        Test deleting a reminder returns HTTP 204 and removes it from the database.
        """
        response = self.client.delete(reverse("reminder-detail", args=[self.reminder.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Reminder.objects.count(), 0)
