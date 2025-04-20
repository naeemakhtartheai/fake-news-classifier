import React, { useState } from 'react';
import axios from 'axios';

const NewsChecker = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const checkNews = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/predict', { text });
            // const response = await axios.post('http://192.168.18.197:3000/predict', { text });
            const response = await axios.post('http://127.0.0.1:5000/predict', { text });

            setResult(response.data.prediction);
        } catch (error) {
            console.error(error);
            setResult("Error checking the news.");
        }
    };

    return (
        <div>
            <textarea
                rows="10"
                cols="70"
                placeholder="Paste news content here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button onClick={checkNews}>Check News</button>
            {result && <p>Prediction: <strong>{result}</strong></p>}
        </div>
    );
};

export default NewsChecker;
