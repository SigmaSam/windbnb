export default function Guests({guests, handleGuest}) {
    return (
        <div className="navbar--guests">
            {/*Display the amount of guests*/}
            <input type="text" value={guests.adult + guests.children + ` Guests`} />

            {/*Add Adults*/}
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
    )
 }