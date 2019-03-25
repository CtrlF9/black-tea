from django.db import models

# Create your models here.

class product(models.Model):
    name = models.TextField(max_length=200)
    desc = models.TextField(max_length=200)
    price = models.DecimalField(decimal_places=10,max_digits=2)

