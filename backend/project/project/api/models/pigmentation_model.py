from django.db import models
from simple_history.models import HistoricalRecords


class Pigmentation(models.Model):
    PIGMENTED = "Pigmented"
    NON_PIGMENTED = "Non-pigmented"
    type = models.TextField(
        verbose_name='Pigmentation',
        max_length=255,
        choices=(
            (PIGMENTED, PIGMENTED),
            (NON_PIGMENTED, NON_PIGMENTED),
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.type
