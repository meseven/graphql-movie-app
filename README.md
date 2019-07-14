# Node.JS + React + GraphQL Movie App
:neckbeard:   [Live demo React client](http://graphql-movieapp.surge.sh/)

:sunglasses:  [GraphiQL Interface](http://206.189.182.169:5000/graphql)

# Installation


## 1- Node.JS Server

Clone this repo and go to server folder.

```
$ cd server
$ npm install
```

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.

```
MONGODB_CONNECTION_STRING = mongodb://<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>
```


### Run the app
```
$ npm start // for locally
```

and go to [localhost:5000/graphql](http://localhost:5000/graphql)



## 2- React Client

Clone this repo and go to client folder.
```
$ cd client
$ npm install
```

### Run the app
```
$ npm start
```

and go to [localhost:3000](http://localhost:3000/)
