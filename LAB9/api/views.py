from django.shortcuts import render
from django.http.response import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Company,Vacancy
from .serializer import SerializerCompany, SerializerVacancy

# Create your views here.

# def get_companies(request):
#     # companies = Company.objects.all()
#     # companyies_json = [company.to_json() for company in companies]
#     # return JsonResponse(companyies_json, safe=False)
        

# def get_company(request, pk = None):
#     try:
#         company = Company.objects.get(id = pk)
#         return JsonResponse(company.to_json())
#     except Company.DoesNotExist as e:
#         return JsonResponse({
#             'error': str(e)
#         })
        
# def get_vacancies_by_company(request, pk = None):
#     company = Company.objects.get (id = pk)
#     vacancies = Vacancy.objects.filter(company = company)
#     vacacines_json = [vacancy.to_json() for vacancy in vacancies]
#     return JsonResponse(vacacines_json, safe=False)



# # -----------------------------------------------------------------------------------------------------------------------------------------------------------------

# def get_vacancies(request):
#     vacancies = Vacancy.objects.all()
#     vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    
#     return JsonResponse(vacancies_json, safe=False)


# def get_vacancy(request, pk = None):
#     try:
#         vacancy = Vacancy.objects.get(id = pk)
#         return JsonResponse(vacancy.to_json())
    
#     except Vacancy.DoesNotExist as e:
#         return JsonResponse({
#             'error:': str(e)
#         })


@csrf_exempt
def companies(request):
    if request.method == 'GET':
        companies= Company.objects.all()
        serializer = SerializerCompany(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = SerializerCompany(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def companiesById(request,pk=None):

    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return HttpResponse(status=404)
    

    if request.method == 'GET':
        serializer = SerializerCompany(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = SerializerCompany(company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return HttpResponse(status=204)
    
@csrf_exempt
def vacancies(request):
    if request.method == 'GET':
        vacancies= Vacancy.objects.all()
        serializer = SerializerVacancy(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = SerializerVacancy(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def vacanciesById(request,pk=None):

    try:
        vacancy = Vacancy.objects.get(pk=pk)
    except Vacancy.DoesNotExist:
        return HttpResponse(status=404)
    

    if request.method == 'GET':
        serializer = SerializerVacancy(vacancy)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = SerializerVacancy(vacancy, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        vacancy.delete()
        return HttpResponse(status=204)
    
def vacanciesByCompanies(request,pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    
    vacancies=Vacancy.objects.filter(Company=company)

    serializer = SerializerVacancy(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacanciesTopTen(request):
    vacancies=Vacancy.objects.order_by('-salary')[:10]
    serializer = SerializerVacancy(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

        
        

