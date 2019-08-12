from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt import views as jwt_views


mypatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('project.api.urls')),
    path('docs/', include_docs_urls(title='eSkin Rest API')),
    # tokens
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
]

urlpatterns = [
    path('backend/', include(mypatterns)),
]


# Change admin site title
admin.site.site_header = "eSkin Admin Dashboard"
admin.site.site_title = "eSkin Admin Dashboard"
admin.site.index_title = ""
