from django.db import models
from simple_history.models import HistoricalRecords
from django.contrib.contenttypes.fields import GenericRelation

from project.api.models.cell_type_model import CellType
from project.api.models.coating_model import Coating
from project.api.models.comment_model import Comment
from project.api.models.container_type_model import ContainerType
from project.api.models.enzyme_model import Enzyme
from project.api.models.morphology_model import Morphology
from project.api.models.numbering_model import Numbering
from project.api.models.pigmentation_model import Pigmentation
from project.api.models.cell_distribution_model import CellDistribution


class Passage(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='passages',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    passage = models.ForeignKey(
        'self',
        on_delete=models.SET_NULL,
        related_name='passages',
        blank=True,
        null=True,
    )
    cell_type = models.ForeignKey(
        verbose_name='Cell Type',
        related_name='passages',
        to=CellType,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    cell_distribution = models.ForeignKey(
        verbose_name='Cell Distribution',
        related_name='passages',
        to=CellDistribution,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    pigmentation = models.ForeignKey(
        verbose_name='Pigmentation',
        related_name='passages',
        to=Pigmentation,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    morphology = models.ForeignKey(
        verbose_name='Morphology',
        related_name='passages',
        to=Morphology,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    morphology_image = models.ImageField(
        verbose_name='Morphology Image',
        upload_to='Media Files',
        blank=True,
        null=True,
    )
    passaging_date = models.DateField(
        verbose_name='Passaging Date',
        blank=True,
        null=True,
    )
    enzyme = models.ForeignKey(
        verbose_name='Enzyme',
        related_name='passages',
        to=Enzyme,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    digestion_time = models.DateTimeField(
        verbose_name='Digestion Time',
        blank=True,
        null=True,
    )
    digestion_temperature = models.FloatField(
        verbose_name='Digestion Temperature',
        blank=True,
        null=True,
    )
    resuspended_volume = models.IntegerField(
        verbose_name='Resuspended Volume',
        blank=True,
        null=True,
    )
    concentration = models.FloatField(
        verbose_name='Concentration',
        blank=True,
        null=True,
    )
    viability = models.FloatField(
        verbose_name='Viability',
        blank=True,
        null=True,
    )
    diameter = models.FloatField(
        verbose_name='Diameter',
        blank=True,
        null=True,
    )
    container_type = models.ForeignKey(
        verbose_name='Container Type',
        related_name='passages',
        to=ContainerType,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    container_area = models.FloatField(
        verbose_name='Container Area',
        blank=True,
        null=True,
    )
    coating = models.ForeignKey(
        verbose_name='Coating',
        related_name='passages',
        to=Coating,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    coating_concentration_per_cm2 = models.FloatField(
        verbose_name='Coating Concentration per Cm2',
        blank=True,
        null=True,
    )
    seeding_density = models.IntegerField(
        verbose_name='Seeding Density',
        blank=True,
        null=True,
    )
    magnification = models.IntegerField(
        verbose_name='Magnification',
        blank=True,
        null=True,
    )
    not_continued = models.BooleanField(
        verbose_name='Not Continued',
        default=False,
    )
    comments = GenericRelation(Comment)
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    @property
    def total_viable_isolated_cells(self):
        try:
            result = self.resuspended_volume * self.concentration * (self.viability / 100)
        except ZeroDivisionError as error:
            print(error)
            result = 'Null'
        except Exception as exception:
            print(exception)
            result = 'Null'
        return result

    def save(self, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            self.numbering = Numbering.objects.create()
        super().save(**kwargs)

    def __str__(self):
        return self.numbering.numbering
