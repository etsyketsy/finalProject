from django.http import HttpResponse
from rest_framework.generics import GenericAPIView

from project.api.resources.biopsy_resource import BiopsyResource
from project.api.resources.cell_types_resource import CellTypeResource


# printing xls format
class BiopsyExportXlsView(GenericAPIView):
    def get(self, request):
        biopsy_resource = BiopsyResource()
        dataset = biopsy_resource.export()
        response = HttpResponse(dataset.xls, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="biopsies.xls"'
        return response


class CellTypeXlsView(GenericAPIView):
    def get(self, request):
        biopsy_resource = CellTypeResource()
        dataset = biopsy_resource.export()
        response = HttpResponse(dataset.xls, content_type='application/vnd.ms-excel')
        response['Content-Disposition'] = 'attachment; filename="celltypes.xls"'
        return response


# printing csv format
class BiopsyExportCsvView(GenericAPIView):
    def get(self, request):
        biopsy_resource = BiopsyResource()
        dataset = biopsy_resource.export()
        response = HttpResponse(dataset.csv, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="biopsies.cvs"'
        return response


class CellTypeCsvView(GenericAPIView):
    def get(self, request):
        biopsy_resource = CellTypeResource()
        dataset = biopsy_resource.export()
        response = HttpResponse(dataset.csv, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="biopsies.cvs"'
        return response
