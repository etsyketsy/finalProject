from django.db import models
from simple_history.models import HistoricalRecords


class Coating(models.Model):
    name = models.CharField(
        verbose_name='Name',
        max_length=150,
        blank=True,
        null=True,
    )
    lot_number = models.CharField(
        verbose_name='Coating Lot Number',
        max_length=150,
        blank=True,
        null=True,
    )

    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.name
