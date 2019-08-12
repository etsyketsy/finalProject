from rest_framework import serializers

from project.api.models.cell_type_model import CellType


class CellTypeSerializer(serializers.ModelSerializer):
    numbering = serializers.SerializerMethodField(read_only=True)
    skin_layer_numbering = serializers.SerializerMethodField(read_only=True)

    def get_numbering(self, instance):
        return instance.numbering.numbering

    def get_skin_layer_numbering(self, instance):
        return instance.skin_layer.numbering.numbering

    class Meta:
        model = CellType
        fields = [
            'numbering', 'skin_layer', 'type', 'enzyme', 'temperature', 'digestion_time', 'inhibition',
            'filter_size', 'filter_rinsing', 'centrifugation_speed', 'centrifugation_time', 'resuspended_volume',
            'concentration', 'viability', 'diameter', 'total_viable_isolated_cells', 'isolation_yield', 'id',
            'skin_layer_numbering',
        ]
        read_only_fields = ['numbering']
