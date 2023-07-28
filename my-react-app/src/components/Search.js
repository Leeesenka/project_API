import React from 'react';
import { FormControl } from 'react-bootstrap';


    const Search = ({ onChange }) => (
        <FormControl 
          type="search" 
          placeholder="Search" 
          className="me-2" 
          aria-label="Search"
          onChange={onChange}
        />
      );
      


export default Search;
