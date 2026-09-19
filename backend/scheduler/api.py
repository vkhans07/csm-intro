from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Counter

# TODO: Create your manual API views here
@api_view(['GET', 'POST'])
def counter(request):
    counter_obj, created = Counter.objects.get_or_create(pk=1, defaults={'count':0})

    if request.method == 'POST':
        counter_obj.count += 1
        counter_obj.save()

    return Response({"count": counter_obj.count})