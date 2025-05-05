import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { RiAdminFill, RiMailFill } from "react-icons/ri";
import { PiGooglePhotosLogo, PiPhoneCall } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia";
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";

const Footer = () => {
    const links = {
        galleries: [
            { icon: <PiGooglePhotosLogo style={{ color: "#f00" }} />, text: "Photos", href: "#" },
            { icon: <LiaVideoSolid style={{ color: "#f00" }} />, text: "Videos", href: "#" },
        ],
        services: [
            { icon: <MdOutlinePostAdd style={{ color: "#f00" }} />, text: "Post Issue", href: "#" },
            { icon: <FaAddressCard style={{ color: "#f00" }} />, text: "Reach Us", href: "#" },
        ],
        contact: [
            { icon: <RiAdminFill style={{ color: "#f00" }} />, text: "Contact Admin", href: "#" },
            { icon: <RiMailFill style={{ color: "#f00" }} />, text: "Mail Us", href: "#" },
            { icon: <PiPhoneCall style={{ color: "#f00" }} />, text: "Call Us", href: "#" },
        ],
        social: [
            { icon: <BiLogoFacebook style={{ color: "#f00" }} />, text: "Facebook", href: "#" },
            { icon: <BsTwitterX style={{ color: "#f00" }} />, text: "Twitter", href: "#" },
            { icon: <AiFillYoutube style={{ color: "#f00" }} />, text: "YouTube", href: "#" },
        ],
    };

    const renderColumn = (heading, items) => (
        <div className="footer-column">
            <h4 className="footer-heading">{heading}</h4>
            {items.map(({ icon, text, href }, idx) => (
                <a key={idx} href={href} className="footer-link">
                    {icon}
                    <span style={{ marginLeft: 10 }}>{text}</span>
                </a>
            ))}
        </div>
    );

    return (
        <footer className="footer-container" style={{display:'block'}}>
            <h3 className="footer-title">JanaSena-active Links</h3>
            <div className="footer-row">
                {renderColumn("Galleries", links.galleries)}
                {renderColumn("Services", links.services)}
                {renderColumn("Contact Us", links.contact)}
                {renderColumn("Social Media", links.social)}
            </div>
            <p className="footer-bottom-text">
                All rights Reserved for &copy;{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>JanaSena-TS</span>
            </p>
        </footer>
    );
};

export default Footer;
