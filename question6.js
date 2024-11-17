/** Please write the sample code to debounce handleOnChange (Do not use any 3th party libs other than react) **/

import React, { useState, useRef } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const timeoutRef = useRef(null);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("AJAX call with query:", value);
    }, 500);
  };

  return (
    <div>
      <input type="search" name="p" value={query} onChange={handleOnChange} />
    </div>
  );
};

export default SearchBox;
