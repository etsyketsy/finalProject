from rest_framework.generics import CreateAPIView, GenericAPIView, ListAPIView
from rest_framework.response import Response

from project.api.models.passage_model import Passage
from project.api.serializers.passage_serializer import PassageSerializer


# Get List Passages
class ListPassageView(ListAPIView):
    serializer_class = PassageSerializer
    queryset = Passage.objects.filter(passage__isnull=True)


# create a Passage
class CreatePassageView(CreateAPIView):
    serializer_class = PassageSerializer
    queryset = Passage.objects.all()


# Get Update  Delete a Passage by ID.
class GetUpdateDeletePassageView(GenericAPIView):
    serializer_class = PassageSerializer
    queryset = Passage.objects.all()

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
        return Response('Passage deleted')


# Get Passage by CellType ID
class PassageByCellTypeId(ListAPIView):
    serializer_class = PassageSerializer

    def get_queryset(self):
        cell_types_id = self.kwargs['pk']
        return Passage.objects.filter(cell_type=cell_types_id)


# Get Passage by Biopsy ID
class PassageByBiopsyId(ListAPIView):
    serializer_class = PassageSerializer

    def get_queryset(self):
        biopsy_id = self.kwargs['pk']
        return Passage.objects.filter(cell_type__skin_layer__sub_biopsy__biopsy__id=biopsy_id)
