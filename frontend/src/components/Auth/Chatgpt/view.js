import React, { useState } from 'react';

const ApiFrontend = () => {
  const [requestData, setRequestData] = useState('');
  const [getResponse, setGetResponse] = useState('');

  const sendPostRequest = () => {
    fetch('http://localhost:5000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/form-data',
        // Add any other headers if needed
      },
      body: requestData,
    })
    .then(response => response.json())
    .then(data => {
      const id = data.id; // Extract the ID from the response

      // Make a GET request using the extracted ID
      return fetch(`https://your-api-url.com/get-endpoint/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });
    })
    .then(response => response.json())
    .then(data => {
      // Display the result of the GET request
      setGetResponse(JSON.stringify(data, null, 2));
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>API Frontend</h1>

      <label htmlFor="requestData">Enter JSON Data:</label>
      <textarea
        id="requestData"
        rows="4"
        cols="50"
        value={requestData}
        onChange={(e) => setRequestData(e.target.value)}
      ></textarea>
      <br />
      <button onClick={sendPostRequest}>Send POST Request</button>

      <hr />

      <h2>GET Request Result:</h2>
      <pre>{getResponse}</pre>
    </div>
  );
};

export default ApiFrontend;
