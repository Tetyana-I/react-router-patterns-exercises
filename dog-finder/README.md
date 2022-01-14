# Part 1: React Router Dog Finder

In this exercise the React Router is used to build an app that routes to different dogs and displays information on that dog when you’re at that route.

The routes:
* ***/dogs*** is the homepage and shows all dogs;
* ***/dogs/:name*** Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to */dogs/whiskey*.
* every other endpoint not listed redirect you to ***/dogs***.

Application Components:
* ***App*** - the main app component that renders ***Nav*** and ***Switch*** with ***Route*** declarations; 
* ***DogList*** - takes all the dog info from the props of ***App***;
* ***DogDetails*** - shows all of the info about a single dog;
* ***Nav*** - component with the dogs’ names passed as props.

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