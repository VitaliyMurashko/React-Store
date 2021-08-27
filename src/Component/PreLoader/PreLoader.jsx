import React from "react";
import loading from "../../assets/img/5.gif";

const PreLoader = () => {
  return (
    <div style={style}>
      <img src={loading} alt="preloader" />
    </div>
  );
};

const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

export default PreLoader;
