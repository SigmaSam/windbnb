import React from 'react'

export default function Options({focused,filteredLocations}) {

    const fStyleLocations = {
        display: "flex",
        gridColumnStart: "1",
        gridRowStart: "2",
    }
    
    return (
        <ul
            style={ !focused ? {display:"none"} : fStyleLocations}
            className="navbar--locations--list"
        >
            { filteredLocations.slice(0,4).map(city =>(
                <li key={city}
                    className="navbar--locations--item"
                >
                    <span class="material-symbols-outlined">location_on</span>
                    {city}
                </li>
            ))}
        </ul>
    )
}