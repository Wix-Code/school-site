import React from 'react'
//import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
//import "leaflet/dist/leaflet.css"
import './contat.css'

const Map = () => {
  //const position = [51.505, -0.09]
  return(
    <div>
      <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127103.29309541316!2d7.157199046458648!3d5.420326659719988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042f23c4043d1e1%3A0x53f612beca3d6930!2sAboh-Mbaise%2C%20Imo!5e0!3m2!1sen!2sng!4v1720187192116!5m2!1sen!2sng" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map