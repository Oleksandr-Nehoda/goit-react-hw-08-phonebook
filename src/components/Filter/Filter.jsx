export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <span>Find contacts by name</span>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
