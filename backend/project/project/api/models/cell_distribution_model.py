from django.db import models
from simple_history.models import HistoricalRecords


class CellDistribution(models.Model):
    EQUALLY_DISPERSED = "Equally dispersed"
    COLONY_LIKE_GROWTH = "Colony-like growth"
    OTHER = "Other"

    type = models.CharField(
        verbose_name='type',
        max_length=100,
        choices=(
            (EQUALLY_DISPERSED, EQUALLY_DISPERSED),
            (COLONY_LIKE_GROWTH, COLONY_LIKE_GROWTH),
            (OTHER, OTHER)
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.type
