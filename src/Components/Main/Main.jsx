import "./Main.css";
import React from "react";
import Typewriter from "typewriter-effect";
import FtCard from "./FtCard/FtCard";
import details from "./Ft-details";
export default function Main() {
  return (
    <div id="mainpage">
      <div className="mainpage-upper">
        <div className="main-text">
        Seamless Delivery Service: <br/> Where <span style={{'color': "#5ae4a7"}}>Trust</span> Meets <br/><span style={{"color": "#5ae4a7"}}>Efficiency</span>
        </div>
        <div className="animat">
          <dotlottie-player
            src="https://lottie.host/e1e8cc8b-cf9c-4cbc-9c9f-3e34c1d2aa96/38EPORfdLj.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            direction="1"
            playMode="normal"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="mainpage-lower">
  {details.map((detail) => {
    const { key, url, no, text } = detail;
    return (
      <div className="ft" key={key}>
        <FtCard url={url} no={no} text={text} />
      </div>
    );
  })}
</div>
    </div>
  );
}
