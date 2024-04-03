from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('categories/',views.get_categories),
    path('categories/<int:pk>/', views.get_category),
    path('products/<int:pk>', views.get_product),
    path('categories/<int:pk>/products', views.get_products_by_categories)

]
