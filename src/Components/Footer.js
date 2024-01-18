import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px 12px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    display: "block";
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2px;

    .nav-menu-list {
      text-decoration: none;
      color: white;
      display: block;
      padding: 2px;
    }
  }
  .socialIconBtn {
    font-size: 4px;
    cursor: pointer;
    padding: 4px;
  }
`;
const SocialMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px;
  }
  .socialIconBtn {
    font-size: 34px;
    cursor: pointer;
    padding: 4px;
    margin-top: 0px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .socialIconBtn {
      font-size: 24px;
      cursor: pointer;
      padding: 4px;
      margin-top: 0px;
    }
  }
`;

const Footer = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768; 

  return (
    <>
      <StyledFooter style={{paddingTop: isMobile ? '0px' : '80px'}}>
        <NavManu>
          <li>
            <Link to={"/"} className="nav-menu-list">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-menu-list">
              About
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="nav-menu-list">
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/connect"} className="nav-menu-list">
              Connect
            </Link>
          </li>
        </NavManu>
        <SocialMenu>
          <li>
            <FaLinkedin className="socialIconBtn"/>
          </li>
          <li>
            <FaSquareGithub className="socialIconBtn"/>
          </li>
          <li>
            <FaSquareXTwitter className="socialIconBtn"/>
          </li>
        </SocialMenu>
      </StyledFooter>
    </>
  );
};

export default Footer;

const styles = {
  link: {
    padding: "10px",
  },
  toggleLink: {
    paddingTop: "12px",
  },
};
