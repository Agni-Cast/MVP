# MVP: Vacation Bucketlist

## Table of Contents
### [I. Description](#Description)
### [II. Project Overview](#Project-Overview)
### [III. Tech Stack](#Tech-Stack)
### [IV. Demos](#Demos)

### I. Description
  Vacation Bucketlist is an app that helps you plan your next vacation. Users can search for any city in the world to view its top tourist attractions, choose the ones they are interested in visiting and save them to their account.

### II. Project Overview
#### User Authentication:
  New users are required to setup an account by creating a unique username and a password. If username already exists an error message will be displayed. Once an account is created the user's information is stored in a MongoDB database, the user can then logout and log back in. When the user is logged in the session is sotred in local storage using JWT. 
  
#### Homepage:
  The page is pre-populated with the main attractions in Rome, each card contains the name of the attraction, and image, and a 'Save' button, if the button is clicked the attraction card is saved to the users's account. The user can search for any city and its main attractions will render on the page.
  
#### My Trips page:
  Tha attraction cards previously saved by the user are displayed on this page. 
 
### III. Tech Stack
#### Fron End:
  JavaScript, ReactJS
#### Back End:
  NodeJS, Express, MongoDB, GooglePlaces API, Bcrypt, JWT
  
### IV. Demos
#### Signup/Login
<img src="https://recordit.co/R0fR2Rtcbr.gif" width="700">


