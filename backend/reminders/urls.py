"""

"""

from rest_framework import routers

from reminders import views


router = routers.DefaultRouter()
router.register(r"reminders", views.ReminderViewSet)

urlpatterns = router.urls

