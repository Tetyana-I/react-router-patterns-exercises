import { useParams, useHistory, Link } from "react-router-dom";


function ColorPage({ color, hex }) {
    // const { hex } = useParams();
    // function renderCurrentColor(props) {
    //     const { color } = props.match.params;
    //     const hex = colors[color];
    //     return <Color {...props} hex={hex} color={color} />;
    //   };

    // const history = useHistory();
    
    // if (!hex) {
    //     history.push("/colors");
    //   }
    // if color is not in colors returns on homepage
    // if (colors.indexOf(color) === -1) {
    //     history.push('/colors');
    //     return null;
    // }


    const colorPageStyle = {
        backgroundColor: hex,
        height: '100vh',
        padding: '2em'
    };

    return (
        <div>
            <div style={colorPageStyle}>
                <h3>Here is your "{color}" color!</h3>
                <Link to="/colors">Go back</Link>
            </div>
        </div>
    )
}

export default ColorPage;