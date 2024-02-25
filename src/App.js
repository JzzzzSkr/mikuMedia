import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
// 使用 React.lazy 进行动态导入
const Home = React.lazy(() => import("./pages/home/Home"));
const Library = React.lazy(() => import("./pages/library/Library"));
const Movie = React.lazy(() => import("./pages/movie/Movie"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
