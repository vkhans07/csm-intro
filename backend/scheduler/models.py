from django.db import models

# TODO: Create your models here
class Counter(models.Model):
    count = models.IntegerField(default=0)