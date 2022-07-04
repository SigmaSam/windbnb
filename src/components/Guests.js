import React,{useState}from 'react'

export default function Guests({guests, handleGuest}) {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(!focused);    
    }

    return (
        <div className="navbar--guests">
            {/*Display the amount of guests*/}
            <input 
                onClick={handleFocus}
                value={
                    (guests.adult + guests.children === 0)
                    ? "" 
                    : guests.adult + guests.children + ` Guests`
                }
                placeholder="Guests"
                className="navbar--guests--input"
            />

            {/*Add Adults*/}
            <div style={ !focused ? {display:"none"} : {display:"block"}}>
                <p>Adults</p>
                <p>Ages 13 or Above</p>
                <button value="adult" name="minus" onClick={handleGuest}>-</button>
                <p>{guests.adult}</p>
                <button value="adult" name="add" onClick={handleGuest}>+</button>

                {/*Add Children*/}
                <p>Children</p>
                <p>Ages 2 - 12</p>
                <button value="children" name="minus" onClick={handleGuest}>-</button>
                <p>{guests.children}</p>
                <button value="children" name="add" onClick={handleGuest}>+</button>
            </div>
        </div>
    )
 }