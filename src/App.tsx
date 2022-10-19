import React from 'react';
import {FC} from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home} from "./components/Routes/Home/home";
import {Posts} from "./components/Routes/Posts/post";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="posts">Posts</Link>
      </div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}