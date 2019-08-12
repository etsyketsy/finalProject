from django.db import models
from simple_history.models import HistoricalRecords


class AnatomicalPart(models.Model):
    ABDOMEN = 'Abdomen'
    LEG = 'Leg'
    BREAST = 'Breast'
    SCALP = 'Scalp'
    OTHER = 'Other'
    ANATOMICAL_PART_CHOICES = (
            (ABDOMEN, ABDOMEN),
            (LEG, LEG),
            (BREAST, BREAST),
            (SCALP, SCALP),
            (OTHER, OTHER),
        )
    type = models.CharField(
        verbose_name='Anatomical Part',
        max_length=150,
        choices=ANATOMICAL_PART_CHOICES,
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.type
