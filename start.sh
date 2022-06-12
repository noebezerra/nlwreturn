#! /bin/bash

docker container run -it --name node-dev -p 80:3000 -v /$PWD/web:/usr/app noebezerra/node-dev bash