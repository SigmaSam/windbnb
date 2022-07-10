
export default function Guests({count, handleCount,focused}) {
  
    const fStyleSCounters = {
        display: "flex",
        gridColumnStart: "2",
    }
    
    return (
            <div className="navbar--guests--counters"
                style={ !focused ? {display:"none"} : fStyleSCounters }
            >
                {/*Add Adults*/}
                <div >
                    <h4>Adults</h4>
                    <p className="p-gray">Ages 13 or Above</p>
                    <div className="navbar--guests--counters--buttons">
                        <button className="minus--button" value="adults" name="minus" onClick={handleCount}>-</button>
                        <p>{count.adults}</p>
                        <button className="plus--button" value="adults" name="add" onClick={handleCount}>+</button>
                    </div>
                </div>
                {/*Add Children*/}
                <div >
                    <h4>Children</h4>
                    <p className="p-gray">Ages 2 - 12</p>
                    <div className="navbar--guests--counters--buttons">
                        <button className="minus--button" value="children" name="minus" onClick={handleCount}>-</button>
                        <p>{count.children}</p>
                        <button className="plus--button" value="children" name="add" onClick={handleCount}>+</button>
                    </div>
                </div>
            </div>
    )
 }