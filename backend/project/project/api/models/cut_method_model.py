from django.db import models
from simple_history.models import HistoricalRecords


class CutMethod(models.Model):
    method = models.CharField(
        verbose_name='Cut Method',
        max_length=150,
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.method
