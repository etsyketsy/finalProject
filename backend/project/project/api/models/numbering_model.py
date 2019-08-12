from django.db import models
from simple_history.models import HistoricalRecords

from ..helpers import generate_numbering


class Numbering(models.Model):
    numbering = models.CharField(
        verbose_name='Numbering',
        max_length=6,
        unique=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def save(self, *args, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            while True:
                new_number = generate_numbering(4)
                try:
                    Numbering.objects.get(numbering=new_number)
                except Numbering.DoesNotExist:
                    self.numbering = new_number
                    break
        super().save(*args, **kwargs)

    def __str__(self):
        return self.numbering
