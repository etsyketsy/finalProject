from rest_framework import serializers

from project.api.models.donor_model import Donor


class DonorSerializer(serializers.ModelSerializer):
    numbering = serializers.SerializerMethodField()

    def get_numbering(self, instance):
        return instance.numbering.numbering

    class Meta:
        model = Donor
        fields = ['numbering', 'gender', 'age', 'donor_reference', 'id']
        read_only_fields = ['id', 'numbering']
