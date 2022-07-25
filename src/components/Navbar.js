import React,{useState}from 'react';
import Locations from './Locations';
import Guests from './Guests';
import Options from './Options';

export default function Navbar({locations,handleLocation, handleGuest}) {
   
    /*Create States*/
    const [focused, setFocused] = useState(false);
    
    const [count, setCount] = useState({
        adults: 0,
        children:0
    })

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    /*Function definition Area*/
    const handleFocus = () => {
        setFocused(true);    
    }  
    
    const filterLocations = (locations, query) => {
        if (!query) {
            return locations;
        }
    
        return locations.filter((city) => {
            const cityName = city;
            return cityName.includes(query);
        });
    };

    const filteredLocations = filterLocations(locations,searchQuery);

    const handleCount = (e) => {
        e.preventDefault();
        let id = e.target.value;
        let ope = e.target.name;
        ope === 'add'
        ? setCount({...count, [id]: count[id] + 1}) 
        : setCount( count[id] !== 0 ? {...count, [id]: count[id] - 1} : count)
      }
    
    const bundle = (e) =>{
        e.preventDefault(e);
        focused === true ? setFocused(false) : setFocused(true);
        handleLocation(e);
        handleGuest(e);
    }

    /* Conditional Styles */
    const fStyleNavbar = {
        gridTemplateRows: "20% 80%",
    }

    return(
        <nav 
            className="navbar"
            style={ !focused ? {"height":"6rem"} : fStyleNavbar }
        >
            <div className="navbar--logo"
                style={ !focused ? null : {display:"none"} }
            >
                <span className="material-icons" style={ !focused ? null : {display:"none"} }>&#xE87C;</span>
                <h1>Windbnb</h1>
            </div>
            
            <Locations 
                locations={locations}
                handleLocation={handleLocation}
                focused={focused}
                handleFocus={handleFocus}
                count={count}
                bundle={bundle}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <Guests 
                count={count}
                handleCount={handleCount}
                focused={focused}
            />
            <Options 
                focused={focused}
                filteredLocations={filteredLocations}
            />
        </nav>       
    
    )
}