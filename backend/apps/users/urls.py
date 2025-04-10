from django.urls import path
from .views import signup, login_view, change_password

urlpatterns = [
    path('signup/', signup),
    path('login/', login_view),
    path("change-password/", change_password),
]