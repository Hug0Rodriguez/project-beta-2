from django.db import models


# Create your models here.
class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveIntegerField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField(default=False)
    import_href = models.CharField(max_length=200, unique=True, null=True)


class Sale(models.Model):
    price = models.PositiveIntegerField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    Customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE,
    )
