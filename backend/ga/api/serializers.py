from rest_framework.serializers import ModelSerializer
from .models import ga


class GASerializer(Model):
    class Meta:
        model = ga
        fields = ('id', 'title', 'body')