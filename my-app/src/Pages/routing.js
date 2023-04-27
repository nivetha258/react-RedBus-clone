import React from "react";
import Home from "./Home/home";
import BusListPage from "./BusListPage/busListPage";
import Header from "./Header/header";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  const state = useSelector((a) => a);
  console.log(state);
  console.log("routing");
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>  
          {/* <Route path="/" element={<Home/>}></Route>    */}
           <Route path = "/" element = {<Home />}></Route>  
          <Route path = "/buses" element = {<BusListPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
