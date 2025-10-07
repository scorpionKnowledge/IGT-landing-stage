"use client";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";

import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const Header = ({ header, onePage }) => {
  // switch (header) {
  //   case 1:
  //     return <DefaultHeader onePage={onePage} />;
  //   case 2:
  //     return <Header2 onePage={onePage} />;
  //   case 3:
  //     return <Header3 onePage={onePage} />;
  //   case 4:
  //     return <Header4 onePage={onePage} />;
  //   case 5:
  //     return <Header5 onePage={onePage} />;
  //   case 6:
  //     return <Header6 onePage={onePage} />;
  //   case 7:
  //     return <Header7 onePage={onePage} />;
  //   case 8:
  //     return <Header8 onePage={onePage} />;
  //   case 9:
  //     return <Header9 onePage={onePage} />;
  //   case 10:
  //     return <HeaderNotFound />;

  //   default:
  //     return <DefaultHeader onePage={onePage} />;
  // }
  return <DefaultHeader onePage={onePage} />;
};
export default Header;

const DefaultHeader = ({ onePage }) => {
  const menus = [
    { id: 1, href: "/", title: "Home" },
    { id: 8, href: "/about", title: "About Us" },
    { id: 3, href: "/services", title: "services" },
    // { id: 2, href: "/contact", title: "Contact Us" },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ maxWidth: "180px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="assets/images/logos/logo.png"
                  menus={menus}
                  onePage={onePage}
                  style={{ maxWidth: "180px" }}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href="contact" className="theme-btn">
                Contact us <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Nav = ({
  logo = "assets/images/logos/logo2.png",
  dark,
  onePage,
  menus,
}) => {
  return (
    <Fragment>
      <div className="d-none d-lg-flex desktop-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src={logo}
                alt="Logo"
                title="Logo"
                style={{ maxWidth: "180px" }}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <div eventKey="navbar-collapse" className="navbar-collapse clearfix">
          <ul className="navigation onepage clearfix">
            {console.log("menus", menus[1].href)}
            {menus.map((menu) => (
              <>
                {console.log("menu.href", menu.href)}
                <li key={menu.id}>
                  <Link href={menu.href}>{menu.title}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="d-block d-lg-none mobile-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src={logo}
                alt="Logo"
                title="Logo"
                style={{ maxWidth: "180px" }}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <MobileMenu onePage={onePage} menus={menus} />
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
};

const NavSearch = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(true)} />
      <form
        action="#"
        className={toggle ? "" : "hide"}
        onSubmit={(e) => {
          e.preventDefault();
          setToggle(false);
        }}
        ref={domNode}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};

const MobileMenu = ({ sidebar, onePage, menus }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      {onePage ? (
        <ul
          className={`${
            sidebar ? "sidebar-menu" : "navigation"
          } onepage clearfix`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <a href={`${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${sidebar ? "sidebar-menu" : "navigation"} clearfix`}>
          <li className="dropdown">
            <a href="#">Home</a>
            <ul style={activeLi("home")}>
              <li className="dropdown">
                <a href="#">MultiPage</a>
                <ul style={multiMenuActiveLi("multiPage")}>
                  <li>
                    <Link href="/">Business</Link>
                  </li>
                  <li>
                    <Link href="index2">Lead Capture</Link>
                  </li>
                  <li>
                    <Link href="index3">Software Landing</Link>
                  </li>
                  <li>
                    <Link href="index4">E-learning</Link>
                  </li>
                  <li>
                    <Link href="index5">Saas Landing</Link>
                  </li>
                  <li>
                    <Link href="index6">AI Software</Link>
                  </li>
                  <li>
                    <Link href="index7">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="index8">Fintech</Link>
                  </li>
                  <li>
                    <Link href="index9">Chatbot</Link>
                  </li>
                </ul>
                <div
                  className="dropdown-btn"
                  onClick={() => multiMenuSet("multiPage")}
                >
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">OnePage</a>
                <ul style={multiMenuActiveLi("OnePage")}>
                  <li>
                    <Link href="index1-onepage">Business</Link>
                  </li>
                  <li>
                    <Link href="index2-onepage">Lead Capture</Link>
                  </li>
                  <li>
                    <Link href="index3-onepage">Software Landing</Link>
                  </li>
                  <li>
                    <Link href="index4-onepage">E-learning</Link>
                  </li>
                  <li>
                    <Link href="index5-onepage">Saas Landing</Link>
                  </li>
                  <li>
                    <Link href="index6-onepage">AI Software</Link>
                  </li>
                  <li>
                    <Link href="index7-onepage">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="index8-onepage">Fintech</Link>
                  </li>
                  <li>
                    <Link href="index9-onepage">Chatbot</Link>
                  </li>
                </ul>
                <div
                  className="dropdown-btn"
                  onClick={() => multiMenuSet("OnePage")}
                >
                  <span className="far fa-angle-down" />
                </div>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">pages</a>
            <ul style={activeLi("pages")}>
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="team">Team Members</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="sign-in">Sign In</Link>
              </li>
              <li>
                <Link href="sign-up">Sign Up</Link>
              </li>
              <li>
                <Link href="coming-soon">Coming Soon</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("pages")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Services</a>
            <ul style={activeLi("Services")}>
              <li>
                <Link href="services">Our Services</Link>
              </li>
              <li>
                <Link href="service-details">Service Details</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Services")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Shop</a>
            <ul style={activeLi("Shop")}>
              <li>
                <Link href="shop">our Products</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="cart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="checkout">Checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("Shop")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Projects</a>
            <ul style={activeLi("Projects")}>
              <li>
                <Link href="projects">Project Grid</Link>
              </li>
              <li>
                <Link href="project-list">Project List</Link>
              </li>
              <li>
                <Link href="project-masonry">Project Masonry</Link>
              </li>
              <li>
                <Link href="project-details">Project Details</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Projects")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">blog</a>
            <ul style={activeLi("blog")}>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
        </ul>
      )}
    </Fragment>
  );
};
