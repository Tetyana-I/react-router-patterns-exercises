import { Link } from "react-router-dom";
import './DogList.css'

function DogList({dogs}) {
  return (
    <div>
      <h1>Our Dogs</h1>
      <table className="DogList-table">
        <tbody>
          <tr>
            {dogs.map((dog, ind) => (
              <td key={ind}>
                <img className="DogList-img" src={dog.src} alt={dog.name}></img>
                <Link to={`dogs/${dog.name}`}> <b>{dog.name}</b>: {dog.age} years </Link>
              </td>
              ))}        
          </tr>            
        </tbody>
      </table>
    </div>
  );
}

export default DogList;
