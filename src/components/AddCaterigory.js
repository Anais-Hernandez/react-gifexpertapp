import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCaterigory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación para que se escriban al menos 2 caracteres
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar Gifs"
      />
    </form>
  );
};

AddCaterigory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
