from rest_framework.generics import ListAPIView, GenericAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.api.serializers.biopsy_serializer import BiopsySerializer
from project.api.models.biopsy_model import Biopsy


#  Get  the list of all biopsies. ***
class BiopsyView(ListAPIView):
    serializer_class = BiopsySerializer
    queryset = Biopsy.objects.all()


# Create a new Biopsy
class CreateNewBiopsyView(CreateAPIView):
    serializer_class = BiopsySerializer
    queryset = Biopsy.objects.all()


# Get Update Delete a biopsy by ID
class GetUpdateDeleteBiopsyView(GenericAPIView):
    queryset = Biopsy.objects.all()
    serializer_class = BiopsySerializer
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
        return Response('Biopsy deleted')
