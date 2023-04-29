

# install docker
* https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

# build docker image
* `source alias.sh`
* `docker build -t self/cockpit - < Dockerfile`


# images 
sudo docker pull [image]

# remove images

* `sudo docker rm $(sudo docker ps -a -q)`
* `sudo docker rmi $(sudo docker images -q)`


# shell

sudo docker ps
sudo docker exec -it [ID] /bin/bash
tail -f /var/log/apache2/error.log

sudo docker stop [ID]

# Info
- https://fr.jeffprod.com/blog/2015/lamp-sous-docker/
- https://marcit.eu/en/2021/04/28/dockerize-webserver-nginx-php8/
- https://github.com/IshtarStar/docker-compose-nginx-phpfpm
- https://github.com/khromov/alpine-nginx-php8



