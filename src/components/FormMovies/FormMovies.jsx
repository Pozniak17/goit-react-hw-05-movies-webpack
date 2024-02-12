export const FormMovies = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter film"
        value={value}
        onChange={onChange}
      />

      <button type="submit">search</button>
    </form>
  );
};
