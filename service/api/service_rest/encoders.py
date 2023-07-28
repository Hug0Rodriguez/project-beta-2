from common.json import ModelEncoder
from .models import Technician, Appointment


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["id", "date_time", "reason", "status", "vin", "customer", "technician"]
    encoders = {
        "technician": TechnicianListEncoder(),
    }
