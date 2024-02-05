import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 12px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;

const NavManu = styled.ul.attrs((props) => ({
  isActive: props.isActive,
}))`
  list-style: none;
  display: flex;

  li {
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${(props) =>
        props.isActive ? "#fab005" : "transparent"};
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  .nav-menu-list {
    text-decoration: none;
    display: block;
    color: var(--text-color);
  }

  .nav-menu-list.active {
    color: #fab005;
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    &:hover::after {
      transform: scaleX(1);
    }
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = ({ windowWidth }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleLinkClick = (event, path) => {
    if (location.pathname === path) {
      // If the link is already active, prevent the default click behavior
      event.preventDefault();
      return;
    }

    // Otherwise, toggle the menu or perform other actions
    setIsToggleOpen(false);
    // Additional actions can be added here if needed
  };

  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <img
            src={require("../assets/images/gurinder-singh.svg").default}
            alt="Gurinder Singh logo"
            style={{
              width: "50%",
              marginTop: "3%",
            }}
          />
        </div>

        <NavManu isToggleOpen={isToggleOpen} isActive={location.pathname}>
          <li>
            <Link
              to={"/"}
              className={`nav-menu-list ${
                location.pathname === "/" ? "active" : ""
              }`}
              style={windowWidth >= 768 ? styles.link : styles.toggleLink}
              onClick={(event) => handleLinkClick(event, "/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`nav-menu-list ${
                location.pathname === "/about" ? "active" : ""
              }`}
              style={windowWidth >= 768 ? styles.link : styles.toggleLink}
              onClick={(event) => handleLinkClick(event, "/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className={`nav-menu-list ${
                location.pathname === "/projects" ? "active" : ""
              }`}
              style={windowWidth >= 768 ? styles.link : styles.toggleLink}
              onClick={(event) => handleLinkClick(event, "/projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={"/connect"}
              className={`nav-menu-list ${
                location.pathname === "/connect" ? "active" : ""
              }`}
              style={windowWidth >= 768 ? styles.link : styles.toggleLink}
              onClick={(event) => handleLinkClick(event, "/connect")}
            >
              Connect
            </Link>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

const styles = {
  link: {
    padding: "10px",
  },
  toggleLink: {
    paddingTop: "12px",
  },
};

export default Header;
