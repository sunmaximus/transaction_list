# Descriptions:
This is a web site that utilize react, react-router, redux, and simple JWT authentication.

## Project Structure

```
.
├── auth                     # Directory for all authentication related 
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
│   └── index.html           # Main HTML page container for app
├── src                      # Application source code
│   └── index.js             # Application main file for React and Redux configurations/integrations
│   ├── App.js               # Application bootstrap and rendering Routes/Footer
│   └── Layouts              # Components that dictate and encapsulated major page structure 
│   │   ├── index.js         # Main file of layout that will automatically exported
│   │   ├── Components       # Layout encapsulated Components
│   │   ├── Containers       # Layout encapsulated Containers
│   │   ├── module           # Layout encapsulated Redux actions, constants, and reducers
│   │   └── styles           # Style directory for Layout
│   ├── share                # Directory of Global Reusable Components
|   |   └── components       # Directories of resuable share Component 
│   ├── utils                # Global Reusable utility functions
│   ├── Routes.js            # Main route definitions
│   ├── store                # Redux-specific pieces
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
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

## License
[MIT](https://tldrlegal.com/license/mit-license)
