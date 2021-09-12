import { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
    <div className="py-3">
      <div className="relative w-full">
        <input
          className="
          outline-none w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500
          focus:ring-2 focus:ring-blue-200 text-base text-gray-700 
          py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Search..."
          value={inputValue}
          type="text"
          name="searchString"
          onChange={handleInputChange}
        />
        {inputValue && (
          <button
            className="absolute h-full px-2 top-0 right-0"
            type="button"
            onClick={handleClearClick}
          >
            <span role="img" aria-label="clear">
              ✖️
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
