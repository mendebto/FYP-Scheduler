from rest_framework import serializers
from . models import times

class timesSerializers(serializers.ModelSerializer):
    class Meta:
        model=times
        fields='__all__' # ('firstname', 'lastname')