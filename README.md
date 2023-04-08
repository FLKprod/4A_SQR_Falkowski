# Projet de Cloud Computing 2022 / 2023

By [Falkowski Maxime](https://github.com/FLKprod) et [Blanchard Lucas](https://github.com/lucas-b700)  
**Spécialité SQR**  

![esirem](https://www.u-bourgogne.fr/wp-content/uploads/logo-couleur.jpg)
![](https://img.shields.io/badge/PROJET_TERMINÉ_🚀-059142?style=for-the-badge&logoColor=white)


Afin de lancer les fichiers Dockerfile nous avons télécharger Docker Desktop et mis à jour wsl.
  
## Lancer l'application
Afin de lancer notre application Twitter vous devez executer trois étapes :  
* Lancer un conteneur redis avec la commande `docker run --name myredis -p 6379:6379 redis` via le powershell
* Lancer le conteneur du frontend en vous rendant dans le dossier frontend et en exécutant la commande `docker build . -t frontend` ainsi que la commande `docker run --name frontend -p 8080:8080 frontend` via le powershell
* Enfin, la Dockerfile du backend ne fonctionnant pas vous devrez, via wsl, vous rendre dans le dossier correspondant puis exécuter la commande `export FLASK_APP=twitter/backend/twitter.py` puis la commande `python3 -m flask run` afin de lancer le backend
  
  
Une étape supplémentaire est possible bien qu'elle ne soit pas indispensable au fonctionnement correct de notre application :  
* Vous pouvez exécuter, si vous souhaitez générer quelques utilisateurs ainsi que quelques tweets sur redis, la commande `python3 generate_data_script.py` via wsl.
Cela générera 15 utilisateurs ainsi que 45 tweets.
  
  
Vous pouvez désormais utiliser notre application Twitter.
