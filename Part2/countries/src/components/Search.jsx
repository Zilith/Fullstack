const Search = ({ value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log("handleChange", e.target.value);
      };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      Find countries <input value={value} onChange={handleChange} />
    </form>
  );
};

export default Search;
