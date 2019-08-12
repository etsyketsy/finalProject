from rest_framework import serializers

from project.api.models.subbiopsy_model import SubBiopsy


class SubbiopsySerializer(serializers.ModelSerializer):
    numbering = serializers.SerializerMethodField(read_only=True)
    biopsy_numbering = serializers.SerializerMethodField(read_only=True)

    def get_numbering(self, instance):
        return instance.numbering.numbering

    def get_biopsy_numbering(self, instance):
        return instance.biopsy.numbering.numbering

    class Meta:
        model = SubBiopsy
        fields = ['numbering', 'biopsy', 'sub_biopsy_area', 'cut_method', 'id', 'biopsy_numbering']
        read_only_fields = ['id', 'numbering']
