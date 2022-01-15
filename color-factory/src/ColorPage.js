import { useParams, useHistory } from "react-router-dom";


function ColorPage({ colors }) {
    const { color } = useParams();
    const history = useHistory();
    
    // if color is not in colors returns on homepage
    if (colors.indexOf(color) === -1) {
        history.push('/colors');
        return null;
    }

    const colorPageStyle = {
        backgroundColor: color,
        height: '100vh'
    };

    return (
        <div>
            <div style={colorPageStyle}>
            </div>
        </div>
    )
}

export default ColorPage;