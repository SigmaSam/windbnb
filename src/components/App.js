import React, {useState,useEffect} from 'react'
import '../styles/App.css';
import locData from '../assets/locations.json';
import Navbar from './Navbar';
import Rooms from './Rooms';

function App() {
  /*State definition Area*/
  const [locations, setLocations] = useState("Buenos Aires, Argentina");
  const [guests, setGuests] = useState({
    adult: 0,
    children: 0
  });

  /*Function definition Area*/
  const handleGuests = (e) => {
    e.preventDefault();
    let id = e.target.value;
    let ope = e.target.name;
    ope === 'add'
    ? setGuests({...guests, [id]: guests[id] + 1}) 
    : setGuests( guests[id] !== 0 ? {...guests, [id]: guests[id] - 1} : guests)
  }
  
  const pickLocation = (e) => { 
    e.preventDefault();
    let location = document.getElementById("place").value
    setLocations(location);
  }
   

  let random = Math.floor(Math.random() * (5 + 1)) + 1;
  return (
    <div className="App">
      <Navbar
        locations={locData}
        guests={guests}
        handleGuest={handleGuests}
        handleLocation={pickLocation}
      />
      <h1 className="title">{locations ? `Rooms in ${locations}` : null}</h1>
      <section className="rooms">
      
          {Array.from({ length: random }).map((_, index) => (
            <Rooms key={index} />
          ))}
      </section>
    </div>
  );
}

export default App;
