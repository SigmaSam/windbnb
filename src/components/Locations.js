import React, {useState} from 'react';


export default function Locations({locations,focused,handleFocus,count,bundle}) {
    /* List of 100 most popular cities */

    /* Functions */
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
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
    

    /*Conditional Styles*/
    const fStyleInputs = {
        "width": "50vh"
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

    const fStyleSearch = {
        gridColumn: "span 2",
        height: "5rem"
    }
   
    return (
        <form className="navbar--search"
                onSubmit={bundle} 
                style={ !focused ? null : fStyleSearch }
        >
            <div className="navbar--locations">
                {/*Search box Input with places.*/}
                <input
                    style={ !focused ? null : fStyleInputs }
                    onClick={handleFocus}
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="place" 
                    list="places" 
                    placeholder="Where do you want to go?" 
                    className="navbar--locations--input"
                />
                
                {/*<datalist id="places">
                    {cities}               
                </datalist>*/}
                <div className="navbar--guests">
                     {/*Shows how many guests there are.*/}
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
                    className="navbar--search--button"
                >
                    {/*Submits the form*/}
                    <span className="material-symbols-outlined" style={ !focused ? null:  fStyleSMagnifying}>
                        search
                    </span>
                    {!focused ? null : "Search"}
                </button>
            </div>
            <div className="results-container">
            <ul>
                { filteredLocations.slice(0,4).map(city =>(
                    <li key={city}>{city}</li>
                ))}
            </ul>
            </div>
        </form>
    )
 }
