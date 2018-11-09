const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json());
const expiresIn = '1h';

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});



app.post('/api/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    console.log(req.token)
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
  console.log(user)
  const regularUser = {
    firstName: 'Tom',
    lastName: 'Hank',
    authenticationLevel: 'user',
    birthDay: 'July 9, 1956',
    descriptions: 'The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.'
  }
  
  const adminUser = {
    firstName: 'Tom',
    lastName: 'Hardy',
    authenticationLevel: 'admin',
    birthDay: 'September 15, 1977',
    users: [{ name: 'Venom' }, { name: 'Carnage' }, { name: 'Brody' }, { name: 'Peter Parker' }]
  }

  if (user.username === 'admin') {
    user = { ...user, ...adminUser }
  } else {
    user = { ...user, ...regularUser }
  }

  console.log(user)
  jwt.sign(user, 'secretkey', { expiresIn }, (err, token) => {
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