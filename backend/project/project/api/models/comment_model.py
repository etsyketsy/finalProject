from django.db import models
from simple_history.models import HistoricalRecords
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey


class Comment(models.Model):
    text = models.TextField(
        verbose_name='Comment',
        blank=True,
        null=True,
    )
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField(
        blank=True,
        null=True
    )
    content_object = GenericForeignKey('content_type', 'object_id')
    history = HistoricalRecords()

    class Meta:
        app_label = 'api'

    def __str__(self):
        return str(self.id)
