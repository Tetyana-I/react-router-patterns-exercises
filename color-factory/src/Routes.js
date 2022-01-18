import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorPage from './ColorPage';
import NewColorAddForm from './NewColorAddForm';
import { useRef } from 'react';


function Routes() {
    const INITIAL_COLORS = [{teal: "#008080"}, {pink: "#FDD7E4"}];
    const colorsObject = useRef(INITIAL_COLORS);
    const history = useHistory();
    
    function addColor(color) {
        colorsObject.current.splice(0,0,color);
    }

    function renderCurrentColor(props) {
        const { color } = props.match.params;
        const colorToRender = colorsObject.current.filter(currColor => Object.keys(currColor)[0] === color);
        if (!colorToRender[0]) {
            history.push("/colors");
            return null
        }
        return <ColorPage hex={Object.values(colorToRender[0])[0]} color={Object.keys(colorToRender[0])[0]} />;
    };

    return (
        <Switch>
            <Route exact path="/colors">
                <ColorsList colors={colorsObject.current}/>
            </Route>
            <Route exact path="/colors/new">
                <NewColorAddForm addColor={addColor}/>
            </Route>          
            <Route exact path="/colors/:color" render={renderCurrentColor} />           
            <Redirect to='/colors' />
        </Switch>        
)
}

export default Routes;


