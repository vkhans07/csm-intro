from rest_framework import serializers
from .models import Counter
# TODO: Create your serializers here

class CounterSerializer(serializers.serializer):
    class Meta:
        model = Counter
        fields = ["count"]