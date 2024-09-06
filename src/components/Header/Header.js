import classNames from "classnames";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// context
import {
  useLayout,
  useLayoutUpdate,
} from "../../context/LayoutProvider/LayoutProvider";

// components
import NioIcon from "../NioIcon/NioIcon";
import NioBrand from "../NioBrand/NioBrand";
import NioButton from "../NioButton/NioButton";
import useRouteMatch from "../../hooks/useRouteMatch";
import yfylogo from "../../../src/pages/home-pages/chat-app/yfy cover image (6).png";
import yfy from "../../../src/pages/home-pages/chat-app/yfy (10).png";
import yfyImg from "../../../src/pages/home-pages/chat-app/yfylogo-R (7).png";

export default function Header({ data, className }) {
  const [isFixed, setIsFixed] = useState(false);

  // components classes
  const compClasses = classNames({
    "nl-header": true,
    "has-fixed": isFixed,
    [`${className}`]: className,
  });

  const navClasses = classNames({
    "border-bottom": useRouteMatch([
      "/",
      "/index-analytics",
      "/index-project-management",
    ]),
  });

  const handleScroll = () => {
    // Check if window.scrollY is greater than 60
    const shouldFixHeader = window.scrollY > 60;

    // Update isFixed state based on the scroll position
    setIsFixed(shouldFixHeader);
  };

  // navbar on scroll
  useEffect(() => {
    // Add event listener for popstate event
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={compClasses}>
      <Navbar expand="lg" className={navClasses}>
        <Container>
          {/* <img
            src={yfylogo}
            alt="image"
            width={450}
            marginLeft={-208}
            marginTop={-33}
            marginBottom={-22}
            // width={77}
            // style={{ display: "block", margin: "10px auto" }}
          /> */}
          <img
            src={yfy}
            style={{
              width: "78px",
              // marginLeft: "-34px",
              // marginTop: "-119px",
              // marginBottom: "-120px",
            }}
          />
          {/* <img
            src={yfyImg}
            width={"94px"}
            style={{
              marginLeft: "-34px",
              marginTop: "-98px",
              marginBottom: "-120px",
            }}
          /> */}
          {/* <Header.Logo /> */}
          <Header.Menu data={data.menus} />
          <Header.Action />
        </Container>
      </Navbar>
    </header>
  );
}

function HeaderLogo() {
  const layout = useLayout();
  const location = useLocation();
  const brandLogo = layout.headerLogos[location.pathname];
  const [logoName, logoVariant] = (typeof brandLogo === "string" &&
    brandLogo.split(".")) || ["s1", "dark"];

  return (
    <NioBrand logo={logoName} variant={logoVariant} className="navbar-brand" />
  );
}

function HeaderMenu({ data }) {
  const compClasses = classNames({
    "nl-header-menu nl-navbar mx-auto": true,
  });

  return (
    <Navbar.Collapse className="d-none d-lg-block">
      <nav className={compClasses}>
        <Header.Nav data={data} />
        <div className="nl-navbar-btn d-lg-none">
          <ul className="d-flex flex-wrap gap-3 justify-content-center">
            <li className="w-100">
              <NioButton
                icon="bag-fill"
                className="btn-primary"
                label="Purchase Now"
                href="https://1.envato.market/NioLandReact"
              />
            </li>
          </ul>
        </div>
      </nav>
    </Navbar.Collapse>
  );
}

function HeaderSubMenu({ data }) {
  const { items } = data;

  return (
    <>
      {items.length !== 0 && (
        <div className="navbar-sub">
          <ul className="row g-1">
            {items.map((item, idx) => (
              <li key={idx} className="col-4">
                <NavLink to={item?.url} className="navbar-sub-item">
                  <NioIcon
                    className="fs-4"
                    name={item.icon}
                    variant={item.color}
                  />
                  <div className="w-100">
                    <h5 className="navbar-sub-title d-flex align-items-center justify-content-between mb-0">
                      {item.title}
                      {item.isNew && (
                        <span className="fs-9 fw-semibold text-primary text-uppercase">
                          New
                        </span>
                      )}
                    </h5>
                    {item.subtitle && (
                      <span className="navbar-sub-subtitle">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function HeaderNav({ data }) {
  const location = useLocation();

  return (
    <Nav as="ul" className="nl-nav">
      {data &&
        data.map((menu, idx) => (
          <Nav.Item
            as="li"
            key={idx}
            className={`${
              menu.item.submenu.items.length !== 0 ? " has-sub" : ""
            }`}
          >
            {location.pathname === "/" ? (
              menu.item.url.startsWith("#") ? (
                <ScrollLink
                  offset={-60}
                  to={menu.item.url.slice(1)}
                  className={`nav-link ${
                    menu.item.submenu.items.length !== 0 ? "nav-toggle" : ""
                  }`}
                >
                  {menu.item.title}
                </ScrollLink>
              ) : (
                <Link
                  to={menu.item.url}
                  className={`nav-link ${
                    menu.item.submenu.items.length !== 0 ? "nav-toggle" : ""
                  }`}
                >
                  {menu.item.title}
                </Link>
              )
            ) : (
              <Link
                to={menu.item.url}
                className={`nav-link ${
                  menu.item.submenu.items.length !== 0 ? "nav-toggle" : ""
                }`}
              >
                {menu.item.title}
              </Link>
            )}

            <Header.SubMenu
              data={menu?.item.submenu}
              className={menu?.item.mega && "navbar-mega-lg-home"}
            />
          </Nav.Item>
        ))}
      {location.pathname === "/" && (
        <Nav.Item as="li">
          <Link to="./docs/" target="_blank" className="nav-link">
            Docs
          </Link>
        </Nav.Item>
      )}
    </Nav>
  );
}

function HeaderAction() {
  const layoutUpdate = useLayoutUpdate();

  return (
    <div className="nl-header-action">
      <ul className="d-flex flex-wrap gap-3 gap-3 justify-content-center">
        <li className="d-none d-md-block">
          <NioButton
            icon="bag-fill"
            label="Purchase Now"
            className="btn-primary"
            href="https://1.envato.market/NioLandReact"
          />
        </li>
        <li className="d-lg-none">
          <Navbar.Toggle
            className="btn-block"
            onClick={layoutUpdate.sideBarAction}
          />
        </li>
      </ul>
    </div>
  );
}

Header.Nav = HeaderNav;
Header.Logo = HeaderLogo;
Header.Menu = HeaderMenu;
Header.Action = HeaderAction;
Header.SubMenu = HeaderSubMenu;
