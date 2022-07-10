export default function Locations({locations,focused}) {
    /* List of 100 most popular cities */
    const cities = locations.map(location => {
        return <option 
                    className="locations--option"
                    key={location} 
                    value={location} 
                >
                    {location}
                </option>      
    })
    const fStyleInputs = {
        "width": "50vh"
    }
   
    return (
        <div className="navbar--locations">
            {/*Search box Input with places.*/}
            <input
                style={ !focused ? null : fStyleInputs }
                id="place" 
                list="places" 
                placeholder="Where do you want to go?" 
                className="navbar--locations--input"
            />
            <datalist id="places">
                {cities}               
            </datalist>
        </div>
    )
 }
