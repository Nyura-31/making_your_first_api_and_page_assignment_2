// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

const statusDescriptions = {
  200: 'OK - The request was successful.',
  201: 'Created - The request was successful, and a new resource was created.',
  400: 'Bad Request - The request was invalid or cannot be served.',
  401: 'Unauthorized - Authentication is required and has failed or has not yet been provided.',
  404: 'Not Found - The requested resource could not be found.',
  500: 'Internal Server Error - A generic server error occurred.',
  // Add more status codes as needed
};

// GET endpoint
app.get('/status-info', (req, res) => {
  const code = req.query.code; // Extract the 'code' query parameter
  if (statusDescriptions[code]) {
      res.status(200).json({
          code: parseInt(code),
          description: statusDescriptions[code]
      });
  } else {
      res.status(400).json({
          error: 'Invalid status code. Please provide a valid HTTP status code.'
      });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
