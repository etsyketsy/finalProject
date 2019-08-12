from rest_framework import serializers

from project.api.models.cut_method_model import CutMethod


class CutMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = CutMethod
        fields = ['id', 'method']
