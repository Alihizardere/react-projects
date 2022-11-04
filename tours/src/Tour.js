import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, SetReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => SetReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          {' '}
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
