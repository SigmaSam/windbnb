import React,{useState}from 'react';
import Locations from './Locations';
import Guests from './Guests';

export default function Navbar({locations,handleLocation, guests, handleGuest}) {
   
    /*Create State*/
    const [focused, setFocused] = useState(false);
    
    const [count, setCount] = useState({
        adults: 0,
        children:0
    })
    /*Function definition Area*/
    const handleFocus = (e) => {
        setFocused(!focused);    
    }

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
            />
            <Guests 
                count={count}
                handleCount={handleCount}
                focused={focused}
            />
        </nav>       
    
    )
}