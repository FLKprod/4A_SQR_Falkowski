from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

class Tweet:
    def __init__(self,profil,corps):
        self.profil = profil
        self.corps = corps
@app.route('/tweeter/<profil>/<corps>', methods=['POST'])
def tweeter():
    tweet=str(request.from.get("json"))
    
    return Tweet(profil,corps)

if __name__ == '__main__':
    app.run()
    