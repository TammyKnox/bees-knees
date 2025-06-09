import { useState, useEffect } from 'react';
import BakeryCard from './BakeryCard';
import BakeryFilter from './BakeryFilter';
import '../assets/Bakery.css';

function BakeryLocator() {
  const [bakeries, setBakeries] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/bakeriesData.json`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then(data => setBakeries(data))
      .catch(error => console.error('Error loading bakeries:', error));
  }, []);

  const filteredBakeries = selectedTag === '' ? bakeries : bakeries.filter(bakery => bakery.tags.includes(selectedTag));

  return (
    <div className="bakery-container">
      <h2 className="bakery-heading">Local Bakeries & Cafés</h2>
      <BakeryFilter selectedTag={selectedTag} onChange={setSelectedTag} />

      <div className="bakery-list">
        {filteredBakeries.map(bakery => (
            <BakeryCard key={bakery.id} bakery={bakery} />
        ))}
      </div>
    </div>
  );

}

export default BakeryLocator;
