import React from "react";
import "./index.css";
import Home from "./ReusableCompnents/home";
import image from "./images/main-design.gif";

export default () => {
  const msg1 = "Bringing ";
  const msg1_1 = "to blockchain"
  const typical = ['history', 2000, 'past', 2000, 'culture', 2000]
  const msg1_2 = "SolHistory";
  const msg2 = "We bring historical figures to the nft marketplaces.";
  const msg3 = "Vist Marketplace";
  const dest = "/download";
  const web = image;
  return (
    <>
      <Home
        typical={typical}
        msg1={msg1}
        msg1_1={msg1_1}
        msg1_2={msg1_2}
        msg2={msg2}
        msg3={msg3}
        web={web}
        dest={dest}
      />
    </>
  );
};

