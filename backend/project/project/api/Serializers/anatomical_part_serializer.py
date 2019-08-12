from rest_framework import serializers

from project.api.models.anatomical_part_model import AnatomicalPart


class AnatomicalPartSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnatomicalPart
        fields = ['type', 'id']
