import '../assets/Bakery.css';

function BakeryCard({bakery}) {
  return (

    //Creates the way the info is displayed for each location.
    <div className="bakery-card">
      <img src={bakery.image} alt={bakery.name} />
      <div className="bakery-content">
        <div className="bakery-title">{bakery.name}</div>
        <div className="bakery-tags">Type: {bakery.tags.join(', ')}</div>
        <div className="bakery-location">{bakery.location}</div>
        <div className="bakery-buttons">
          <a
            href={bakery.url}
            target="_blank"
            className="visit-btn"
          >
            Visit Website
          </a>
          <a
            href={bakery.map}
            target="_blank"
            className="map-btn"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default BakeryCard;
