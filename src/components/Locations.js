export default function Locations({locations,handleLocation}) {
    /* List of 100 most popular cities */
    const cities = locations.map(location => {
        return <option key={location} value={location} />      
    })

    return (
        <div className="navbar--locations">
            {/*Search box Input with places.*/}
            <input onChange={handleLocation} id="place" list="places" />
            <datalist id="places">
                {cities}               
            </datalist>
        </div>
    )
 }
