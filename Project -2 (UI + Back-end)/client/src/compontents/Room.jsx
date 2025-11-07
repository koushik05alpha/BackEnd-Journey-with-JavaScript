import React from 'react'

function Room({room}) {
  return (
    <div className="row">
        <div className="cal-md-4">
            <img src={room.imageUrls[0]} className="smallImg" />
        </div>
        <div className="cal-md-7">
            <h1>{room.name}</h1>
            <p>Max Count : {room.maxcount}</p>
            <p>Rent Per Day : {room.rentperday}</p>
            <p>Type : {room.type}</p>
            <p>Phone Number : {room.phonenumber}</p>
        </div>
    </div>
  )
}

export default Room