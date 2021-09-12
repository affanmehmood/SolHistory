import React from "react";

import { NavLink } from "react-router-dom";
import RoadMap from './RoadMap'
import Typical from './Typical'
import Description from "./Description";
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
  const msg1 = props.msg1;
  const msg1_1 = props.msg1_1;
  const typical = props.typical;
  const msg1_2 = props.msg1_2;
  const msg2 = props.msg2;
  const msg3 = props.msg3;
  const web = props.web;
  const dest = props.dest;
  return (
    <>
      <section id="header" className="d-block align-items-center home-section pt-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="typical-sm">
                    {msg1}
                    <Typical steps={typical} />
                    {msg1_1}
                    <br/>
                  </h2>
                  
                  
                <Typography variant="h1" className="mb-0 brand-name"> <strong>{msg1_2}</strong></Typography>
                  <h2 className="my-3">{msg2}</h2>
                  <div className="mt-4">
                    <NavLink exact to={dest} className="btn-get-started">
                      {msg3}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex align-items-center justify-content-center">
                  <img
                    src={web}
                    className="img-fluid  w-75"
                    alt="home"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center  mt-5" >
            <div classeName="p-5" style={{width:"60%" }}>
              <Description />
            </div>
          </div>
          <div className="row justify-content-center  mt-5" >
            <div classeName="p-5" style={{width:"60%" }}>
              <RoadMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
