# Part 2: React Router Color Factory

In this exercise React Router is used to build an app that lets you view colors and add new colors.

User Stories:
* As a user, I can go to ***/colors***  to see a list of all available colors;
* As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory (route ***/colors/:color***) For example, clicking on 'pink' will take me to */colors/pink*.
* As a user, I can click on a button to show a form that will let me add a new color.  (The route here is ***/colors/new***) 
* As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
* As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.
* As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page (route ***/colors***).

### Technologies Used:
* React.js, CSS
* This project was bootstrapped with Create React App.


### Local Deployment
**Requirements:** npm

1. Create an application directory

2. Clone Repository

3. Switch to the application directory

4. Create dependencies

    `npm install`

5. Run the script

    `npm start`

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.