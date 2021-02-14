# Majko Ponist Hana Quiz


## Backend
### Python Flask REST API
Flask RESTful API. Flask, flask_mail, flask_cors.

#### API pages
##### Questions
Get method for getting random questions to FE for user quiz. 7 questions from each difficulty, 3 difficulties.

Post method for validating questions from user, when completed quiz. Return correct answers and score.

##### Prizes
Get method for displaying prizes, when user completes quiz, all prizes based on score

Post method, when user chooses a prize and adds information - sending email and saving to database

Put for creating prizes.
Patch for updating prizes.
Delete for deleting prizes

##### Users
Get method just for getting all users and displaying. NOT IN USE

Post method for creating new users and checking if user already exists

##### Validate admin
Post method for validating admin credentials

##### Admin
Get method for getting all of the questions, prizes, users, user answers with prizes they've choosen. From database. To FE

Post method for creating questions, to database

Put method for updating question, to database

Delete method for deleting questions


### MySQL database
#### Questions
Table for questions. Question and all answers, difficulty and id

#### Prizes
table for prizes. Name, description, image name and special BOOLEAN for displaying only when 100 %

#### Answered
Table for all users with their results, scores and prizes

#### User
Table for users, without results


## Frontend
### ReactJS
React JS is communicating to API using axios and static API token
#### User section
Pages for users and quiz
#### Admin section
Pages only for administration of the web. Admin login required