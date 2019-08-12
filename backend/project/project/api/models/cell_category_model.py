from django.db import models
from simple_history.models import HistoricalRecords


class CellCategory(models.Model):
    KERATINOCYTES = "Keratinocytes"
    MELANOCYTES = "Melanocytes"
    FIBROBLAST = "Fibroblast"

    name = models.CharField(
        verbose_name='Type',
        max_length=100,
        choices=(
            (KERATINOCYTES, KERATINOCYTES),
            (MELANOCYTES, MELANOCYTES),
            (FIBROBLAST, FIBROBLAST)
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'
        verbose_name_plural = 'Cell categories'

    def __str__(self):
        return self.name
