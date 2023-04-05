from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

import redis
r = redis.Redis(host='localhost', port=6379, db=0)

class Tweet:
    def __init__(self,profil,corps,sujet):
        self.profil = profil
        self.corps = corps
        self.sujet = sujet
        
    def __json__(self):
        return {"profil": self.profil, "corps": self.corps, "sujet" : self.sujet}



# route pour tweeter
@app.route('/tweeter/<profil>/<corps>/<sujet>', methods=['POST'])
def tweeter(profil,corps,sujet):
    r.set('tweets', json.dumps(Tweet(profil,corps,sujet).__json__()))

    return Tweet(profil,corps,sujet).__json__()


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

# export FLASK_APP=backend/twitter.py
# python -m flask run