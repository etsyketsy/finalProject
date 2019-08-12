from rest_framework import serializers

from project.api.models.cell_category_model import CellCategory


class CellCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = CellCategory
        fields = ['id', 'name']
