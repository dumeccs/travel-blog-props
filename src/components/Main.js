import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa/index.esm'
export default function Main(props) {
    console.log(props.imageUrl)
    return (
        <div>
            <main>
            
                <img src = {props.imageUrl} alt="mountain" />
                <div className='main--child2'>
                <div className='main--child3'>
                        <FaMapMarkerAlt className ="location--icon"/>
                        <span className='location--span'>{props.location}</span>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className='main--child4'>
                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}
                </p>

                </div>
                
            </div>
        
            </main>
   <hr/>
        </div>
       
    )
}
