# Descriptions:
This is a web site display fictional financial transactions that utilizes react, react-router, redux, and simple JWT authentication.
## Project Structure

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
│   └── index.html           # Main HTML page container for app
├── src                      # Application source code
|   ├── auth                 # Directory for all authentication related 
│   ├── index.js             # Application main file for React and Redux configurations/integrations
│   ├── App.js               # Application bootstrap and rendering Routes/Footer
│   ├── Layouts              # Components that dictate and encapsulated major page structure 
│   │   ├── index.js         # Main file of layout that will automatically exported
│   │   ├── components       # Layout encapsulated Components
│   │   ├── module           # Layout encapsulated Redux actions, constants, and reducers
│   │   └── styles           # Style directory for Layout
│   ├── share                # Directory of Global Reusable Components
│   │   ├── module           # Shared module encapsulated Redux actions, constants, and reducers
|   |   └── components       # Directories of resuable share Component 
│   ├── utils                # Global Reusable utility functions
│   ├── Routes.js            # Main route definitions
│   └── store                # Redux-specific pieces
│       └── reducers.js      # Reducer registry and injection
└── test                     # Unit tests
    └── utils                # Mock redux store for unit testing thunk    
```

## How to run client

```bash
$ npm install
```
```bash
$ npm run start
```

## How to run backend(simple_jwt_nodejs) 

```bash
$ cd simple_jwt_nodejs

```

```bash
$ npm install
```

```bash
$ npm run start
```


## Login

```bash
username: admin

```

```bash
password: 1234567
```

## License
[MIT](https://tldrlegal.com/license/mit-license)
