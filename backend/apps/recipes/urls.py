from django.conf.urls import patterns, url
from views import RecipeList

urlpatterns = patterns('',
                       url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
)

