# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):
    dependencies = [
        ('recipes', '0006_ingredient'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Ingredient',
        ),
    ]
