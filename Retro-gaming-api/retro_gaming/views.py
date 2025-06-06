from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import JUEGOS
from retro_gaming.serializers import JuegosSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken  # Para JWT
from rest_framework.reverse import reverse


# Vista para el CRUD de Juegos
class JuegoView(APIView):
    def get(self, request, pk=None):
        if pk:
            juego = JUEGOS.objects.get(pk=pk)
            serializer = JuegosSerializer(juego)
            return Response(serializer.data)
        
        juegos = JUEGOS.objects.all()
        serializer = JuegosSerializer(juegos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = JuegosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def put(self, request, pk):
        juego = JUEGOS.objects.get(pk=pk)
        serializer = JuegosSerializer(juego, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        juego = JUEGOS.objects.get(pk=pk)
        juego.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    