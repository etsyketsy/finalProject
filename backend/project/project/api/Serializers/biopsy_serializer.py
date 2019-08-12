from rest_framework import serializers

from project.api.models.biopsy_model import Biopsy


class BiopsySerializer(serializers.ModelSerializer):
    numbering = serializers.SerializerMethodField(read_only=True)
    donor_numbering = serializers.SerializerMethodField(read_only=True)

    def get_numbering(self, instance):
        return instance.numbering.numbering

    def get_donor_numbering(self, instance):
        return instance.donor.numbering.numbering

    class Meta:
        model = Biopsy
        fields = ['numbering', 'surgery_date', 'donor', 'anatomical_part', 'skin_thickness', 'skin_area', 'id',
                  'donor_numbering']
        read_only_fields = ['numbering']
