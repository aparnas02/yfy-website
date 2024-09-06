import React from "react";
import classNames from "classnames";
import { Nav, Offcanvas } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink, useLocation } from "react-router-dom";

// hooks
import {
  useLayout,
  useLayoutUpdate,
} from "../../context/LayoutProvider/LayoutProvider";

// utilities
import { SlideDown, SlideUp } from "../../utilities";

// components
import NioIcon from "../NioIcon/NioIcon";
import NioBrand from "../NioBrand/NioBrand";
import yfy from "../../../src/pages/home-pages/chat-app/yfy (10).png";

export default function SideBar({ className, data }) {
  const layout = useLayout();
  const location = useLocation();
  const layoutUpdate = useLayoutUpdate();

  const brandLogo = layout.headerLogos[location.pathname];
  const [logoName, logoVariant] = (typeof brandLogo === "string" &&
    brandLogo.split(".")) || ["s1", "dark"];

  const compClasses = classNames({
    [`${className}`]: className,
  });

  return (
    <Offcanvas
      className={compClasses}
      show={layout.sideBarActive}
      onHide={layoutUpdate.sideBarAction}
    >
      <Offcanvas.Header
        className="border-bottom align-items-center justify-content-between"
        closeButton
      >
        {/* <NioBrand logo={logoName} variant={logoVariant} />  */}
        <img
          src={yfy}
          style={{
            width: "78px",
            // marginLeft: "-34px",
            // marginTop: "-119px",
            // marginBottom: "-120px",
          }}
        />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SideBar.Menu data={data} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

function NavbarMenu({ data }) {
  // variables for Sidebar
  let menu = {
    classes: {
      main: "nav",
      item: "nav-item",
      link: "nav-link",
      toggle: "nav-toggle",
      sub: "navbar-sub",
      subparent: "has-sub",
      active: "active",
      current: "current-page",
    },
  };

  const location = useLocation();

  let dropdownToggle = function (elm) {
    let parent = elm?.parentElement;
    let nextelm = elm?.nextElementSibling;
    let speed =
      nextelm?.children.length > 5 ? 400 + nextelm?.children.length * 10 : 400;
    if (!parent?.classList.contains(menu.classes.active)) {
      parent?.classList.add(menu.classes.active);
      SlideDown(nextelm, speed);
    } else {
      parent?.classList.remove(menu.classes.active);
      SlideUp(nextelm, speed);
    }
  };

  let menuToggle = function (e) {
    e.preventDefault();
    let item = e.target.closest(`.${menu.classes.toggle}`);
    dropdownToggle(item);
    closeSiblings(item);
  };

  let closeSiblings = function (elm) {
    let parent = elm?.parentElement;
    let parentElement = parent?.parentElement;
    let siblings = parentElement?.children;

    if (siblings) {
      Array.from(siblings).forEach((item) => {
        if (item !== parent) {
          item?.classList.remove(menu.classes.active);
          if (item?.classList.contains(menu.classes.subparent)) {
            let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
            subitem.forEach((child) => {
              child?.parentElement?.classList.remove(menu.classes.active);
              SlideUp(child, 400);
            });
          }
        }
      });
    }
  };

  return (
    <Nav as="ul">
      {data &&
        data?.menus.map((menu, idx) => (
          <Nav.Item
            as="li"
            key={idx}
            onClick={menuToggle}
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
                <NavLink
                  to={menu.item.url}
                  className={`nav-link ${
                    menu.item.submenu.items.length !== 0 ? "nav-toggle" : ""
                  }`}
                >
                  {menu.item.title}
                </NavLink>
              )
            ) : (
              <NavLink
                to={menu.item.url}
                className={`nav-link ${
                  menu.item.submenu.items.length !== 0 ? "nav-toggle" : ""
                }`}
              >
                {menu.item.title}
              </NavLink>
            )}

            <SideBar.SubMenu data={menu?.item.submenu} />
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

function NavbarSubMenu({ data }) {
  const { items } = data;

  return (
    <>
      {items.length !== 0 && (
        <div className="navbar-sub">
          <ul className="row gy-1">
            {items.map((item, idx) => (
              <li key={idx} className="col-12">
                <NavLink to={item?.url} className="navbar-sub-item">
                  {item.icon && (
                    <NioIcon
                      className="fs-4"
                      name={item.icon}
                      variant={item.color}
                    />
                  )}
                  <div>
                    <span className="navbar-sub-title">{item.title}</span>
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

SideBar.Menu = NavbarMenu;
SideBar.SubMenu = NavbarSubMenu;
