from django.urls import path
from .views import save_fitness_goal, update_fitness_goal, get_fitness_goal

urlpatterns = [
    path('save-goals/', save_fitness_goal),
    path("update-goals/", update_fitness_goal),
    path('get-goals/', get_fitness_goal),

]
