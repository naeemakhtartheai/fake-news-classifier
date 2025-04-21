# Fake News Classifier

This project is a **Fake News Classification** system built using **Flask** for the backend and **React** for the frontend. The system uses machine learning to classify news articles as either "Real" or "Fake."

## Features

- **Frontend**: A React application where users can input news text and get a prediction (Real or Fake) based on the model.
- **Backend**: A Flask API that processes the input using a pre-trained machine learning model and returns the prediction.

## Technology Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Flask, Python
- **Model**: Scikit-learn, Pickle (for model serialization)
- **Vectorizer**: TF-IDF Vectorizer (for text preprocessing)

## Project Structure

fake-news-classifier/ ├── backend/ # Flask backend │ ├── model/ # Model and vectorizer files │ ├── app.py # Flask API file │ ├── requirements.txt # Backend dependencies │ └── .gitignore # Git ignore for backend files │ ├── frontend/ # React frontend │ ├── public/ # Public assets │ ├── src/ # React components and source code │ ├── package.json # Frontend dependencies │ └── .gitignore # Git ignore for frontend files │ └── README.md # Project documentation



## Requirements

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/naeemakhtartheai/fake-news-classifier.git
   cd fake-news-classifier/backend

