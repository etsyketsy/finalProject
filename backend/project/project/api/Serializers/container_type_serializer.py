from rest_framework import serializers

from project.api.models.container_type_model import ContainerType


class ContainerTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContainerType
        fields = ['id', 'name']
