from rest_framework.generics import CreateAPIView, GenericAPIView, ListAPIView
from rest_framework.response import Response

from project.api.models.skin_layer_model import SkinLayer
from project.api.serializers.skin_layer_serializer import SkinLayerSerializer


# Get List SkinLayers.
class ListSkinLayerView(ListAPIView):
    serializer_class = SkinLayerSerializer
    queryset = SkinLayer.objects.all()


# create a new skinlayer.
class SkinLayerView(CreateAPIView):
    serializer_class = SkinLayerSerializer
    queryset = SkinLayer.objects.all()


# Get Update  Delete a skinlayer by ID.
class GetUpdateDeleteSkinLayerView(GenericAPIView):
    serializer_class = SkinLayerSerializer
    queryset = SkinLayer.objects.all()

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
        return Response('Skin-Layer deleted')


# Get SkinLayer by Subbiopsy ID
class SkinLayerBySubBioId(ListAPIView):
    serializer_class = SkinLayerSerializer

    def get_queryset(self):
        sub_biopsy_id = self.kwargs['pk']
        return SkinLayer.objects.filter(sub_biopsy=sub_biopsy_id)
