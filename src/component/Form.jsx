import "./Form.css";

const Form = ({ handleChange, value, getRecipe }) => {
  return (
    <form onSubmit={getRecipe}>
      <input onChange={handleChange} value={value} />
      <button>Search</button>
    </form>
  );
};
export default Form;
