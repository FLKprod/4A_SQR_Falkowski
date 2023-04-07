# export FLASK_APP=backend/twitter.py
# python -m flask run
# docker run -p 6379:6379 redis

from flask import Flask, request
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

# route pour tweeter
@app.route('/tweeter/<profil>/<corps>/<sujet>/<int:id>', methods=['POST'])
def tweeter(profil,corps,sujet,id):
    r.set(id, json.dumps(Tweet(profil,corps,sujet,id).__json__()))
    print(r.get(id))
    print("deded")
    sys.stdout.flush()
    return Tweet(profil,corps,sujet,id).__json__()

# route pour ajouter un utilisateur
@app.route('/user/<profil>/<int:id>', methods=['POST'])
def changeuser(profil,id):
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
    print("deded")
    sys.stdout.flush()
    return User(profil,id).__json__()


# route pour recuperer les tweets
@app.route('/tweeter/<profil>', methods=['GET'])
def get_all_tweets(profil):
    tweets_user = []
    #for i in r.get('tweets').__len__:
    #    if r.get('tweets')[i].__getattribute__("profil")==profil:
    #        tweets_user.__add__(r.get('tweets')[i])
    return json.loads(tweets_user)


# route pour recuperer tous les tweets
@app.route('/tweeter', methods=['GET'])
def get_tweets(profil):
    all_tweets = []
    for i in r.get('tweets').__len__:
        all_tweets.__add__(r.get('tweets')[i])
    return json.dumps(all_tweets)

if __name__ == '__main__':
    app.run()

