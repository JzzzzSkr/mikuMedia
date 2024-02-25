import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Library from "./pages/library/Library";
import Movie from "./pages/movie/Movie";

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="movie" element={<Movie />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
