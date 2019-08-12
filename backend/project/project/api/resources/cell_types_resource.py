from import_export import resources

from project.api.models.cell_type_model import CellType


class CellTypeResource(resources.ModelResource):
    class Meta:
        model = CellType
