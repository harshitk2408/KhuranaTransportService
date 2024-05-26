import React from "react";
import details from "./details.js";
import './About.css'
import Card from "./Card.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function About() {
    return (
        <div id="about-cont">
            <h1>
                About Us
            </h1>
            <p>
                Welcome to Khurana Transport Service, your trusted partner in logistics and transportation solutions. With years of experience in the industry, we specialize in providing reliable truck transportation and packers and movers services tailored to meet your unique needs. <br/><br/>
At Khurana Transport Service, we understand the importance of timely deliveries, safety, and efficiency in today's fast-paced world. That's why we have built a dedicated team of professionals, equipped with state-of-the-art technology and a fleet of well-maintained vehicles, to ensure seamless and hassle-free transportation of your goods.<br/><br/>
                Our commitment to excellence drives us to continuously innovate and adapt to the evolving needs of our clients. Whether you are moving across town or across the country, our comprehensive range of services is designed to make your relocation experience smooth and stress-free.<br/><br/>
                </p>
                <h1>
                Why Choose Us?
            </h1>
            {/* <ul>
<li><span style={{fontWeight:"bold"}}>Reliability:</span> We pride ourselves on delivering consistent and dependable services, earning the trust and loyalty of our valued clients. <br/><br/></li>
<li><span style={{fontWeight:"bold"}}>Safety:</span> Your goods are precious, and we handle them with the utmost care. Our team is trained to follow strict safety protocols to ensure the safe transportation of your belongings. <br/><br/></li>
<li><span style={{fontWeight:"bold"}}>Customized Solutions:</span> We understand that every move is unique. That's why we offer personalized solutions tailored to your specific requirements, ensuring a customized experience that meets your expectations. <br/><br/></li>
<li><span style={{ fontWeight: "bold" }}>Competitive Pricing:</span> Quality service doesn't have to break the bank. We offer competitive pricing without compromising on the quality of our services. <br /><br /></li>
                    </ul> */}
            <div className="wc-cont">
            {
                details.map((elem) => {
                    return (
                        <Card img={elem.img} text={elem.text} key={elem.key}/>
                    )
                })
                }
            </div>
            Join the growing list of satisfied customers who have experienced the Khurana Transport Service difference. <AnchorLink href="#quotecont" style={{ fontWeight: "bold", color: "#5ae4a7", textDecoration: "none" }}>Contact us</AnchorLink> today to discuss your logistics and transportation needs, and let us help you move forward with confidence. <br /><br />
        </div>
    )
} 