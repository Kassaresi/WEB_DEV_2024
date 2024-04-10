from django.urls import path
from . import views

urlpatterns = [
    path('companies/',views.companies),
    path('vacancies/',views.vacancies),
    path('companies/<int:pk>/',views.companiesById),
    path('vacancies/<int:pk>/',views.vacanciesById),
    path('companies/<int:pk>/vacancies/',views.vacanciesByCompanies),
    path('vacancies/top_ten/',views.vacanciesTopTen),

]