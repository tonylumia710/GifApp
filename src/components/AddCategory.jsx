import { useState, memo } from "react";
import "../styles.css";

export const AddCategory = memo(({ addCategory, reset }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    addCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="formulario col-md-10 col-lg-6" onSubmit={handleSubmit}>
      <div className="form-group row">
        <input
          className="form-control col-md-10"
          type="text"
          placeholder="Search Gif"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-info" id="submit">
          Search
        </button>

      <button onClick={reset} className="btn btn-outline-warning mt-10" id="reset">
        Reset
      </button>
      </div>
    </form>
  );
});
