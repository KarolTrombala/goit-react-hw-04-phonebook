import React from 'react'
import PropTypes from 'prop-types';

export const Filter = ({ filteredList }) => {
  const handleInputChange = (e) => {
    filteredList(e.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleInputChange} />
    </>
  );
};

Filter.propTypes = {
  ilteredList: PropTypes.func,
};
