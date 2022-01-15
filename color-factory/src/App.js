import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import ColorsList from './ColorsList';
import ColorPage from './ColorPage';
import NewColorAddForm from './NewColorAddForm';
import { useRef } from 'react';

function App() {
  const colorsArray = useRef(['pink', 'coral', 'wheat']);
  
  function addColor(color) {
    colorsArray.current.splice(0,0,color);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/colors">
            <ColorsList colors={colorsArray.current}/>
          </Route>
          <Route exact path="/colors/new">
            <NewColorAddForm addColor={addColor}/>
          </Route>          
          <Route exact path="/colors/:color">
            <ColorPage colors = {colorsArray.current}/>
          </Route>
          <Redirect to='/colors' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
