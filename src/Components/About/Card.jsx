import React from "react";
import './About.css';
export default function Card(props) {
    return (
        <div className="wc-card">
            <div>
              <img src={props.img} />
            </div>
            {props.text}
        </div>
    )
}