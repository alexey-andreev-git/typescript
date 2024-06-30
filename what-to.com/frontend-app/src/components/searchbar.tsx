import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";

interface SearchbarProps {
    // Add any props you need for the Searchbar component
}

const Searchbar: React.FC<SearchbarProps> = () => {
  return (
    <div className="relative mx-3">
      <HiOutlineSearch className="position-absolute mt-3 top-1/2 mx-1 -translate-y-1/2" />
      <input type="text" 
      className="pl-8 px-4 py-2 border rounded"
      placeholder="Search..." />
    </div>
  );
};

export default Searchbar;