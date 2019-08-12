from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from simple_history.models import HistoricalRecords

from project.api.models.comment_model import Comment
from project.api.models.enzyme_model import Enzyme
from project.api.models.layer_type_model import LayerType
from project.api.models.numbering_model import Numbering
from project.api.models.subbiopsy_model import SubBiopsy


class SkinLayer(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='skinlayers',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    layer_type = models.ForeignKey(
        verbose_name='Skin Layer Type',
        related_name='skin_layers',
        to=LayerType,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    enzyme = models.ForeignKey(
        verbose_name='Enzyme',
        related_name='skin_layers',
        to=Enzyme,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    separation_time = models.DateTimeField(
        verbose_name='Separation Time',
        blank=True,
        null=True,
    )
    temperature = models.FloatField(
        verbose_name='Temperature',
        blank=True,
        null=True,
    )
    sub_biopsy = models.ForeignKey(
        verbose_name='Sub Biopsy',
        related_name='skin_layers',
        to=SubBiopsy,
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

    def save(self, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            self.numbering = Numbering.objects.create()
        super().save(**kwargs)
