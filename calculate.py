from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
resultat = {}

@app.route('/calculate/<nombre1>/<nombre2>/<symbol>', methods=['POST'])
def calculate(nombre1,nombre2,symbol):
    if symbol == '+':
        resultatOp = nombre1 + nombre2
    elif symbol == '-':
        resultatOp = nombre1 - nombre2
    elif symbol == '*':
        resultatOp = nombre1 * nombre2
    elif symbol == '/':
        resultatOp = nombre1 / nombre2
    resultat_id = len(resultat) + 1
    resultat[resultat_id] = resultatOp
    return str(resultatOp)


if __name__ == '__main__':
    app.run()
    