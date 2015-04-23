from django.conf.urls import patterns, url
from django.conf import settings
from views import RecipeList, RecipeDetail, AddRecipe

urlpatterns = patterns('',
                       url('^recipes/$', RecipeList.as_view(), name='recipe_list'),
                       url('^recipes/(?P<pk>[0-9]+)/$', RecipeDetail.as_view(), name='recipe_detail'),
                       url('^add_recipe/$', AddRecipe.as_view(), name='add_recipe'),
                       # When you hit path endpoint, use static.serve view to grab the image in the MEDIA_ROOT directory
                       url(r'^media/(?P<path>.*)$',
                           'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
                       )

