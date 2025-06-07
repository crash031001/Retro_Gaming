from django.db import models

# Create your models here.
class JUEGOS(models.Model):
    NOMBRE = models.CharField(max_length=250)
    DESCRIPCION = models.TextField()
    IMAGEN = models.TextField(default="")
    CANT_JUGADORES = models.CharField(max_length=2)
    PESO = models.CharField(max_length=10)
    GENERO = models.CharField(max_length=20)
    FECHA = models.DateField()
    PREMIOS = models.TextField(default='')
    rating = models.CharField(max_length=3,blank=True,null=True)
    
    def __str__(self) -> str:
        return self.NOMBRE
    
    class Meta:
        managed = False
        
       
       