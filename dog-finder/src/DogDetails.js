import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ getDogDetails }) {
  const { name } = useParams();
  const [dog, setDog] = useState(null);

//   useEffect(function getDog() {
//     let dogDetails = getDogDetails();
//     dogDetails ? setDog(dogDetails) : null;
//   }, [dog]);

  return (
    <div>
      <h1>All about { name }: </h1>
    </div>
  );
}

export default DogDetails;