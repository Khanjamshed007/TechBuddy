import React from "react";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Techbuddy..</h1>
        <p>@all rigth reserved</p>
      </div>

      <div>
        <h5>Follow us</h5>
        <div>
            <AiFillLinkedin />
            <a href="/" target={'_blank'}>Linkdin</a>
            <AiFillGithub />
            <a href="/" target={'_blank'}>Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
