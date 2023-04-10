# Twitter

By [Falkowski Maxime](https://github.com/FLKprod) et [Blanchard Lucas](https://github.com/lucas-b700)  
**Spécialité SQR**  

![twitter](https://reseau-morphee.fr/wp-content/uploads/2022/09/Twitter-logo.png)

# Début du projet

Nous avons fais un frontend pour le code de l'interface utilisateur, ce frontend se compose d'un fichier index.html, d'un fichier css (main.css) et d'un fichier javascript (main.js).  
  
Vous pouvez lancer notre application Twitter à l'aide du Dockerfile utilisant node.  
Le Dockerfile est accompagné d'un fichier package.json contenant les informations nécessaire notamment afin d'aller récupérer le repository directement sur GitHub.  
  
**Ce frontend comporte de nombreuses fonctionnalités tel que :**  
* Lire les tweets existant
* Se connecter 
* Choisir un hashtag
* Ecrire et publier un tweet
* Afficher l'ensemble de vos tweets
* Aimé un tweet
* retweeter un tweet
  
## Lire les tweets existant
Les tweets existants sont directement affichés à l'écran, vous permettant donc de les lire sans aucune action nécessaire de votre part.  
## Se connecter
Vous pouvez vous connecter à l'aide de la zone dédié à droite de l'écran.  
Vous y trouverez :  
* Une zone de texte pour écrire votre username
* Un bouton **Me connecter**
* Une phrase vous indiquant si vous êtes connecté
  
La phrase indiquant l'état de la connection indique aussi, dans le cas ou quelqu'un est connecté, le nom d'utilisateur de la personne connectée.

## Choisir un hashtag
Si vous souhaitez ajouter un hashtag différent du hashtag de base vous pouvez tout simplement écrire dans la zone située sous la zone de connection le hashtag que vous souhaitez mettre sur votre tweet.   
**Attention pensez bien à mettre le # dans la zone de texte, comme par exemple "#Vacances" et non pas uniquement "Vacances"**

## Ecrire et publier un tweet
Vous pouvez si vous le désirez écrire et publier un tweet, pour cela il vous faudra tout d'abord vous connecter via la zone dédié qui vous a été présenter précédemment.  
Une fois connecté vous pourrez alors écrire dans la zone de texte située en haut de l'écran puis appuyer sur le bouton **Tweeter** et votre tweet sera publié.  

## Afficher l'ensemble de vos tweets
Dans la zone de connection vous pouvez apercevoir un bouton **Voir mon profil**, si vous appuyez dessus vous serez redirigé vers votre profil où vous pourrez lire l'ensemble des tweets que vous avez vous même écrit.

## Aimé un tweet
Un simple bouton permet d'aimé un tweet.
## retweeter un tweet
Un simple bouton permet de retweeter un tweet.
