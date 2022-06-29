import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import { blogPosts } from "./utils/sampleBlogs";
import AllBlogs from "./components/AllBlogs";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Route to 'Home' calling the <Home /> component */}
        <Route path="/" element={<Home />}></Route>
        {/* Route to 'Blogs' calling the <Blogs /> component*/}
        <Route path="/blogs" element={<Blogs />}>
          {/* Nested route directing to any blod id entered after /blogs. => /blogs/1 */}
          <Route
            path=":blogId"
            // Passing in blogPosts as props gives access to the blogPosts in the 'sampleBlogs.js' file
            element={<BlogPost blogPosts={blogPosts} />}
          ></Route>
          {/* Nested route to display all blogs. => /blogs/all */}
          <Route
            path="all"
            element={<AllBlogs blogPosts={blogPosts} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
