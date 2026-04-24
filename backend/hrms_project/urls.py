"""
URL configuration for hrms_project.
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    # Add your app URLs here
    # path('api/employees/', include('employees.urls')),
    # path('api/payroll/', include('payroll.urls')),
    # path('api/attendance/', include('attendance.urls')),
    # path('api/leave/', include('leave.urls')),
]