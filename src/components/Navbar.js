import Guests from './Guests';
import Locations from './Locations';

export default function Navbar({locations,handleLocation, guests, handleGuest}) {
    return(
        <nav className="navbar">
            <ul>
            <svg>Logo</svg>
            <h1>Airbnb</h1>
            </ul>
            <ul className="navbar--search">
            <Locations 
                locations={locations}
                handleLocation={handleLocation}
            />
            <Guests
                guests={guests}
                handleGuest={handleGuest}
            />
            <button onClick={setLocation} className="navbar--search--button">Search</button>
            </ul>
        </nav>
    )
}