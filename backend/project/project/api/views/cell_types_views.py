from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView
from rest_framework.response import Response
from project.api.models.cell_type_model import CellType
from project.api.serializers.cell_types_serializer import CellTypeSerializer


# Get List of CellTypes.
class ListCellTypeView(ListAPIView):
    serializer_class = CellTypeSerializer
    queryset = CellType.objects.all()


# Create a new CellType.
class CreateCellTypeView(CreateAPIView):
    serializer_class = CellTypeSerializer
    queryset = CellType.objects.all()


# Get Update  Delete a CellType by ID.
class GetUpdateDeleteCellTypeView(GenericAPIView):
    serializer_class = CellTypeSerializer
    queryset = CellType.objects.all()

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
        return Response('Cell deleted')


# Get celltype by SkinLayer ID
class CellTypeBySkinLayerId(ListAPIView):
    serializer_class = CellTypeSerializer

    def get_queryset(self):
        skin_layer_id = self.kwargs['pk']
        return CellType.objects.filter(skin_layer=skin_layer_id)
