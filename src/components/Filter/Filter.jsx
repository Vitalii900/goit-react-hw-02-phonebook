export function Filter({filter, onChange}) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      ></input>
    </label>
  );
}
