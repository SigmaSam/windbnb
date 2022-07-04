export default function Locations({locations}) {
    /* List of 100 most popular cities */
    const cities = locations.map(location => {
        return <option key={location} value={location} />      
    })

    return (
        <div className="navbar--locations">
            {/*Search box Input with places.*/}
            <input id="place" list="places" placeholder="Where do you want to go?" className="navbar--locations--input"/>
            <datalist id="places">
                {cities}               
            </datalist>
        </div>
    )
 }
