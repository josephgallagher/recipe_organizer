# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_eat'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Persons',
            new_name='Person',
        ),
    ]
