import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import Home from "./pages/Home"
import Nopage from "./pages/404";
import Following from "./pages/Following";
import Follows from "./pages/Followrs";
import Saidbar from "./components/Sidebar";
import Search from "./pages/Search";
import Layaute from "./components/Leyaute"
import Repositori from "./pages/Repositoris"
// import { Api } from './api/api';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

const App = () => {
  const page = useSelector(store => store.count.count);

  const [count, setCount] = useState(page.payload);


  console.log(page);

  return (
    <>
      <Navber />
      <div className="layaut-border">
        <div className="container ">
          <div className="  d-flex flex-column flex-md-row justify-content-between" >
            <div className=" col-12 col-md-3">
              <div className="d-block d-md-none"> <Layaute /></div>
              <Saidbar className=" " />
            </div>
            <div className="col-md-8 col-12">
              <div className=" d-none d-md-block w-lg-75  ">
                <Layaute />
              </div>
              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/repositori" element={<Repositori />} />
                <Route path="/folows" element={<Follows />} />
                <Route path="/folowing" element={<Following />} />
                <Route path='/search' element={<Search />} />
                <Route path="*" element={<Nopage />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>


    </>
  );
};

export default App;