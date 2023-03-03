import React, { useEffect } from 'react'

export default function Card() {
    const googleMaps = process.env.GOOGLE_API
    useEffect(() => {
       async function getMap(){
         let response = await fetch(`https://maps.googleapis.com/maps/api/js?key=${googleMaps}&libraries=places&callback=initMap`, {
             method: 'GET',    
            withCredentials: true,    
            crossorigin: true,    
            mode: 'no-cors',
         })
         console.log(response)
         
         
        }
        getMap()
}, [])

  return (
    <div>Card</div>
  )
}
