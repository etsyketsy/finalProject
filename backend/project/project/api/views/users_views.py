from rest_framework.generics import ListAPIView, GenericAPIView
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.api.serializers.users_serializer import UserSerializer


# Get current User
class GetCurrentUserView(GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get(self, request, **kwargs):
        user = request.user
        return Response(UserSerializer(User.objects.filter(username=user), many=True).data)


# list all users
class ListUsersView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [
        IsAuthenticated,
    ]
    queryset = User.objects.all()


# Get Update Delete Users by ID
class GetUpdateDeleteUserView(GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
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

    def delete(self, request, **kwargs):
        post = self.get_object()
        post.delete()
        return Response('User deleted')
