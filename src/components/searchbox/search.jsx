import React from 'react';
import './search.style.css';

export const Search = ( {placeholder , handleChange})=>(
    <input
      className = "search"
      placeholder= {placeholder}
      type="search"
      style={{width: 250 + 'px'},{height: 50 + 'px'}}
      onChange={handleChange} />
);
