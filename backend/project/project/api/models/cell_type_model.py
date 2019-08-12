from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from simple_history.models import HistoricalRecords

from project.api.models.cell_category_model import CellCategory
from project.api.models.comment_model import Comment
from project.api.models.enzyme_model import Enzyme
from project.api.models.numbering_model import Numbering
from project.api.models.skin_layer_model import SkinLayer


class CellType(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='celltypes',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    type = models.ForeignKey(
        verbose_name='Cell Category',
        related_name='cell_types',
        to=CellCategory,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    enzyme = models.ForeignKey(
        verbose_name='Enzyme',
        related_name='cell_types',
        to=Enzyme,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    temperature = models.FloatField(
        verbose_name='Temperature',
        blank=True,
        null=True,
    )
    digestion_time = models.DateTimeField(
        verbose_name='Digestion Time',
        blank=True,
        null=True,
    )
    inhibition = models.IntegerField(
        verbose_name='Inhibition',
        blank=True,
        null=True,
    )
    filter_size = models.IntegerField(
        verbose_name='Filter Size',
        blank=True,
        null=True,
    )
    filter_rinsing = models.IntegerField(
        verbose_name='Filter Rinsing',
        blank=True,
        null=True,
    )
    centrifugation_speed = models.IntegerField(
        verbose_name='Centrifugation Speed',
        blank=True,
        null=True,
    )
    centrifugation_time = models.DateTimeField(
        verbose_name='Centrifugation Time',
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
    skin_layer = models.ForeignKey(
        verbose_name='Skin Layer',
        related_name='cell_types',
        to=SkinLayer,
        on_delete=models.CASCADE,
        blank=False,
        null=False,
    )
    comments = GenericRelation(Comment)
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return self.numbering.numbering

    @property
    def total_viable_isolated_cells(self):
        try:
            result = self.resuspended_volume * self.concentration * (self.viability/100)
        except ZeroDivisionError as error:
            print(error)
            result = 'Null'
        except Exception as exception:
            print(exception)
            result = 'Null'
        return result

    @property
    def isolation_yield(self):
        try:
            result = self.total_viable_isolated_cells / self.skin_layer.sub_biopsy.biopsy.skin_area
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
