
# EIMMO

The aim of the assignment was to create a functioning real estate site. 
You have 4 sections in the site. Admin section, Real estate agent section, 
Logged in user section & also visitor section.

It is intended that Admins & Real estate agents can post or remove properties 
for sale or rent. Logged in users can then send messages if they are interested. 
Visitors can simply view the details of all properties.

We have to make this assignment for the subject Mobile Development. It is our 
final assignment


## Authors

- [@AndriesDB - Github](https://github.com/Andries-DB)
- [@andriesdebaere](https://www.instagram.com/andriesdebaere/?hl=nl)

## Cloning

Install my-project with npm

```bash
  npm install https://github.com/gdmgent-2122-mobdev2/eindopdracht-Andries-DB.git
  cd eindopdracht-Andries-DB
```
    
## Installation

```bash
  0: Visual Studio Code + extensions
  1: Node & NPM
  2: React
  3: CSS
  4: Heroku (Monorepo)
  5: ESLint (AirBnB)
  6: Typescript
  7: PostgreSQL & Datagrip
  8: Insomnia
  9: A LOT of dependencies
```
    
## Feature Overview

#### Prototype via Adobe XD
Before I started with coding the app, I've made an Adobe XD FIle. 
It is a visual way to design how the app needs to look. You don't program anything, 
you just design the look of the page. It's like making the User Experience

#### Database Scheme
After designing the look of the app, I started working on the database scheme. 
Of course, it wasn't quite right from the start, but as I got further into coding, 
the schema began to take shape.

The columns I made are

```bash
Admin (ALL users)
Immo
Messages
Favorites
Agencies
```

#### The app
You can visit the site in 4 forms. 
Either you are a visitor, logged in user, Admin or an Agencie.
A visitor can only see the search page & details of the houses. He/she can't see some
specific details of the house. A logged in user can see everything of the details, he/she
can add houses/appartments to the favorites & also can send messages to a specific agencie.
Real estate agencies can add new properties, delete properties or update them.
Admins can do the same as Real Estate agencies but also can delete, add or update Clients

    
## Deployment

I've deployed the app with Heroku, the link is:

```bash
  https://eimmo-andriesdb-app.herokuapp.com/
```


## Credentials

- Client
```bash
  Email: klant@klant.com
  Password: secret
```

- Real Estage Agent
```bash
  Email: immo@immo.com
  Password: secret
```

- Admin
```bash
  Email: admin@admin.com
  Password: secret
```
