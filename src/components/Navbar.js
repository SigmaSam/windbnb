import Guests from './Guests';
import Locations from './Locations';

export default function Navbar({locations,handleLocation, guests, handleGuest}) {
    return(
        <nav className="navbar">
            <ul className="navbar--logo">
                <span class="material-icons">&#xE87C;</span>
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
                <button onClick={handleLocation} className="navbar--search--button"><span class="material-symbols-outlined">
search
</span></button>
            </ul>
        </nav>
    )
}