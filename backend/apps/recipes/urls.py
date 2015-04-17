from django.conf.urls import patterns, url
from views import RecipeList, RecipeDetail, AddRecipe

urlpatterns = patterns('',
                       url('^recipes/$', RecipeList.as_view(), name='recipe_list'),
                       url('^recipes/(?P<pk>[0-9]+)/$', RecipeDetail.as_view(), name='recipe_detail'),
                       url('^add_recipe/$', AddRecipe.as_view(), name='add_recipe'),

)

