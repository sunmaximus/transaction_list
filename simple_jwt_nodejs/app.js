const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

const data = require('./data.json');

const app = express();

app.use(cors())
app.use(bodyParser.json());
const expiresIn = '1h';

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

// app.get('/api/get/data',(req, res) => {
//   let transactions = data.transactions
//   console.log(data);

//   res.json({
//     transactions
//   });
// });

app.get('/api/get/data', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    console.log(authData)
    if(err) {
      console.log(err)
      res.sendStatus(403);
    } else {
      let transactions = data.transactions
      res.json({
        transactions
      });
    }
  });
});

app.post('/api/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    console.log(authData)
    if(err) {
      console.log(err)
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  let user = req.body;
  jwt.sign(user, 'secretkey', { expiresIn }, (err, token) => {
    console.log(user, token)
    res.json({
      token
    });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(5000, () => console.log('Server started on port 5000'));