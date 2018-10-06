# Node.JS + React + GraphQL Movie App
:neckbeard:   [Live demo React client](http://graphql-movieapp.surge.sh/)

:sunglasses:  [GraphiQL Interface](http://54.86.4.87:5000/graphql)

# Installation


## 1- Node.JS Server

Clone this repo and go to server folder.

```ruby 
cd server
npm install
```

### Enviroment variables
Create a file named ".env" in the root directory and fill its contents as follows.

```ruby
MONGODB_CONNECTION_STRING = mongodb://<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>
```


### Run the app
```ruby
npm start // for locally
```

and go to [localhost:5000/graphql](http://localhost:5000/graphql)



## 2- React Client

Clone this repo and go to client folder.
```ruby 
cd client
npm install
```

### Run the app
```ruby 
npm start
```

and go to [localhost:3000](http://localhost:3000/)
