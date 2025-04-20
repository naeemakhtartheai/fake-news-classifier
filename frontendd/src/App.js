import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState(''); // Input state
  const [prediction, setPrediction] = useState(null); // Prediction result
  const [loading, setLoading] = useState(false); // Loading state for request

  const handleInputChange = (event) => {
    setText(event.target.value); // Update text input state
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        text: text,
      });

      // Set prediction result
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
      setPrediction('Error during prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Fake News Classifier</h1>

      <div>
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter news text here..."
          rows="6"
          cols="50"
        ></textarea>
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Classifying...' : 'Classify News'}
      </button>

      {prediction && (
        <div>
          <h2>Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
