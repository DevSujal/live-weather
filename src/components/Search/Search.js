import "./Search.css";

const Search = ({ myRef, setCity, city }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={city}
        ref={myRef}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for cities"
      />
    </div>
  );
};

export default Search;
