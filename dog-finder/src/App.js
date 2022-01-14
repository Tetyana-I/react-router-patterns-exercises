import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from './images/whiskey.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';
import duke from './images/duke.jpg';

function App() {
  const dogs=App.defaultProps.dogs;

  // function get a dog name and returns an object with dog details
  function getDogInfo(dogName) {
    const result = dogs.filter(dog => dog.name === dogName);
    if (result.length === 0) return null 
    else  return result[0]; 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => (dog.name))} />
        <Switch>
          <Route exact path="/dogs/:name" >
              <DogDetails getDogInfo={getDogInfo} /> 
          </Route>
          <Route exact path="/dogs" >
              <DogList dogs={dogs} /> 
          </Route>
          <Redirect to="/dogs" />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
