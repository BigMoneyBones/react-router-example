import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes, Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}>
          <Route path=":blogId" element={<BlogPost />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
