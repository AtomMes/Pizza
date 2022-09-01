import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import "./scss/app.scss";

import Home from "./pages/Home";

const FullPizza = React.lazy(
  () => import(/*webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound" */ "./pages/NotFound")
);
const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart" */ "./pages/Cart")
);

function App() {
  return (
    <div className="content">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
