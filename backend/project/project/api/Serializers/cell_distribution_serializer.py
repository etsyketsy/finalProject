from rest_framework import serializers

from project.api.models.cell_distribution_model import CellDistribution


class CellDistributionSerializer(serializers.ModelSerializer):

    class Meta:
        model = CellDistribution
        fields = ['type', 'id']
