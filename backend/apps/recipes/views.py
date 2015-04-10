from rest_framework import generics
from serializers import RecipeSerializer
from models import Recipe

class RecipeList(generics.ListAPIView):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    #queryset = Recipe.objects.filter(name__contains="Spaghetti")

