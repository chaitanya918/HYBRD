from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import FitnessGoal
from .serializers import FitnessGoalSerializer



@api_view(['POST'])
def save_fitness_goal(request):
    try:
        user = User.objects.get(email=request.data.get('email'))
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    # Prevent duplicate entries
    if FitnessGoal.objects.filter(user=user).exists():
        return Response({'error': 'Fitness goals already saved for this user.'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data.copy()
    data['user'] = user.id

    serializer = FitnessGoalSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Fitness goal saved!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def update_fitness_goal(request):
    try:
        user = User.objects.get(email=request.data.get('email'))
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    goal, _ = FitnessGoal.objects.get_or_create(user=user)
    goal.age = request.data.get('age')
    goal.weight = request.data.get('weight')
    goal.height = request.data.get('height')
    goal.gender = request.data.get('gender')
    goal.save()

    return Response({'message': 'Fitness details updated!'})


@api_view(['GET'])
def get_fitness_goal(request):
    email = request.query_params.get('email')
    if not email:
        return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    try:
        goal = FitnessGoal.objects.get(user=user)
        serializer = FitnessGoalSerializer(goal)
        return Response(serializer.data)
    except FitnessGoal.DoesNotExist:
        return Response({'error': 'Fitness goal not found'}, status=status.HTTP_404_NOT_FOUND)
