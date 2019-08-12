from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from django.contrib.contenttypes.admin import GenericTabularInline
from simple_history.admin import SimpleHistoryAdmin

from project.api.models.anatomical_part_model import AnatomicalPart
from project.api.models.biopsy_model import Biopsy
from project.api.models.cell_category_model import CellCategory
from project.api.models.cell_counting_model import CellCounting
from project.api.models.cell_type_model import CellType
from project.api.models.coating_model import Coating
from project.api.models.comment_model import Comment
from project.api.models.container_type_model import ContainerType
from project.api.models.cut_method_model import CutMethod
from project.api.models.donor_model import Donor
from project.api.models.enzyme_model import Enzyme
from project.api.models.layer_type_model import LayerType
from project.api.models.morphology_model import Morphology
from project.api.models.numbering_model import Numbering
from project.api.models.passage_model import Passage, CellDistribution
from project.api.models.pigmentation_model import Pigmentation
from project.api.models.skin_layer_model import SkinLayer
from project.api.models.subbiopsy_model import SubBiopsy


class CommentInline(GenericTabularInline):
    model = Comment


# Register models that need comments below
@admin.register(Donor)
class DonorAdmin(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ['numbering', "age", "gender", "donor_reference"]
    exclude = ['numbering']


@admin.register(Biopsy)
class BiopsyAdmin(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ["numbering", "surgery_date", "anatomical_part", "skin_thickness", "skin_area",
                    "donor"]
    exclude = ['numbering']


@admin.register(SubBiopsy)
class SubBiopsyAdmin(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ["numbering", "biopsy", "sub_biopsy_area", "cut_method"]
    exclude = ['numbering']


@admin.register(SkinLayer)
class SkinLayer(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ["numbering", "enzyme", "separation_time", "temperature", "sub_biopsy"]
    exclude = ['numbering']


@admin.register(CellType)
class CellTypeAdmin(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ["numbering", "type", "enzyme", "temperature", "digestion_time", "inhibition",
                    "filter_size", "filter_rinsing", "centrifugation_speed",
                    "centrifugation_time", "resuspended_volume", "concentration",
                    "viability", "diameter", "skin_layer", "total_viable_isolated_cells", "isolation_yield"]
    exclude = ['numbering']


@admin.register(Passage)
class PassageAdmin(SimpleHistoryAdmin, ImportExportModelAdmin):
    inlines = [CommentInline]
    list_display = ["numbering", "cell_type", "passage", "cell_distribution", "pigmentation",
                    "morphology", "morphology_image", "passaging_date", "enzyme", "digestion_time",
                    "digestion_temperature", "resuspended_volume", "concentration", "viability",
                    "diameter", "container_type", "container_area", "coating",
                    "coating_concentration_per_cm2", "seeding_density", "magnification", "not_continued"]
    exclude = ['numbering']


# Models without comments

admin.site.register(Numbering, SimpleHistoryAdmin)
admin.site.register(Comment, SimpleHistoryAdmin)
admin.site.register(AnatomicalPart, SimpleHistoryAdmin)
admin.site.register(CutMethod, SimpleHistoryAdmin)
admin.site.register(Enzyme, SimpleHistoryAdmin)
admin.site.register(LayerType, SimpleHistoryAdmin)
admin.site.register(CellCategory, SimpleHistoryAdmin)
admin.site.register(ContainerType, SimpleHistoryAdmin)
admin.site.register(Coating, SimpleHistoryAdmin)
admin.site.register(CellDistribution, SimpleHistoryAdmin)
admin.site.register(Pigmentation, SimpleHistoryAdmin)
admin.site.register(Morphology, SimpleHistoryAdmin)
admin.site.register(CellCounting, SimpleHistoryAdmin)
