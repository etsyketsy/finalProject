from rest_framework.generics import ListAPIView, GenericAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.api.serializers.sub_biopsy_serializer import SubbiopsySerializer
from project.api.models.subbiopsy_model import SubBiopsy


# List all sub-biopsies
class SubBiopsiesView(ListAPIView):
    serializer_class = SubbiopsySerializer
    queryset = SubBiopsy.objects.all()


# create a new Sub-biopsy
class CreateNewSubBiopsyView(CreateAPIView):
    serializer_class = SubbiopsySerializer
    queryset = SubBiopsy.objects.all()


# Get Update Delete a subbiopsy by ID.
class GetUpdateDeleteSubBiopsyView(GenericAPIView):
    queryset = SubBiopsy.objects.all()
    serializer_class = SubbiopsySerializer
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
        return Response('Sub-biopsy deleted')


# Get the list of subbiopsies by Biopsy ID.
class ListSubBiopsyByBioIDView(ListAPIView):
    serializer_class = SubbiopsySerializer

    def get_queryset(self):
        biopsy_id = self.kwargs['pk']
        return SubBiopsy.objects.filter(biopsy=biopsy_id)
