from rest_framework import serializers

from project.api.models.skin_layer_model import SkinLayer


class SkinLayerSerializer(serializers.ModelSerializer):
    numbering = serializers.SerializerMethodField(read_only=True)
    sub_biopsy_numbering = serializers.SerializerMethodField(read_only=True)

    def get_numbering(self, instance):
        return instance.numbering.numbering

    def get_sub_biopsy_numbering(self, instance):
        return instance.sub_biopsy.numbering.numbering

    class Meta:
        model = SkinLayer
        fields = ['numbering', 'sub_biopsy', 'enzyme', 'separation_time', 'temperature', 'id', 'sub_biopsy_numbering']
        read_only_fields = ['id', 'numbering']
