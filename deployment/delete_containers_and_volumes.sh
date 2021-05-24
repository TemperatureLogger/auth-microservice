#!/bin/bash

docker ps -a | awk '{print $1}' | xargs docker rm
docker volume ls | awk '{print $2}' | xargs docker volume rm

