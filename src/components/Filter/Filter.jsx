import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <label>
    Filter by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
