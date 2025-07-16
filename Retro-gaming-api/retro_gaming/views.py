from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import JUEGOS
from retro_gaming.serializers import JuegosSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token 
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

#Autenticacion

@api_view(['POST'])
def login(request):
      
      user = get_object_or_404(User, username=request.data['username'])
      
      if not user.check_password(request.data['password']):
          return Response({"error": "invalid password"}, status=status.HTTP_400_BAD_REQUEST)
      
      token, created = Token.objects.get_or_create(user=user)
      serializer = UserSerializer(instance=user)
      
      return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def register(request):
      serializer = UserSerializer(data=request.data)
      
      if serializer.is_valid():
         serializer.save()
         
         user = User.objects.get(username = serializer.data['username'])
         user.set_password(serializer.data['paswword'])
         user.save()
         
         token = Token.objects.create(user=user)
         return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)
          
      return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    serializer = UserSerializer(instance=request.data)
    return Response(serializer.data, status=status.HTTP_200_OK)   



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
    