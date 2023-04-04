from flask import Flask, request
from flask_cors import CORS
import json
import redis

app = Flask(__name__)
CORS(app)

r = redis.Redis(host='localhost', port=6379, db=0)

class Tweet:
    def __init__(self,profil,corps):
        self.profil = profil
        self.corps = corps

    def __json__(self):
        return { "profil": self.profil, "corps": self.corps}


@app.route('/tweeter/<profil>', methods=['GET'])
def get_tweets(profil):  
    print(json.loads(r.get(profil)))  
    return json.loads(r.get(profil))


@app.route('/tweeter/<profil>/<corps>', methods=['POST'])
def tweeter(profil,corps):
    r.set(profil, json.dumps(Tweet(profil,corps).__json__()))
    return Tweet(profil,corps).__json__()

if __name__ == '__main__':
    app.run()










# python -m flask run