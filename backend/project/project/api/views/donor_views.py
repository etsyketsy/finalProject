from rest_framework.generics import ListAPIView, GenericAPIView, CreateAPIView
from rest_framework.response import Response
from project.api.serializers.donor_serializer import DonorSerializer
from project.api.models.donor_model import Donor


# Get a list of all donors
class DonorView(ListAPIView):
    serializer_class = DonorSerializer
    queryset = Donor.objects.all()


# register a new donor.
class CreateNewDonorView(CreateAPIView):
    serializer_class = DonorSerializer
    queryset = Donor.objects.all()


# Get Update Delete a donor by ID.
class GetUpdateDeleteDonorView(GenericAPIView):
    serializer_class = DonorSerializer
    queryset = Donor.objects.all()

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
        return Response('Donor deleted')
# Get a donor by Numbering:
# class GetDonorByNumberingView(GenericAPIView):
#     serializer_class = DonorSerializer
#     queryset = Donor.objects.all()
#
#     def get(self, *args, **kwargs):
#         search_string = self.request.query_params.get('code')
#         return Response(DonorSerializer(instance=Donor.objects.all(), many=True).data)
