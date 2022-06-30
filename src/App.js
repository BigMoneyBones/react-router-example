import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import { blogPosts } from "./utils/sampleBlogs";
import AllBlogs from "./components/AllBlogs";
import SubmitBlog from "./pages/SubmitBlog";

const App = () => {
  // State hook for blogPosts to be passed as props
  const [allBlogs, setAllBlogs] = useState(blogPosts);
  return (
    <div className="App">
      <Routes>
        {/* Route to 'Home' calling the <Home /> component */}
        <Route path="/" element={<Home />}></Route>
        {/* Route to 'Blogs' calling the <Blogs /> component*/}
        <Route path="/blogs" element={<Blogs />}>
          {/* Nested route directing to any blod id entered after /blogs. => /blogs/1 */}
          <Route
            path="single-blog/:blogId"
            // Passing in blogPosts as props gives access to the blogPosts in the 'sampleBlogs.js' file
            element={<BlogPost allBlogs={allBlogs} />}
          ></Route>
          {/* Nested route to display all blogs. => /blogs/all */}
          <Route index element={<AllBlogs allBlogs={allBlogs} />}></Route>
        </Route>
        <Route
          path="submit-blog"
          element={<SubmitBlog allBlogs={allBlogs} setAllBlogs={setAllBlogs} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
