# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pickle
# import traceback

# app = Flask(__name__)
# CORS(app)  # Allow frontend to communicate with backend

# # Load model and vectorizer
# try:
#     with open('model/fake_vs_real_news_model.pkl', 'rb') as f:
#         model = pickle.load(f)

#     with open('model/tfidf_vectorizer.pkl', 'rb') as f:
#         vectorizer = pickle.load(f)

# except Exception as e:
#     print(f"Error loading model or vectorizer: {e}")
#     model = None
#     vectorizer = None

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()
#         text = data.get('text', '')
        
#         if not text:
#             return jsonify({'error': 'No text provided'}), 400
        
#         if model is None or vectorizer is None:
#             return jsonify({'error': 'Model or Vectorizer not loaded correctly'}), 500
        
#         vec = vectorizer.transform([text])
#         prediction = model.predict(vec)[0]
        
#         # Ensure the prediction is serializable (convert numpy int64 to native int)
#         return jsonify({'prediction': int(prediction)})

#     except Exception as e:
#         # Log the detailed exception traceback
#         print(f"Error occurred: {e}")
#         traceback.print_exc()
#         return jsonify({'error': 'Error occurred during prediction', 'details': str(e)}), 500

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)






from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with backend

# Load model and vectorizer
with open('model/fake_vs_real_news_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('model/tfidf_vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    vec = vectorizer.transform([text])
    prediction = model.predict(vec)[0]

    # Convert the prediction to a string (Fake or Real)
    prediction_label = 'Real' if prediction == 1 else 'Fake'
    
    return jsonify({'prediction': prediction_label})

if __name__ == '__main__':
    app.run(debug=True)
