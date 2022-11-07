import React, {useState } from 'react';

const Tour = ({id, image, info, name, price, tours, setTours}) => {
  const [readMore, setReadMore] = useState(false); 

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore? info : `${info.substring(0,200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore? 'show less' : 'show more'}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
