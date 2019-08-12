from django.db import models
from simple_history.models import HistoricalRecords
from django.contrib.contenttypes.fields import GenericRelation

from project.api.models.comment_model import Comment
from project.api.models.numbering_model import Numbering


class Donor(models.Model):
    numbering = models.ForeignKey(
        verbose_name='Numbering',
        related_name='donors',
        to=Numbering,
        on_delete=models.CASCADE,
    )
    MALE = "M"
    FEMALE = "F"
    gender = models.CharField(
        verbose_name='Donor',
        max_length=150,
        choices=(
            (MALE, MALE),
            (FEMALE, FEMALE),
        ),
        blank=False,
        null=False,
    )
    age = models.IntegerField(
        verbose_name='Age',
        blank=False,
        null=False,
    )
    donor_reference = models.CharField(
        verbose_name='Donor Reference',
        max_length=150,
        blank=True,
        null=True,
    )
    comments = GenericRelation(Comment)
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def save(self, **kwargs):
        if self.pk and not self.numbering or not self.pk:
            self.numbering = Numbering.objects.create()
        super().save(**kwargs)

    def __str__(self):
        return self.numbering.numbering
