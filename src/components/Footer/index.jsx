import React from "react";
import "./style.scss";
const index = () => {
  return (

    <footer className=" footer">
      <div className=" footer__wrap">
        <a className="nav__one_link" href="https://github.com/">
          <i className="fa-brands fa-github fs-2 text-secondary"></i>
        </a>
        <span className=" footer__wrap_span">
          © {new Date().getFullYear()} GitHub, Inc.
        </span>
      </div>
      <ul className=" footer__ul ">
        <li className="  footer__ul-list">
          <a
            target={"_blank"}
            href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
          >
            Terms
          </a>
        </li>
        <li className="  footer__ul-list">
          <a
            target={"_blank"}
            href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
          >
            Privacy
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://github.com/security">
            Security
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://www.githubstatus.com/">
            Status
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://docs.github.com">
            Docs
          </a>
        </li>
        <li className="  footer__ul-list">
          <a
            target={"_blank"}
            href="https://support.github.com?tags=dotcom- footerer"
          >
            Contact GitHub
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://github.com/pricing">
            Pricing
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://docs.github.com">
            API
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} className="link" href="https://services.github.com">
            Training
          </a>
        </li>
        <li className="  footer__ul-list">
          <a target={"_blank"} href="https://github.blog">
            Blog
          </a>
        </li>
        <li className=" footer__ul-list">
          <a target={"_blank"} href="https://github.com/about">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default index;
