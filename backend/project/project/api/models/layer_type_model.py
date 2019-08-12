from django.db import models
from simple_history.models import HistoricalRecords


class LayerType(models.Model):
    DERMIS = "Dermis"
    EPIDERMIS = "Epidermis"

    type = models.CharField(
        verbose_name='Type',
        max_length=100,
        choices=(
            (DERMIS, DERMIS),
            (EPIDERMIS, EPIDERMIS)
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.type
