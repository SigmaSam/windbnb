import React from 'react'

export default function Rooms({image}) {
    /*Constants Area*/
    const titles = ['Stylist apartment in center of the city', 'Cozy, peaceful and private room with...', 'Mordern House in a remote area', 'Stylist room in design district ' , 'Modern apartment close to nature', 'House in a remote area' ]
    const descriptions = ['Entire apartment . 2 beds', 'Private room','Entire house','Private room','Entire apartment . 3 beds', 'Entire apartment . 5 beds' ]
    const roomTitles = titles[Math.floor(Math.random()*titles.length)]
    const roomDescription = descriptions[Math.floor(Math.random()*descriptions.length)]
    const ratings = ((Math.random() * 1) + 4).toFixed(2)

    return (
      <div className="rooms--container">
        <img 
            src={image} className="rooms--container--img" 
            alt="room"
        />
        <div className="rooms--info">
            <p className="rooms--info--host">SUPER HOST</p>
            <p className="rooms--info--details">{roomDescription}</p>
            <p className="rooms--info--ratings">
                <span className="material-symbols-outlined">
                    star
                </span>
                {ratings}
            </p>
        </div>
        <h3 className="rooms--descriptions">{roomTitles}</h3>
      
      </div>
    )
}
