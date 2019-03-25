from rest_framework import serializers
from .models import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product()
        fields = '__all__'

        