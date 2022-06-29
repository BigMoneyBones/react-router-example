import React from "react";
// importing and calling the <Navbar /> component generates the navbar on the 'Home' page
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Place <Navbar /> above the h1 element to render the navbar at the top of the page. */}
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
