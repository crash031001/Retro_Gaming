from rest_framework import serializers
from .models import JUEGOS
from datetime import date
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class JuegosSerializer(serializers.ModelSerializer):
    class Meta:
        model = JUEGOS
        fields = '__all__'
        
    #Validaciones
    def validate_NOMBRE(self, value):
        if len(value.strip()) < 3:
            raise serializers.ValidationError('El nombre debe tener al menos 3 caracteres')
        return value.strip()
    
    def validate_CANT_JUGADORES(self, value):
        if not value.isdigit():
            raise serializers.ValidationError('La cantidad debe ser un numero')
        if int(value) > 99:
            raise serializers.ValidationError('La cantidad de jugadores no puede ser mayor que 99')
        return value  
    
    def validate_PESO(self, value):
     try:
        value = str(value).replace(',', '.')
        peso_num = float(value)
        if peso_num <= 0:
            raise serializers.ValidationError("El peso debe ser mayor a 0")
        return value  
     except ValueError:
        raise serializers.ValidationError("Formato inválido. Use números (ej: 5, 7.5 o 3,14)")  
    
    def validate_FECHA(self, value):
        if value > date.today():
            raise serializers.ValidationError("La fecha no puede ser futura")
        if value.year < 1970: 
            raise serializers.ValidationError("Fecha demasiado antigua")
        return value
    
    