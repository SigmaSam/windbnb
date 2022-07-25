import React from 'react';


export default function Locations({focused,handleFocus,count,bundle,searchQuery,setSearchQuery}) {
    /* List of 100 most popular cities */



    

    /*Conditional Styles*/
    const fStyleInputs = {
        "width": "100%"
    }

    const fStyleGuest = {
        width: "100%",
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
            {/*Button to submit*/}
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
        </form>
    )
 }
