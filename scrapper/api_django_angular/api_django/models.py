from django.db import models

# Create your models here.
class SneakerModel(models.Model):
    label  = models.CharField(max_length=200)
    image  = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    price = models.CharField(max_length=200)