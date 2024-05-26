import React from "react";
import "./Services.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ServiceCard(props) {
  return (
    <div>
      <div className="serv-card-mobile">
        <div className="ser-text">
          <h3>{props.head}</h3>
          <br />
          <div className="ser-img">
          <img src={props.img} alt="Service" />
          </div>
          <br/>
          <p>{props.text}</p>
          <br />
          <AnchorLink
            href="#quotecont"
            style={{
              fontWeight: "bold",
              color: "#5ae4a7",
              textDecoration: "none",
            }}
          >
            Get a quote
          </AnchorLink>
        </div>
      </div>
      <div className="serv-card">
        {props.dir === "left" ? (
          <div className="ser-text">
            <h3>{props.head}</h3>
            <br />
            <p>{props.text}</p>
            <br />
            <AnchorLink
              href="#quotecont"
              style={{
                fontWeight: "bold",
                color: "#5ae4a7",
                textDecoration: "none",
              }}
            >
              Get a quote
            </AnchorLink>
          </div>
        ) : (
          <div className="ser-img">
            <img src={props.img} alt="Service" />
          </div>
        )}

        {props.dir === "left" ? (
          <div className="ser-img">
            <img src={props.img} alt="Service" />
          </div>
        ) : (
          <div className="ser-text">
            <h3>{props.head}</h3>
            <br />
            <p>{props.text}</p>
            <br />
            <AnchorLink
              href="#quotecont"
              style={{
                fontWeight: "bold",
                color: "#5ae4a7",
                textDecoration: "none",
              }}
            >
              Get a quote
            </AnchorLink>
          </div>
        )}
      </div>
    </div>
  );
}
