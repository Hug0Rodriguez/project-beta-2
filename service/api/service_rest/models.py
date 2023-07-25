from django.db import models


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(null=False)
    

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=500)
    status = models.CharField(max_length=10)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="appointment",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
