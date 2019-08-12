from rest_framework import serializers

from project.api.models.cell_counting_model import CellCounting


class CellCountingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellCounting
        fields = ['id', 'image', 'cells_counted', 'passage']
