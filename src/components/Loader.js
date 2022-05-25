import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import Typed from "react-typed";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 80,
    duration: 2,
    colors: ["#78BC62", "#ECD444", "#161830"],
  };

  return (
    <div className="loader" >
      <div>
        <GooeyCircleLoader {...loaderProps} className="loader" />
 {/*       <Typed
          className="loader-text"
          strings={["Loading..."]}
          typeSpeed={60}
          backSpeed={0}
        />*/}
        </div>
    </div>
  );
}

export default Loader;

