import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Filter by contact <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
