import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function Routes({ dogs }) {
  // function get a dog name and returns an object with dog details
  function getDogInfo(dogName) {
    const result = dogs.filter(dog => dog.name === dogName);
    if (result.length === 0) return null 
    else  return result[0]; 
  }

  return (
    <Switch>
      <Route exact path="/dogs/:name" >
          <DogDetails getDogInfo={getDogInfo} /> 
      </Route>
      <Route exact path="/dogs" >
          <DogList dogs={dogs} /> 
      </Route>
      <Redirect to="/dogs" />
  </Switch> 
  );
}

export default Routes;