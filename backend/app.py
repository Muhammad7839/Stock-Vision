from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Allow frontend to access the backend

@app.route('/')
def home():
    return "✅ StockVision Backend is Running"

@app.route('/api/predict', methods=['GET'])
def get_predictions():
    try:
        y_test = np.load('y_test.npy').tolist()
        y_pred = np.load('y_pred.npy').tolist()
        return jsonify({
            'actual': y_test,
            'predicted': y_pred
        })
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)