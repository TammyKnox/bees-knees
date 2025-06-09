import '../assets/Bakery.css';


//Handles the filter for the bakery locations.
function BakeryFilter({ selectedTag, onChange }) {
  return (
    <div className="filter-form">
      <select
        className="filter-select"
        value={selectedTag}
        onChange={(evt) => onChange(evt.target.value)}
      >
        <option value="">All</option>
        <option value="bakery">Bakery</option>
        <option value="cafe">Cafe</option>
      </select>
    </div>
  );
}

export default BakeryFilter;
