from django.db import models
from simple_history.models import HistoricalRecords


class Morphology(models.Model):
    BIPOLAR = "Bipolar"
    SPINDLE_LIKE = "Spindle-like"
    STAR_LIKE = "Star-like"
    DENDRITE_LIKE = "Dendrite-like"
    OTHER = "Other"
    type = models.TextField(
        verbose_name='Morphology',
        max_length=255,
        choices=(
            (BIPOLAR, BIPOLAR),
            (SPINDLE_LIKE, SPINDLE_LIKE),
            (STAR_LIKE, STAR_LIKE),
            (DENDRITE_LIKE, DENDRITE_LIKE),
            (OTHER, OTHER)
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        verbose_name_plural = 'Morphologies'
        app_label = 'api'

    def __str__(self):
        return self.type
