# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):
    dependencies = [
        ('recipes', '0004_auto_20150409_2104'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Eat',
        ),
        migrations.DeleteModel(
            name='Person',
        ),
    ]
