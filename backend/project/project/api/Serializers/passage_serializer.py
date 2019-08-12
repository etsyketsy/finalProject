from rest_framework import serializers

from project.api.models.passage_model import Passage
from project.api.serializers.cell_counting_serializer import CellCountingSerializer

from rest_framework_recursive.fields import RecursiveField


class PassageSerializer(serializers.ModelSerializer):
    passages = RecursiveField(required=False, allow_null=True, many=True)
    numbering = serializers.SerializerMethodField(read_only=True)
    passage_numbering = serializers.SerializerMethodField(read_only=True)
    cell_counting = CellCountingSerializer(many=True, read_only=True)
    cell_type_numbering = serializers.SerializerMethodField(read_only=True)

    def get_numbering(self, instance):
        return instance.numbering.numbering

    def get_cell_type_numbering(self, instance):
        if instance.cell_type:
            return instance.cell_type.numbering.numbering
        return None

    def get_passage_numbering(self, instance):
        if instance.passage:
            return instance.passage.numbering.numbering
        return None

    def get_cell_counting(self, instance):
        if instance.cell_counting:
            return instance.cell_counting.cells_counted
        return None

    class Meta:
        model = Passage
        fields = [
            'numbering', 'cell_type', 'passage', 'passages', 'cell_distribution', 'pigmentation', 'morphology',
            'morphology_image', 'passaging_date', 'enzyme', 'digestion_time', 'digestion_temperature',
            'resuspended_volume', 'concentration', 'viability', 'diameter', 'container_type', 'container_area',
            'coating', 'coating_concentration_per_cm2', 'seeding_density', 'magnification', 'cell_counting',
            'not_continued', 'total_viable_isolated_cells', 'id', 'cell_type_numbering', 'passage_numbering',
        ]
        read_only_fields = ['id', 'numbering', 'cell_counting']
