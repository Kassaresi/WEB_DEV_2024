from django.db import models
from django.conf import settings

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length = 200, default = '')
    description = models.TextField()
    city = models.CharField(max_length = 50)
    address = models.TextField()
    
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }
        
    def __str__(self) -> str:
        return f"name:{self.name},description:{self.description},city:{self.city},address:{self.address}"
    
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"
        
        
class Vacancy(models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete = models.CASCADE) 
    
    def to_json(self):
        return{
            'id' : self.id,
            'name': self. name,
            'description': self.description,
            'salary': self.salary
        }
        
    def __str__(self) -> str:
        return f"name:{self.name},description:{self.description},salary:{self.salary},company:{self.Company.__str__()}"
    

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"
        
    
