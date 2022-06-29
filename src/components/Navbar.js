import React from "react";
import { Link } from "react-router-dom";

// Navbar element that will generate a 'navbar' at the top of the page.
const Navbar = () => {
  return (
    <nav>
      {/* A link to the 'Home' page */}
      <Link to="/">Home</Link>
      &nbsp;
      {/* A link to the 'Blogs' page */}
      <Link to="/Blogs">Blogs</Link>
    </nav>
  );
};

export default Navbar;
