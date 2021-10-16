import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategoties }) => {
  const [inputValue, setInputValue] = useState("");

  // Handles InputChange;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // Handle SubmitUser

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategoties((CameFromParent) => [inputValue, ...CameFromParent]);
      setInputValue("");
    }
  };
  //--------------------Return values

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search....."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default AddCategory;
// Need to learn this here set is my props sent from It's parent GifExpertApp
AddCategory.propTypes = {
  setCategoties: PropTypes.func.isRequired,
};
