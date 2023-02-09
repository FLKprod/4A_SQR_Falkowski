from flask import Flask, request, jsonify
app = Flask(__name__)

resultat = {}

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    operator = data['operator']
    num1 = data['num1']
    num2 = data['num2']

    if operator == '+':
        resultatOp = num1 + num2
    elif operator == '-':
        resultatOp = num1 - num2
    elif operator == '*':
        resultatOp = num1 * num2
    elif operator == '/':
        resultatOp = num1 / num2

    resultat_id = len(resultat) + 1
    resultat[resultat_id] = resultatOp
    return jsonify({'resultat_id': resultat_id})


if __name__ == '__main__':
    app.run()