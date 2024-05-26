import "./Quote.css";
import React, { useContext } from "react";
import mapbg from "../../Assets/mapbg.png";
import Cards from "./Cards";
import PlaceAuto from "./PlaceAuto";
import { CiPhone } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MyContext } from "../../MyContext";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export default function Quote() {
  const { detail, setDetails } = useContext(MyContext);
  return (
    <div id="quotecont">
      <div className="darkbg">
        <h1>Get In Touch</h1>
        <img src={mapbg} />
      </div>
      <div className="contact-form-cont">
        <div className="contact-form">
          <div className="form-header">
            <h2 style={{"height":"fit-content"}}>Send us a Message</h2>
            <svg width="5vw" height="5vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
          <div className="card-list">
            <Cards name={"Enter Name"} val="name"/>
            <Cards name={"Enter Phone Number"} val="phoneno"/>
            <PlaceAuto name="Pick Up Location" val="src"/>
            <PlaceAuto name="Drop Location" val="dest"/>
          </div>
          <a href={`sms:919211327197;?&body=Name - ${detail.name} %0aPhone - ${detail.phoneno}%0aFrom : ${detail.src}%0aTo : ${detail.dest}`} className="sub-button"> Submit</a>
        </div>
        <div className="contact-info">
          <p>Contact Information</p>
          <div className="cont-details">
            <div className="cont">
              <FaLocationDot className="loc-logo"/>
              <a href="https://www.google.com/maps/place/Khurana+Transport+Service+%26+Packers+and+Movers/@28.6558124,77.2684822,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfcbd2ce645b9:0x1335f3458d5fbe89!8m2!3d28.6558125!4d77.2733531!16s%2Fg%2F11b76c4nb0?entry=ttu">2/1, Main road, Geeta Colony, Delhi 110031</a>
            </div>
            <div className="cont">
              <CiPhone className="phone-logo" />
              <a href="tel:+919212110257">+91 9212110257</a>
              {/* <a href="tel:+919212110257">9212170257</a> */}
            </div>
            <div className="cont">
              <IoMailUnreadOutline className="mail-logo" />
              <a href="mailto:khuranatransportservice@gmail.com">khuranatransportservice@gmail.com</a>
            </div>
            <div className="logos">
              <FaLinkedin className="soc-logo"/>
              <FaXTwitter className="soc-logo"/>
              <FaInstagram className="soc-logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
