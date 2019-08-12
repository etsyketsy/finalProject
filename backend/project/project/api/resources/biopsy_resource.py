from import_export import resources

from project.api.models.biopsy_model import Biopsy


class BiopsyResource(resources.ModelResource):
    class Meta:
        model = Biopsy
