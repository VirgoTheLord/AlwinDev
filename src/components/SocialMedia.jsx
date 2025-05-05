import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = ({ hideOnMobile = false }) => (
  <div className={`app__social ${hideOnMobile ? "no-social" : ""}`}>
    <a
      href="https://www.instagram.com/alwx.n"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>
    <a
      href="https://github.com/VirgoTheLord"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/alwin-aby-mathew-6248b52a2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
