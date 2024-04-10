import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import PhotoComponent from "./Components/PhotoComponent";
import NavComponent from "./Components/NavComponent";
import CounterApp from "./Components/CounterComponent";
function app() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/image" element={<PhotoComponent />}>    </Route>
          <Route path="/" element={<NavComponent />}>    </Route>
          <Route path="/counterapp" element={<CounterApp/>}>    </Route>

          





        </Routes>
      </Router>
    </>
  );
}
export default app;
