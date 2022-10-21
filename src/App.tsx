import React from 'react';
import { FC } from "react"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Routes/Home/home";
import { Posts } from "./components/Routes/Posts/post";
import { GlobalStyle } from './styleHelpers/global'
import { Layout } from "./components/Common/Layout";

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="posts" element={<Posts />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}