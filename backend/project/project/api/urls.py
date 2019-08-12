from django.urls import path

from project.api.views.biopsys_views import BiopsyView, CreateNewBiopsyView, GetUpdateDeleteBiopsyView
from project.api.views.cell_types_views import GetUpdateDeleteCellTypeView, CreateCellTypeView, CellTypeBySkinLayerId, \
    ListCellTypeView
from project.api.views.comments_views import CommentsView, GetUpdateDeleteCommentView
from project.api.views.donor_views import DonorView, CreateNewDonorView, GetUpdateDeleteDonorView
from project.api.views.enzyme_views import CreateEnzymeView, GetUpdateDeleteEnzymeView, EnzymeBySkinLayerId
from project.api.views.exports import BiopsyExportXlsView, BiopsyExportCsvView, CellTypeCsvView, CellTypeXlsView
from project.api.views.passage_views import CreatePassageView, GetUpdateDeletePassageView, PassageByCellTypeId, \
    ListPassageView, PassageByBiopsyId
from project.api.views.skin_layer_views import SkinLayerView, GetUpdateDeleteSkinLayerView, SkinLayerBySubBioId, \
    ListSkinLayerView

from project.api.views.sub_biopsys_views import SubBiopsiesView, CreateNewSubBiopsyView, GetUpdateDeleteSubBiopsyView, \
    ListSubBiopsyByBioIDView
from project.api.views.users_views import ListUsersView, GetUpdateDeleteUserView, GetCurrentUserView

app_name = "api"

urlpatterns = [
    # Donors
    path('donor/', DonorView.as_view(), name='list-all-donors'),
    path('donor/new/', CreateNewDonorView.as_view(), name='create-new-donor'),
    path('donor/<int:pk>/', GetUpdateDeleteDonorView.as_view(), name='get-update-delete-donor-by-id'),
    # path('donors/<str:string>/', GetDonorByNumberingView.as_view(), name='get-donor-by-numbering'),
    # Biopsys
    path('biopsy/', BiopsyView.as_view(), name='list-all-biopsies'),
    path('biopsy/new/', CreateNewBiopsyView.as_view(), name='create-new-biopsy'),
    path('biopsy/<int:pk>/', GetUpdateDeleteBiopsyView.as_view(), name='get-update-delete-biopsy-by-id'),
    # SubBiopsies
    path('subbiopsy/', SubBiopsiesView.as_view(), name='list-all-sub-biopsies'),
    path('subbiopsy/new/', CreateNewSubBiopsyView.as_view(), name='create-new-sub-biopsy'),
    path('subbiopsy/<int:pk>/', GetUpdateDeleteSubBiopsyView.as_view(), name='get-update-delete-sub-biopsy-by-id'),
    path('subbiopsy/biopsy/<int:pk>/', ListSubBiopsyByBioIDView.as_view(), name='list-all-sub-biopsies-by-biopsy-id'),
    # skinLayers
    path('skinlayer/new/', SkinLayerView.as_view(), name='create-new-skinlayer'),
    path('skinlayer/<int:pk>/', GetUpdateDeleteSkinLayerView.as_view(), name='get-update-delete-skinlayer-by-id'),
    path('skinlayer/subbiopsy/<int:pk>/', SkinLayerBySubBioId.as_view(), name='list-all-skinlayer-by-sub-bio-id'),
    path('skinlayers/', ListSkinLayerView.as_view(), name='list-all-skinlayer'),
    # CellTypes
    path('celltypes/new/', CreateCellTypeView.as_view(), name='create-new-celltype'),
    path('celltypes/<int:pk>/', GetUpdateDeleteCellTypeView.as_view(), name='get-update-delete-celltypes-by-id'),
    path('celltypes/skinlayer/<int:pk>/', CellTypeBySkinLayerId.as_view(), name='list-all-cellTypes-by-skinlayer-id'),
    path('celltypes/', ListCellTypeView.as_view(), name='list-all-celltypes'),
    # Enzyme
    path('enzyme/new/', CreateEnzymeView.as_view(), name='create-new-enzyme'),
    path('enzyme/<int:pk>/', GetUpdateDeleteEnzymeView.as_view(), name='get-update-delete-enzyme-by-id'),
    path('enzyme/skinlayer/<int:pk>/', EnzymeBySkinLayerId.as_view(), name='list-all-enzyme-by-skinlayer-id'),
    # Passage
    path('passage/new/', CreatePassageView.as_view(), name='create-new-passage'),
    path('passage/<int:pk>/', GetUpdateDeletePassageView.as_view(), name='get-update-delete-passage-by-id'),
    path('passage/celltypes/<int:pk>/', PassageByCellTypeId.as_view(), name='list-all-passage-by-cellTypes-id'),
    path('passages/', ListPassageView.as_view(), name='list-all-celltypes'),
    path('passage/biopsy/<int:pk>/', PassageByBiopsyId.as_view(), name='list-all-passage-by-biopsy-id'),
    # Comments
    path('comments/', CommentsView.as_view(), name='list-all-comments'),
    path('comments/<int:pk>/', GetUpdateDeleteCommentView.as_view(), name='get-update-delete-comment-by-id'),
    # users
    path('me/', GetCurrentUserView.as_view(), name='get-current-user'),
    path('users/list/', ListUsersView.as_view(), name='list-all-users'),
    # path('users/', SearchUserView.as_view(), name='users-search'),
    path('me/<int:pk>/', GetUpdateDeleteUserView.as_view(), name='get-update-delete-users-by-id'),
    # exports
    path('exports/biopsy/xls/', BiopsyExportXlsView.as_view(), name='print-all-biopsies-xls-format'),
    path('exports/biopsy/csv/', BiopsyExportCsvView.as_view(), name='print-all-biopsies-csv-format'),
    path('exports/celltypes/xls/', CellTypeXlsView.as_view(), name='print-all-celltypes-xls-format'),
    path('exports/celltypes/csv/', CellTypeCsvView.as_view(), name='print-all-celltypes-csv-format'),
]
