from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls import patterns

urlpatterns = patterns('',

                       url('^', include('apps.recipes.urls')),

                       url(r'^admin/', include(admin.site.urls)),
                       )
