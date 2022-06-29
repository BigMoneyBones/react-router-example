import React from "react";
// Importing and calling the <Navbar /> component generates the navbar on the 'Blogs' page
import Navbar from "../components/Navbar";

// An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.
// If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
import { Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      {/* Place <Navbar /> above the h1 element to render the navbar at the top of the page. */}
      <Navbar />
      <h1>
        Blogs
        {/* Since <Blogs /> is the parent component, in App.js if neither of the child paths are input in the URL, /blogs will render nothing, BUT this allows for child elements to be used. => if <Outlet />  is commented out, none of the paths will render. With <Outlet /> implemented, /blogs will render nothing but 'blogs' to the page, but allows for the childrens paths to be rendered. => '/blogs/all' , '/blogs/1' , '/blogs/2 ...etc*/}
        <Outlet />
      </h1>
    </div>
  );
};

export default Blogs;
