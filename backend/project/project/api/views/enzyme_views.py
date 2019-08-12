from rest_framework.generics import CreateAPIView, GenericAPIView, ListAPIView
from rest_framework.response import Response

from project.api.models.enzyme_model import Enzyme
from project.api.serializers.enzyme_serializer import EnzymeSerializer


# Create a new Enzyme
class CreateEnzymeView(CreateAPIView):
    serializer_class = EnzymeSerializer
    queryset = Enzyme.objects.all()


# Get Update  Delete a Enzyme by ID.
class GetUpdateDeleteEnzymeView(GenericAPIView):
    serializer_class = EnzymeSerializer
    queryset = Enzyme.objects.all()

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
        return Response('Enzyme deleted')


# Get Enzyme by SkinLayer ID
class EnzymeBySkinLayerId(ListAPIView):
    serializer_class = EnzymeSerializer

    def get_queryset(self):
        skin_layer_id = self.kwargs['pk']
        return Enzyme.objects.filter(skin_layer=skin_layer_id)
