import "./Services.css";
import React, { useState } from "react";
import details from "./service-details.js";
import ServiceCard from "./ServiceCard.jsx";
export default function Services() {
    const i = 1;
  return (
    <div id="services-cont">
      <h1>Services</h1>
      {details.map((detail, i) => {
        const { key, head, img, content } = detail;
          const dir = i % 2 === 0 ? "left" : "right";
          i+=1
        return (
          <ServiceCard
            key={key}
            head={head}
            img={img}
            text={content}
            dir={dir}
          />
        );
      })}
    </div>
  );
}
