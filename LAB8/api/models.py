from django.db import models
from django.conf import settings
from django.utils import timezone
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 100,default='')
    
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def publish(self):
        self.save()
        
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price':self.price,
            'description': self.description,
            'count':self.count,
            "status":self.is_active
        }
        
    def __str__(self):
        return self.name
    
    
    

