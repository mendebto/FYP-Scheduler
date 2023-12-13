from rest_framework.viewsets import ModelViewSet
from ..models import ga
from .serializers import GASerializer

class GAViewSet(ModelViewSet):
    queryset = ga.objects.all()
    serializer_class = GASerializer