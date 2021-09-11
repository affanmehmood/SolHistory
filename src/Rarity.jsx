import React from "react";

import ServiceCard from "./ReusableCompnents/service-card";
import Sdata from "./Sdata.jsx";

const Rarity = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">RARITY HANDBOOK</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <ServiceCard
                    key={val.key}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rarity;
