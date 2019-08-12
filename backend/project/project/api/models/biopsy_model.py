from django.db import models
from simple_history.models import HistoricalRecords
from django.contrib.contenttypes.fields import GenericRelation

from project.api.models.anatomical_part_model import AnatomicalPart
from project.api.models.comment_model import Comment
from project.api.models.donor_model import Donor
from project.api.models.numbering_model import Numbering


class Biopsy(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='biopsies',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    surgery_date = models.DateField(
        verbose_name='Surgery Date',
        blank=True,
        null=True,
    )
    anatomical_part = models.ForeignKey(
        verbose_name='Anatomical Part',
        related_name='biopsies',
        to=AnatomicalPart,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
    skin_thickness = models.FloatField(
        verbose_name='Skin Thickness',
        blank=True,
        null=True,
    )
    skin_area = models.FloatField(
        verbose_name='Skin Area',
        blank=True,
        null=True,
    )
    donor = models.ForeignKey(
        verbose_name='Donor',
        related_name='biopsies',
        to=Donor,
        on_delete=models.CASCADE,
        blank=False,
        null=False,
    )
    comments = GenericRelation(Comment)
    history = HistoricalRecords()

    class Meta:
        ordering = ['-surgery_date']
        app_label = 'api'
        verbose_name_plural = 'Biopsies'

    def __str__(self):
        return self.numbering.numbering

    def save(self, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            self.numbering = Numbering.objects.create()
        super().save(**kwargs)
