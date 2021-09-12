import React from "react";
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
    const msg1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const msg2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
      <div className="col-12">
          <div className="row d-flex">
          <Typography variant="h4" className="mb-4 text-center"> <strong>DESCRIPTION</strong></Typography>
          </div>
          <div className="row d-flex">
              <h2 className="text-start my-3">{msg1}</h2>
          </div>
          <div className="row banner-sol m-0" > </div>
          
          <div className="row d-flex">
              <h2 className="text-start my-3">{msg2}</h2>
          </div>
    </div>
  );
};
export default Home;
