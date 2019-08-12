from django.db import models
from simple_history.models import HistoricalRecords


class ContainerType(models.Model):
    FLASK = "Flask"
    VIAL = "Vial"
    WELL_PLATE = "Well plate"
    QUANTUM = "Quantum"
    DENOVO_SKIN = "DenovoSkin"
    OTHER = "Other"

    name = models.CharField(
        verbose_name='type',
        max_length=100,
        choices=(
            (FLASK, FLASK),
            (VIAL, VIAL),
            (WELL_PLATE, WELL_PLATE),
            (QUANTUM, QUANTUM),
            (DENOVO_SKIN, DENOVO_SKIN),
            (OTHER, OTHER)
        ),
        blank=True,
        null=True,
    )
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.name
