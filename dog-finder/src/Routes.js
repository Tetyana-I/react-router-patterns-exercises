import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function Routes() {
  return (
    <Switch>
        <Route exact path="/dogs" >
            <DogList /> // what props will this need?
        </Route>
        <Route path="/dogs/:name" >
            <DogDetails /> // what props will this need?
        </Route>
        <Redirect to="/dogs" />
  </Switch>
  );
}

export default Routes;