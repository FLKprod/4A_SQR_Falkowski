from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
resultat = {}


class Tweet:
        def __init__(self,profil,corps):
            self.profil = profil
            self.corps = corps
@app.route('/tweeter/<profil>/<corps>', methods=['POST'])
def tweeter(profil,corps):
    return Tweet(profil,corps)

if __name__ == '__main__':
    app.run()
    