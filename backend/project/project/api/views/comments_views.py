from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.api.models.comment_model import Comment
from project.api.serializers.comments_serializer import CommentsSerializer


class CommentsView(ListAPIView):
    serializer_class = CommentsSerializer

    def get_queryset(self):
        return Comment.objects.all()


# Get Update Delete the list of comments by ID
class GetUpdateDeleteCommentView(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def post(self, request, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, okrequest, **kwargs):
        post = self.get_object()
        post.delete()
        return Response('Comment deleted')
