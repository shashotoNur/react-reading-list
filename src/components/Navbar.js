import React, { useContext } from 'react';

import { BookContext } from '../contexts/BookContext';

const Navbar = () =>
  {

    const { books } = useContext(BookContext);

    return (
      <div className="navbar">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} width="10%" height="10%" alt="Logo" />
        <h1>Reading List</h1>
        <p>Currently you have {books.length} books to get through...</p>
      </div>
    );

  };
 
export default Navbar;