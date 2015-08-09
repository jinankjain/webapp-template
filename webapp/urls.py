from django.conf.urls import include, url
from django.contrib import admin
from webapp.views import IndexView

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url('^.*$', IndexView.as_view(), name='index'),
]
