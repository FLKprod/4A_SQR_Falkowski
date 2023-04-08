import redis
r = redis.Redis(host='localhost', port=6379, db=0)

# Liste de noms pour les profils d'utilisateurs
noms = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Pierre", "Paul", "Jacques", "Josette", "Jean-Eudes"]

r.setnx("user_id", 0)
user_id = int(r.get("user_id"))

for i in range(0+user_id, int(len(noms))+user_id, 1): #Ajoute 15 utilisateurs
    r.set(i+1, "{\"profil\": \"" + noms[i-user_id] + "\", \"id\": " + str(i+1) + "}")

timestamps = ["1680958751302", "1680958752302", "1680958753302", "1680958754302", "1680958755302", "1680958756302", "1680958757302", "1680958758302", "1680958759302", "1680958760302", "1680958761302", "1680958762302", "1680958763302", "1680958764302", "1680958765302", "1680958766302", "1680958767302", "1680958768302", "1680958769302", "1680958770302", "1680958771302", "1680958772302", "1680958773302", "1680958774302", "1680958775302", "1680958776302", "1680958777302", "1680958778302", "1680958779302", "1680958780302", "1680958781302", "1680958782302", "1680958783302", "1680958784302", "1680958785302", "1680958786302", "1680958787302", "1680958788302", "1680958789302", "1680958790302", "1680958791302", "1680958792302", "1680958793302", "1680958794302", "1680958795302"]
tweets = [
    "La nature est magnifique en cette saison.",
    "Je viens juste de finir un livre incroyable.",
    "Le soleil se lève sur une nouvelle journée.",
    "J'adore les journées pluvieuses passées à l'intérieur.",
    "Je viens de découvrir mon nouveau café préféré.",
    "Le yoga est tellement apaisant pour l'esprit.",
    "Je suis très excité à l'idée d'aller en vacances ce week-end.",
    "Les chiens sont les meilleurs amis de l'homme.",
    "J'ai enfin réussi à faire cette recette de cuisine compliquée !",
    "Je pense que tout le monde devrait prendre des cours de danse.",
    "La musique est un langage universel.",
    "Je suis tellement reconnaissant pour les amis et la famille dans ma vie.",
    "Les fleurs sont un rappel constant de la beauté du monde.",
    "Je suis heureux de pouvoir aider les autres dans ma communauté.",
    "J'ai découvert une nouvelle passion pour la peinture.",
    "Il n'y a rien de mieux que de passer du temps de qualité avec les êtres chers.",
    "Je suis très excité de commencer mon nouveau travail demain.",
    "La nourriture est la meilleure façon de rassembler les gens.",
    "Je suis émerveillé par la façon dont les étoiles brillent dans le ciel nocturne.",
    "La lecture est une source infinie de connaissances et d'inspiration.",
    "Je suis inspiré par la force et la résilience des gens qui surmontent des défis difficiles.",
    "Je suis reconnaissant pour chaque jour que je passe sur cette terre.",
    "Je suis excité de voir où la vie me mènera dans les prochaines années.",
    "La vie est belle et je suis reconnaissant pour chaque moment que j'ai.",
    "La simplicité est la clé de la paix intérieure et de la satisfaction.",
    "Je crois que chacun de nous a le pouvoir de changer le monde à sa manière.",
    "Je suis émerveillé par la beauté de l'océan et de ses créatures.",
    "Le sport est un excellent moyen de se maintenir en forme et de rester en bonne santé.",
    "Je suis reconnaissant pour les enseignements que j'ai reçus de mes parents et mentors.",
    "Je suis inspiré par les personnes qui travaillent pour apporter des changements positifs dans le monde.",
    "Je suis heureux de voir mes amis réussir dans leurs projets et objectifs.",
    "La créativité est la clé pour résoudre des problèmes et découvrir de nouvelles solutions.",
    "Je suis reconnaissant pour les occasions que j'ai de voyager et de découvrir de nouveaux endroits.",
    "La technologie peut être un outil incroyable pour connecter les gens à travers le monde.",
    "Je crois que chaque personne a quelque chose d'unique et de spécial à offrir au monde.",
    "La nature est un rappel constant de la beauté et de la fragilité de notre monde.",
    "Je suis heureux de voir mes amis et ma famille se soutenir les uns les autres dans les moments difficiles.",
    "La connaissance est la clé pour créer un avenir meilleur pour les générations futures.",
    "Je crois que l'amour est la force la plus puissante dans le monde.",
    "Je suis inspiré par les personnes qui se battent pour les droits de l'homme et la justice sociale.",
    "Je suis heureux de voir les enfants grandir et apprendre de nouvelles choses chaque jour.",
    "Je crois que chaque personne devrait avoir la liberté de poursuivre ses rêves et ses passions.",
    "La gratitude est la clé pour trouver la paix et la joie dans sa vie.",
    "Je suis émerveillé par la façon dont les plantes et les animaux sont interconnectés dans notre écosystème.",
    "Je suis heureux de voir les gens prendre soin de l'environnement et de la planète."]

subjects = [
"Nature",
"Lecture",
"Nouvelle journée",
"Journée pluvieuse",
"Nouveau café",
"Yoga",
"Vacances",
"Chiens",
"Recette de cuisine",
"Danse",
"Musique",
"Famille et amis",
"Fleurs",
"Aider les autres",
"Peinture",
"Temps de qualité",
"Nouveau travail",
"Nourriture",
"Étoiles",
"Lecture",
"Surmonter des défis",
"Reconnaissance",
"Avenir incertain",
"La vie est belle",
"Simplicité",
"Changer le monde",
"Océan",
"Sport",
"Enseignements",
"Changements positifs",
"Réussite de mes amis",
"Créativité",
"Voyager",
"Technologie",
"Chacun a quelque chose à offrir",
"Nature et fragilité",
"Soutien",
"Créer un avenir meilleur",
"L'amour",
"Droits de l'homme et justice sociale",
"Enfants",
"Liberté",
"Gratitude",
"Interconnexion de la nature",
"Environnement et planète"]


for i in range(0, 3*int(len(noms)), 3): #Ajoute 45 tweets (3 par utilisateurs)
    r.set(timestamps[i], "{\"profil\": \"" + noms[i//3] + "\", \"corps\": \"" + tweets[i] + "\", \"sujet\": \"" + subjects[i] + "\", \"id\": " + str(timestamps[i]) + "}")
    r.set(timestamps[i+1], "{\"profil\": \"" + noms[i//3] + "\", \"corps\": \"" + tweets[i+1] + "\", \"sujet\": \"" + subjects[i+1] + "\", \"id\": " + str(timestamps[i+1]) + "}")
    r.set(timestamps[i+2], "{\"profil\": \"" + noms[i//3] + "\", \"corps\": \"" + tweets[i+2] + "\", \"sujet\": \"" + subjects[i+2] + "\", \"id\": " + str(timestamps[i+2]) + "}")

r.set("user_id", int(len(noms))+user_id)