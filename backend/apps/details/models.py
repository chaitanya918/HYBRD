from django.db import models
from django.contrib.auth.models import User

class FitnessGoal(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    gender = models.CharField(max_length=10)
    goal = models.CharField(max_length=50)
    activity_level = models.CharField(max_length=20)
    training_frequency = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.user.email}'s Fitness Goal"
