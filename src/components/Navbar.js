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
        e.preventDefault();
        handleLocation(e);
        handleGuest(e);
    }

    /* Conditional Styles */
    const fStyleNavbar = {
        gridTemplateRows: "20% 80%",
    }

    const fStyleSearch = {
        gridColumn: "span 2",
        height: "5rem"
    }

    const fStyleGuest = {
        width: "43vh",
    }
    
    const fStyleSButton = {
        color: "white",
        background:"#EB5757E5",
        display: "flex",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:"1rem",
    }

    const fStyleSMagnifying = {
        color:"white",
        fontWeight:"800"     
    }

    return(
        <nav 
            className="navbar"
            style={ !focused ? {"height":"6rem"} : fStyleNavbar }
        >
            <ul className="navbar--logo"
                style={ !focused ? null : {display:"none"} }
            >
                <span className="material-icons" style={ !focused ? null : {display:"none"} }>&#xE87C;</span>
                <h1>Windbnb</h1>
            </ul>
            <ul className="navbar--search"
                style={ !focused ? null : fStyleSearch }
            >
                <Locations 
                    locations={locations}
                    handleLocation={handleLocation}
                    focused={focused}
                />
                <div className="navbar--guests">
                    <input 
                        onClick={handleFocus}
                        style={ !focused ? null : fStyleGuest }
                        defaultValue={
                            (count.adults + count.children === 0)
                            ? "" 
                            : count.adults + count.children + ` Guests`
                        }
                        placeholder="Guests"
                        className="navbar--guests--input"
                    />
                </div>
                <button
                    style={ !focused ? null : fStyleSButton }
                    onClick={bundle} 
                    className="navbar--search--button"
                >
                    <span className="material-symbols-outlined" style={ !focused ? null:  fStyleSMagnifying}>
                        search
                    </span>
                    {!focused ? null : "Search"}
                </button>
            </ul>
            <Guests 
                    count={count}
                    handleCount={handleCount}
                    focused={focused}
            />
        </nav>       
    
    )
}