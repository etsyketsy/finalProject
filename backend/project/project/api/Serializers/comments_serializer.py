from rest_framework import serializers

from project.api.models.comment_model import Comment


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'content_type', 'object_id']
        read_only_fields = ['id', 'object_id']
