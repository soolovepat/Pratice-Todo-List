import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailTodo from "../pages/DetailTodo";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-todo:id" element={<DetailTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
