import React, { useState } from 'react'

const Tour = ({tour, removeTour}) => {
 const { id, image, info, price, name } = tour;

 const [readMore, setReadMore]=useState(false);

 
    return (
< article className='single-tour'>
        <img src={image} alt={name} className='img'/>
         <span className='tour-price'>${price}</span>
        <div className='tour-info'>
            <h5>{name}</h5>
            <p>{readMore ? info : `${info.substring(0, 200)}...`}
            <button className='info-btn' onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Show Less' : 'Read More'}
            </button>
            </p>
          <button className='delete-btn btn btn-block' onClick={() => {removeTour(id)}}>Not Interested</button>      
       

        </div>
    </article>
  )
}

export default Tour
