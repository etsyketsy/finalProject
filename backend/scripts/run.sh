#!/bin/bash
python manage.py migrate
python manage.py collectstatic --noinput
exec /opt/conda/envs/project/bin/uwsgi --ini /scripts/uwsgi.ini
