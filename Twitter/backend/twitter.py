# export FLASK_APP=backend/twitter.py
# python -m flask run
# docker run -p 6379:6379 redis

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import sys

app = Flask(__name__)
CORS(app)

import redis
r = redis.Redis(host='localhost', port=6379, db=0)

class User:
    def __init__(self,profil,id):
        self.profil = profil
        self.id = id

    def __json__(self):
        return {"profil": self.profil, "id": self.id}


class Tweet:
    def __init__(self,profil,corps,sujet,id):
        self.profil = profil
        self.corps = corps
        self.sujet = sujet
        self.id = id
        
    def __json__(self):
        return {"profil": self.profil, "corps": self.corps, "sujet" : self.sujet, "id": self.id}
    
    def getprofil(self):
        return self.profil


# route pour tweeter
@app.route('/tweeter/<profil>/<corps>/<sujet>/<int:id>', methods=['POST'])
def tweeter(profil,corps,sujet,id):
    r.set(id, json.dumps(Tweet(profil,corps,sujet,id).__json__()))
    print(r.get(id))
    sys.stdout.flush()
    return Tweet(profil,corps,sujet,id).__json__()





# route pour ajouter un utilisateur
@app.route('/user/<profil>/<int:id>', methods=['POST'])
def changeuser(profil,id):
    r.setnx("user_id", 0)
    user_id = r.get("user_id")
    user_unique = -1
    for i in range(int(r.get("user_id"))):
        print(r.get(i+1))
        json_string = r.get(i+1)
        json_data = json.loads(json_string)
        prof = json_data["profil"]
        print(prof)
        if profil == prof:
            user_unique = i+1
    if user_unique == -1:
        id = int(user_id) + 1
        r.set("user_id", id)
        r.set(id, json.dumps(User(profil,id).__json__()))
    else:
        id = user_unique
    print(r.get(id))
    sys.stdout.flush()
    return User(profil,id).__json__()





# route pour recuperer les tweets d'un profil
@app.route('/<profil>', methods=['POST'])
def get_tweets_by_profil(profil):
    user_tweet = []
    for key in r.scan_iter("*"):
        tweetSTR=r.get(key).decode('utf-8')
        tweet=json.loads(tweetSTR)
        if 'sujet' in tweetSTR and tweet['profil']==profil:
            print(tweet['profil'])
            user_tweet.append(tweet)
        else:
            print("pas un tweet maos osef")
    print(user_tweet)
    return user_tweet

# route pour recuperer tous les tweets dans l'API
@app.route('/all_tweets', methods=['POST'])
def get_all_tweets():
    user_tweet = []
    for key in r.scan_iter("*"):
        tweetSTR=r.get(key).decode('utf-8')
        tweet=json.loads(tweetSTR)
        if 'sujet' in tweetSTR:
            user_tweet.append(tweet)
        else:
            print("pas un tweet maos osef")
    print(user_tweet)
    return user_tweet