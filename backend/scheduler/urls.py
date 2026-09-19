from django.contrib import admin
from django.urls import path, include
from . import api
urlpatterns = [
    path('admin/', admin.site.urls),
    # TODO: Include your api urls here
    # path('api/', include('scheduler.api_urls')), # Example
    path('api/increment/get', api.counter),
    path('api/increment/post', api.counter)
]
