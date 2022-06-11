#! /bin/bash

docker container run -it --name node-dev -p 80:3000 -p 3000:3001 -v /$PWD:/usr/app noebezerra/node-dev bash