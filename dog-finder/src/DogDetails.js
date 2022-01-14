import { useParams, useHistory } from "react-router-dom";
import './DogDetails.css';

function DogDetails({getDogInfo}) {
    const { name } = useParams();
    const dog = getDogInfo(name);

    const history = useHistory();
    if (!dog) {
        history.push('/dogs/');
        return null};

  return (
        <div className="DogDetails-card">
            <img className="DogDetails-img" src={dog.src} alt={`${dog.name} photo`} />
            <div className="DogDetails-container">
                <h2>{dog.name} </h2>
                <ul>
                    <li>Age: {dog.age} years</li> 
                    {dog.facts.map((fact,ind) => <li key={ind}>{fact}</li>)}
                </ul>
            </div>
        </div>        
  );
}

export default DogDetails;
