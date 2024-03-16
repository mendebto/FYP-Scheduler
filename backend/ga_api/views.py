from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.forms import MyForm
from django.core import serializers
from rest_framework import viewsets
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import approvals
from .serializers import approvalSerializers
# Create your views here.

@csrf_exempt
def settimes(request):
    if request.method == 'POST':
        data = request.POST.dict()
        X = np.array([[float(data['height']), float(data['weight'])]])
        y_pred = model.settimes(X)
        return JsonResponse({'set times': '0'})
    else:
        return JsonResponse({'error': 'Invalid request method'})

#User view
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

