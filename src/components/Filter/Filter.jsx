import '../Filter/Filter.css'

export function Filter({ filter, onChange }) {
  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      ></input>
    </label>
  );
}
