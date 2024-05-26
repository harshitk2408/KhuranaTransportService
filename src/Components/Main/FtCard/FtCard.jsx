import React from "react";
import CountUp from "react-countup"
import './FtCard.css'
export default function (props) {
    return (
        <div className="ft-card">
            <div className="logo">
            {props.url}
            </div>
            <div className="desc"><CountUp end={props.no}/>+<br />{props.text}</div>
        </div>
    )
}