from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from simple_history.models import HistoricalRecords

from project.api.models.biopsy_model import Biopsy
from project.api.models.comment_model import Comment
from project.api.models.cut_method_model import CutMethod
from project.api.models.numbering_model import Numbering


class SubBiopsy(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='subbiopies',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    biopsy = models.ForeignKey(
        verbose_name='Biopsy',
        related_name='sub_biopsies',
        to=Biopsy,
        on_delete=models.CASCADE,
        blank=False,
        null=False,
    )
    sub_biopsy_area = models.IntegerField(
        verbose_name='Sub Biopsy Area',
        blank=True,
        null=True,
    )
    cut_method = models.ForeignKey(
        verbose_name='Cut Method',
        related_name='sub_biopsies',
        to=CutMethod,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    comments = GenericRelation(Comment)
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'
        verbose_name_plural = 'Sub-biopsies'

    def __str__(self):
        return self.numbering.numbering

    def save(self, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            self.numbering = Numbering.objects.create()
        super().save(**kwargs)
