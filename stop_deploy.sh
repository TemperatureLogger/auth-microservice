#!/bin/bash

# stop containers
# DO NOT MODIFY docker-compose before stopping containers


docker stop auth
docker stop auth_db

docker rm -v auth
docker rm -v auth_db

# show informations about running containers
docker ps
