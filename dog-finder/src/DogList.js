import { Link } from "react-router-dom";
import './DogList.css'

function DogList({dogs}) {
  return (
    <div>
      <h1>All Our Dogs</h1>
      <table className="DogList-table">
        <tbody>
          <tr>
            {dogs.map((dog, ind) => (
              <td key={ind}>
                <div className="DogList-container">
                  <img className="DogList-img" src={dog.src} alt={dog.name}></img>
                  <h3><Link className="DogList-link" to={`dogs/${dog.name}`}> <b>{dog.name}</b></Link></h3>                  
                </div>
              </td>
              ))}        
          </tr>            
        </tbody>
      </table>
    </div>
  );
}

export default DogList;
