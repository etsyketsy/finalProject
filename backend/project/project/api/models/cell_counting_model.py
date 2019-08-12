from django.db import models
from simple_history.models import HistoricalRecords

from project.api.models.passage_model import Passage


class CellCounting(models.Model):
    passage = models.ForeignKey(
        verbose_name='Passage',
        related_name='cell_counting',
        to=Passage,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    image = models.ImageField(
        verbose_name='Cell Counting Image',
        upload_to='Media Files',
        blank=True,
        null=True,
    )
    cells_counted = models.IntegerField(
        verbose_name='Cells Counted',
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return str(self.cells_counted)
