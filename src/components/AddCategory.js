import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setinputValue] = useState('');
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories(cats => [inputValue,...cats]);
      setinputValue('');
    }
    else{
      alert("Debe ingresar una categoria con más de 2 categorias");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange = {handleInputChange}
        placeholder='Ingrese texto a buscar'
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired
}