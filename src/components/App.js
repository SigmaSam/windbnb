import React, {useState,useEffect} from 'react'
import '../styles/App.css';
import locData from '../assets/locations.json';
import Navbar from './Navbar'

function App() {
  /*State definition Area*/
  const [locations, setLocations] = useState("");
  const [guests, setGuests] = useState({
    adult: 1,
    children: 2
  });

  /*Function definition Area*/
  const countGuests = (e) => {
    e.preventDefault();
    let id = e.target.value;
    let ope = e.target.name;
    ope === 'add'
    ? setGuests({...guests, [id]: guests[id] + 1}) 
    : setGuests( guests[id] !== 0 ? {...guests, [id]: guests[id] - 1} : guests)
  }
  
  const pickLocation = (e) => { 
    e.preventDefault();
    let value = e.target.value;
    setLocations(value);
  }


  useEffect(() => {return console.log(locations)} , [locations]);
  
  return (
    <div className="App">
      <Navbar
        locations={locData}
        guests={guests}
        handleGuest={countGuests}
        handleLocation={pickLocation}
      />
    </div>
  );
}

export default App;
