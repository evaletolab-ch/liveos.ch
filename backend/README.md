
# default testing user 

* http://localhost:8080/singletons/form/landing

# install cockpit v1
* cd backend
* download latest cockpit https://github.com/agentejo/cockpit/releases/tag/0.12.2  `wget` [https://github.com/agentejo/cockpit/archive/refs/tags/0.12.2.tar.gz](tar.gz) 


* uncompress it destination directory `./cockpit`
* `cp -a cockpit-0.12.2/* cockpit/`
* `rm -rf cockpit-0.12.2`
* restore modified files from repo `git checkout` 


# install docker
* see `doc/DOCKER-php.md`

# run docker

* `cd backend`
* `sudo docker run -i -t -p "8080:80" -v "$PWD/cockpit/:/var/www/html"  self/cockpit:latest`

# open from browser (Initial setup)
* use localhost:8080
* install localhost:8080/install

# load data from liveos.ch
* `cd backend/tools && npm i`
* update `.env` file






# v1 doc
* https://zeraton.gitlab.io/cockpit-docs/guide/api/
* https://github.com/raffaelj/cockpit-scripts/tree/master/custom-fields
* https://getcockpit.com/documentation/reference/fieldtypes
* https://discourse.getcockpit.com/
* [https://github.com/agentejo/lime](lime, a php micro web framework)
* [https://discourse.getcockpit.com/t/restrict-content-to-the-content-authors/285](restrict-content-to-the-content-authors)
* [https://discourse.getcockpit.com/t/repeater-with-collectionlink/57](repeater-with-collectionlink)
* [https://discourse.getcockpit.com/t/beginner-single-entry-read-permission/2195](beginner-single-entry-read-permission)

# install addons

* `cd cockpit`
* `git clone https://github.com/raffaelj/cockpit_ImageResize addons/ImageResize`
* `git clone https://github.com/pauloamgomes/CockpitCMS-Helpers addons/Helpers`
* `git clone https://github.com/pauloamgomes/CockpitCMS-Comments addons/Comments`
* `git clone https://github.com/pauloamgomes/CockpitCMS-Moderation addons/Moderation`
* `git clone https://github.com/MangoArt/CockpitCMSAddon-ContentValidation addons/ContentValidation`
