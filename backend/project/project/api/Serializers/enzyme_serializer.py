from rest_framework import serializers

from project.api.models.enzyme_model import Enzyme


class EnzymeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enzyme
        fields = ['id', 'name', 'lot_number']
