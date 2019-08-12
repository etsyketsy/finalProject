from rest_framework import serializers

from project.api.models.coating_model import Coating


class CoatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coating
        fields = ['id', 'name']
