import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Finnovologo from "../../../src/pages/home-pages/chat-app/finnovologo.png";
import yfy from "../../../src/pages/home-pages/chat-app/yfy (10).png";

// context
import { useLayout } from "../../context/LayoutProvider/LayoutProvider";

// custom hooks
import useRouteMatch from "../../hooks/useRouteMatch";

// components
import {
  NioBrand,
  NioIcon,
  NioMedia,
  NioSubscribeField,
} from "../../components";
import { color } from "framer-motion";

export default function Footer({ variant = 1, children }) {
  const layout = useLayout();
  const location = useLocation();
  const brandLogo = layout.footerLogos[location.pathname];
  const [logoName, logoVariant] = (typeof brandLogo === "string" &&
    brandLogo.split(".")) || ["s1", "dark"];

  const compClasses = classNames({
    [`${useRouteMatch("/") ? "nl-footer-landing" : "nl-footer"}`]: true,
  });

  return (
    <footer className={compClasses}>
      {variant === 1 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="nl-footer-content align-items-center justify-content-lg-between gy-5 gy-md-7 gx-5 pt-5 pt-lg-7 pb-5 pb-md-7 border-bottom">
                <Col md="8" lg="5" xxl="4">
                  <div className="nl-footer-brand">
                    <div className="nl-footer-brand-info">
                      <div className="nl-footer-logo">
                        {/* <NioBrand logo={logoName} variant={logoVariant} /> */}
                        <img
                          src={yfy}
                          style={{
                            width: "78px",
                            // marginLeft: "-34px",
                            // marginTop: "-119px",
                            // marginBottom: "-120px",
                          }}
                        />
                      </div>
                      <p className="mb-0 text-black">
                        Streamline your business operations with our powerful
                        suite of solutions. Boost productivity and drive growth
                        with NioLand.
                      </p>
                    </div>
                    <ul className="nl-footer-social pt-5 pt-lg-6">
                      <li>
                        <NioMedia
                          href="#"
                          size="sm"
                          icon="linkedin"
                          variant="primary"
                          style={{ backgroundColor: "#a96ad9" }}
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="https://www.youtube.com/@yfy-lj6cg/videos"
                          size="sm"
                          icon="youtube"
                          variant="primary"
                          style={{ backgroundColor: "#a96ad9" }}
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="https://www.instagram.com/yfyapp/"
                          size="sm"
                          icon="instagram"
                          variant="primary"
                          style={{ backgroundColor: "#a96ad9" }}
                        />
                      </li>

                      {/* <li>
                        <NioMedia
                          href="#"
                          size="sm"
                          icon="telegram"
                          variant="primary"
                          style={{ backgroundColor: "#4d017f" }}
                        />
                      </li> */}
                      <li>
                        <NioMedia
                          href="#"
                          size="sm"
                          icon="facebook-f"
                          variant="primary"
                          style={{ backgroundColor: "#a96ad9" }}
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="https://x.com/YourFinYatch"
                          size="sm"
                          icon="twitter"
                          variant="primary"
                          style={{ backgroundColor: "#a96ad9" }}
                        />
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="7" xl="6">
                  <Row className="gy-5 gy-lg-0 justify-content-between">
                    <Col sm="8" xxl="7">
                      <div className="nl-footer-info">
                        <h5 className="mb-3 mb-md-4">Pages</h5>
                        <Row as="ul" className="gy-1 gy-sm-3">
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/features"
                            >
                              Features
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/about">
                              About
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/pricing"
                            >
                              Pricing
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/blogs">
                              Blog
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/blog-details"
                            >
                              Blog Post
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/customer-testimonials"
                            >
                              Customer Reviews
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/help-center"
                            >
                              Help Center
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/contact-us"
                            >
                              Contact
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="nl-footer-info">
                        <h5 className="mb-3 mb-md-4">Utility Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/sign-up"
                            >
                              Sign up
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/reset-password"
                            >
                              Reset Password
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/404">
                              404 Not Found
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom py-5 pb-lg-7">
            <Container>
              <Row className="nl-footer-content gx-0 align-items-center justify-content-between">
                <Col lg="6" className="px-0">
                  <p className="fs-7 text-center text-lg-start">
                    Copyright&copy;
                    {/* 2011 -{" "} */}
                    <span id="currentYear"> {new Date().getFullYear()} </span>
                    <Link
                      className="text-primary fw-bold"
                      to="https://www.finnovo.io/"
                      target="_blank"
                    >
                      <img src={Finnovologo} alt="Finnovo" width={90} />
                    </Link>
                    . All Rights Reserved.
                  </p>
                </Col>
                <Col lg="6" className="px-0">
                  <ul className="nl-footer-copyright justify-content-center justify-content-lg-end">
                    <li>
                      <Link
                        className="fs-7 text-capitalize"
                        to="https://www.finnovo.io/"
                      >
                        All Rights
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fs-7 text-capitalize"
                        to="https://www.finnovo.io/"
                      >
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="fs-7 text-capitalize"
                        to="https://www.finnovo.io/"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 2 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="nl-footer-content flex-lg-row-reverse justify-content-start  justify-content-lg-between border-bottom  pt-5 pt-md-7 pt-xl-120 pb-5 pb-md-7">
                <Col lg="6" xxl="5">
                  <Row className="gy-5 gy-lg-0 justify-content-between">
                    <Col sm="8">
                      <div className="nl-footer-info">
                        <h5 className="mb-4 text-white">Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/features"
                            >
                              Features
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/about">
                              About
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/pricing"
                            >
                              Pricing
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/blogs">
                              Blog
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/blog-details"
                            >
                              Blog Post
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/customer-testimonials"
                            >
                              Customer Reviews
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/help-center"
                            >
                              Help Center
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/contact-us"
                            >
                              Contact
                            </Link>
                          </Col>
                        </ul>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="nl-footer-info">
                        <h5 className="mb-4 text-white">Utility Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/sign-up"
                            >
                              Sign up
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/reset-password"
                            >
                              Reset Password
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/404">
                              404 Not Found
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="10" lg="5">
                  <div className="nl-footer-brand nl-footer-info mt-5 mt-md-7 mt-lg-0">
                    <div className="nl-footer-brand-info">
                      <div className="nl-footer-logo mb-3">
                        <NioBrand
                          logo={logoName}
                          variant={logoVariant}
                          btn="bg-teal-600"
                        />
                      </div>
                      <h4 className="mb-4 text-white">
                        Subscribe To Our Newsletter
                      </h4>
                      <NioSubscribeField variant={1} />
                      <p className="mt-4">
                        &copy; 2011 - {new Date().getFullYear()}
                        <Link
                          className="text-primary fw-bold"
                          to="https://softnio.com/"
                          target="_blank"
                        >
                          {" "}
                          Softnio{" "}
                        </Link>
                        . All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom py-5 pb-lg-7">
            <Container>
              <Row className="nl-footer-content justify-content-center justify-content-md-between">
                <Col md="6" className="px-0">
                  <ul className="nl-footer-copyright justify-content-center justify-content-md-start">
                    <li>
                      <Link className="text-capitalize" to="#">
                        All Rights
                      </Link>
                    </li>
                    <li>
                      <Link className="text-capitalize" to="#">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="text-capitalize" to="#">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col md="6" className="px-0">
                  <ul className="nl-footer-social justify-content-center justify-content-md-end pt-4 pt-md-0 ">
                    <li>
                      <NioMedia
                        href="#"
                        size="sm"
                        icon="facebook-f"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        size="sm"
                        icon="twitter"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        size="sm"
                        icon="linkedin"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        size="sm"
                        icon="telegram"
                        variant="primary-soft"
                      />
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 3 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="nl-footer-content flex-lg-row-reverse justify-content-start  justify-content-lg-between border-bottom  pt-5 pt-md-7 pt-lg-120 pb-5 pb-md-7">
                <Col lg="6" xxl="6">
                  <Row className="gy-5 gy-lg-0 justify-content-between">
                    <Col sm="8" md="7">
                      <div className="nl-footer-info">
                        <h5 className="mb-4 text-white">Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/features"
                            >
                              Features
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/about">
                              About
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/pricing"
                            >
                              Pricing
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link className="fs-7 text-capitalize" to="/blogs">
                              Blog
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/blog-details"
                            >
                              Blog Post
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/customer-testimonials"
                            >
                              Customer Reviews
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/help-center"
                            >
                              Help Center
                            </Link>
                          </Col>
                          <Col as="li" xs="6">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/contact-us"
                            >
                              Contact
                            </Link>
                          </Col>
                        </ul>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="nl-footer-info">
                        <h5 className="mb-4 text-white">Utility Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/sign-up"
                            >
                              Sign up
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/reset-password"
                            >
                              Reset Password
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/404">
                              404 Not Found
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="10" lg="4">
                  <div className="nl-footer-brand nl-footer-info mt-5 mt-md-7 mt-lg-0">
                    <div className="nl-footer-brand-info">
                      <div className="nl-footer-logo mb-3">
                        <NioBrand logo={logoName} variant={logoVariant} />
                      </div>
                      <h4 className="mb-4 text-white">
                        Subscribe To Our Newsletter
                      </h4>
                      <NioSubscribeField />
                      <p className="mt-4">
                        &copy; 2011 - {new Date().getFullYear()}
                        <Link
                          className="text-primary fw-bold"
                          to="https://softnio.com/"
                          target="_blank"
                        >
                          {" "}
                          Softnio{" "}
                        </Link>
                        . All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <ul className="nl-footer-menu">
                    <li>
                      <Link to="#">Company</Link>
                    </li>
                    <li>
                      <Link to="#">Product</Link>
                    </li>
                    <li>
                      <Link to="#">Support</Link>
                    </li>
                    <li>
                      <Link to="#">Office</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom py-5 pb-lg-7">
            <Container>
              <Row className="nl-footer-content align-items-center justify-content-between">
                <Col lg="6" className="px-lg-0">
                  <ul className="nl-footer-social justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                    <li>
                      <NioMedia
                        href="#"
                        border
                        size="sm"
                        rounded="circle"
                        icon="facebook-f"
                        variant="primary"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        border
                        size="sm"
                        rounded="circle"
                        icon="twitter"
                        variant="primary"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        border
                        size="sm"
                        rounded="circle"
                        icon="linkedin"
                        variant="primary"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        border
                        size="sm"
                        rounded="circle"
                        icon="telegram"
                        variant="primary"
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg="6" className="px-lg-0">
                  <p className="fs-8 text-center  text-lg-end">
                    &copy; 2011 - {new Date().getFullYear()}
                    <Link
                      className="text-primary"
                      to="https://softnio.com/"
                      target="_blank"
                    >
                      {" "}
                      Softnio
                    </Link>
                    . All Rights Reserved.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 4 ? (
        <>
          <div className="nl-footer-top pt-7 py-5 py-md-7">
            <Container>
              <div className="nl-footer-content row justify-content-center">
                <Col lg="6">
                  <div className="nl-footer-brand text-center">
                    <div className="nl-footer-logo mb-3">
                      <NioBrand logo={logoName} variant={logoVariant} />
                    </div>
                    <p className="fs-7 mb-0">
                      NioLand is an innovative platform that offers a wide range
                      of services and features to enhance productivity,
                      creativity, and collaboration.
                    </p>
                    <ul className="nl-footer-social justify-content-center pt-5">
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="facebook-f"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="twitter"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="linkedin"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="telegram"
                          variant="primary"
                        />
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>
            </Container>
          </div>
          <div className="nl-footer-bottom">
            <Container>
              <Row className="nl-footer-content align-items-center justify-content-between py-5 pb-lg-7 border-top">
                <Col lg="6">
                  <p className="fs-7 text-center text-lg-start">
                    &copy; 2011 - {new Date().getFullYear()}
                    <Link
                      className="text-primary fw-bold"
                      to="https://softnio.com/"
                      target="_blank"
                    >
                      {" "}
                      Softnio
                    </Link>
                    . All Rights Reserved.
                  </p>
                </Col>
                <Col lg="6">
                  <ul className="nl-footer-copyright justify-content-center justify-content-lg-end">
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        All Rights
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 5 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="nl-footer-content  justify-content-lg-between flex-lg-row-reverse gy-5 gy-md-7 pt-5 pt-md-7 pb-5 pb-md-7 border-bottom">
                <Col lg="8" xl="7" xxl="6">
                  <Row className="gy-5 gy-lg-0 justify-content-between">
                    <Col md="4" xl="6">
                      <div className="nl-footer-info">
                        <h5 className="mb-3 mb-md-4">Contact Info</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              to="mailto:info@softnio.com"
                              className="fs-7 text-capitalize d-flex align-items-center gap-1"
                            >
                              <NioIcon name="mail" />
                              <span className="text-lowercase">
                                contact@nioland.com
                              </span>
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              to="tel:+1-800-222-4545"
                              className="fs-7 text-capitalize d-flex align-items-center gap-1"
                            >
                              <NioIcon name="call-alt" />
                              <span className="text-lowercase">
                                1-800-222-4545
                              </span>
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              to="https://www.google.com/maps"
                              target="_blank"
                              className="fs-7 text-capitalize d-flex align-items-center gap-1"
                            >
                              <NioIcon name="map-pin" />
                              <span className="text-lowercase">
                                123 Main Street, Anytown, USA
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs="6" md="3">
                      <div className="nl-footer-info">
                        <h5 className="mb-3 mb-md-4">Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/features"
                            >
                              Features
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/about">
                              About
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/pricing"
                            >
                              Pricing
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/blogs">
                              Blog
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/blog-details"
                            >
                              Blog Post
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs="6" md="3">
                      <div className="nl-footer-info">
                        <h5 className="mb-3 mb-md-4">Utility Pages</h5>
                        <ul className="row gy-1 gy-sm-3">
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/sign-up"
                            >
                              Sign up
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/reset-password"
                            >
                              Reset Password
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link
                              className="fs-7 text-capitalize"
                              to="/auth/forgot-password"
                            >
                              Forgot Password
                            </Link>
                          </li>
                          <li className="col-12">
                            <Link className="fs-7 text-capitalize" to="/404">
                              404 Not Found
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="8" lg="4">
                  <div className="nl-footer-brand">
                    <div className="nl-footer-brand-info">
                      <div className="nl-footer-logo">
                        <NioBrand logo={logoName} variant={logoVariant} />
                      </div>
                      <p className="mb-0">
                        Nioland is a powerful HTML theme designed for app, SaaS,
                        & tech startups, including all the important features.
                      </p>
                    </div>
                    <ul className="nl-footer-social pt-5 pt-lg-6">
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="facebook-f"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="twitter"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="linkedin"
                          variant="primary"
                        />
                      </li>
                      <li>
                        <NioMedia
                          href="#"
                          border
                          rounded="circle"
                          size="sm"
                          icon="telegram"
                          variant="primary"
                        />
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom py-5 pb-lg-7">
            <Container>
              <Row className="nl-footer-content align-items-center justify-content-between">
                <Col lg="6" className="px-0">
                  <p className="fs-7 text-center text-lg-start">
                    &copy; 2011 -{" "}
                    <span id="currentYear"> {new Date().getFullYear()} </span>
                    <Link
                      className="text-primary fw-bold"
                      to="https://softnio.com/"
                      target="_blank"
                    >
                      Softnio
                    </Link>
                    . All Rights Reserved.
                  </p>
                </Col>
                <Col lg="6" className="px-0">
                  <ul className="nl-footer-copyright justify-content-center justify-content-lg-end">
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        All Rights
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7 text-capitalize" to="#">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 6 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row>
                <Col xs="12">
                  <div
                    className={`nl-footer-content pt-7 pb-5 ${
                      location.pathname === "/index-fintech" ? "pt-lg-160" : ""
                    }  border-bottom`}
                  >
                    <Row className="justify-content-center justify-content-md-between">
                      <Col sm="6">
                        <div className="nl-footer-brand">
                          <div className="nl-footer-brand-info">
                            <div className="nl-footer-logo mb-3 mb-sm-0">
                              <NioBrand logo={logoName} variant={logoVariant} />
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <ul className="nl-footer-social justify-content-sm-end">
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="facebook-f"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="twitter"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="linkedin"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="telegram"
                              variant="primary-soft"
                            />
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="12">
                  <div className="nl-footer-content pt-7 pb-5 pb-lg-7">
                    <Row className="gy-5 gy-xl-0 flex-column-reverse flex-xl-row justify-content-between">
                      <Col xl="7">
                        <Row className="gy-5 gy-lg-0 justify-content-between">
                          <Col xs="6" md="3">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Utility Pages</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link className="fs-7" to="/auth/login">
                                    Login
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/auth/sign-up">
                                    Sign up
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    className="fs-7"
                                    to="/auth/reset-password"
                                  >
                                    Reset Password
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    className="fs-7"
                                    to="/auth/forgot-password"
                                  >
                                    Forgot Password
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/404">
                                    404 Not Found
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs="6" md="3" xl="2">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Pages</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link className="fs-7" to="/features">
                                    Features
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/about">
                                    About
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/pricing">
                                    Pricing
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/blogs">
                                    Blog
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/blog-details">
                                    Blog Post
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col md="6" lg="6">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Contact Info</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link
                                    to="mailto:info@softnio.com"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="mail-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      contact@nioland.com
                                    </span>
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    to="tel:+1-800-222-4545"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="call-alt-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      1-800-222-4545
                                    </span>
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    to="https://www.google.com/maps"
                                    target="_blank"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="map-pin-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      123 Main Street, Anytown, USA
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="8" xl="4">
                        <div className="nl-footer-info">
                          <h5 className="mb-4 text-white">Newsletter</h5>
                          <NioSubscribeField variant={3} />
                          <p className="fs-8 text-capitalize text-white opacity-75 mt-3">
                            <b>Note:</b> It comes equipped with all the
                            essential functionalities necessary to help your
                            business thrive.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom">
            <Container>
              <div className="nl-footer-content  border-top py-5 pb-lg-7">
                <Row className="nl-footer-content align-items-center justify-content-between">
                  <Col lg="6">
                    <p className="fs-7 text-white text-center text-lg-start">
                      &copy; 2011 -{" "}
                      <span id="currentYear"> {new Date().getFullYear()} </span>
                      <Link
                        className="text-primary fw-bold"
                        to="https://softnio.com/"
                        target="_blank"
                      >
                        Softnio
                      </Link>
                      . All Rights Reserved.
                    </p>
                  </Col>
                  <Col lg="6">
                    <ul className="nl-footer-copyright justify-content-center justify-content-lg-end">
                      <li>
                        <Link className="text-capitalize" to="#">
                          All Rights
                        </Link>
                      </li>
                      <li>
                        <Link className="text-capitalize" to="#">
                          Terms & conditions
                        </Link>
                      </li>
                      <li>
                        <Link className="text-capitalize" to="#">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </>
      ) : variant === 7 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="flex-lg-column-reverse">
                <Col xs="12">
                  <div className="nl-footer-content pt-7 pb-5 pb-lg-7">
                    <Row className="gy-5 gy-xl-0 justify-content-between">
                      <Col xl="7">
                        <Row className="gy-5 gy-lg-0 justify-content-between">
                          <Col xs="6" md="3">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Utility Pages</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link className="fs-7" to="/auth/login">
                                    Login
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/auth/sign-up">
                                    Sign up
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    className="fs-7"
                                    to="/auth/reset-password"
                                  >
                                    Reset Password
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    className="fs-7"
                                    to="/auth/forgot-password"
                                  >
                                    Forgot Password
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/404">
                                    404 Not Found
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col xs="6" md="3" xl="2">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Pages</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link className="fs-7" to="/features">
                                    Features
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/about">
                                    About
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/pricing">
                                    Pricing
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/blogs">
                                    Blog
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link className="fs-7" to="/blog-details">
                                    Blog Post
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col md="6" lg="6">
                            <div className="nl-footer-info">
                              <h5 className="mb-4 text-white">Contact Info</h5>
                              <ul className="row gy-2 gy-sm-4">
                                <li className="col-12">
                                  <Link
                                    to="mailto:info@softnio.com"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="mail-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      contact@nioland.com
                                    </span>
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    to="tel:+1-800-222-4545"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="call-alt-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      1-800-222-4545
                                    </span>
                                  </Link>
                                </li>
                                <li className="col-12">
                                  <Link
                                    to="https://www.google.com/maps"
                                    target="_blank"
                                    className="fs-7 text-capitalize d-flex align-items-center gap-1"
                                  >
                                    <NioIcon
                                      name="map-pin-fill"
                                      className="text-primary"
                                    />
                                    <span className="text-lowercase">
                                      123 Main Street, Anytown, USA
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="8" xl="4">
                        <div className="nl-footer-info">
                          <h5 className="mb-4 text-white">Newsletter</h5>
                          <NioSubscribeField rounded variant={3} />
                          <p className="fs-8 text-capitalize text-white opacity-75 mt-3">
                            <b>Note:</b> It comes equipped with all the
                            essential functionalities necessary to help your
                            business thrive.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="12">
                  <div
                    className={`nl-footer-content pt-lg-7 pb-5 ${
                      location.pathname === "/index-fintech" ? "pt-lg-160" : ""
                    }  border-bottom`}
                  >
                    <Row className="justify-content-center justify-content-md-between">
                      <Col sm="6">
                        <div className="nl-footer-brand">
                          <div className="nl-footer-brand-info">
                            <div className="nl-footer-logo mb-3 mb-sm-0">
                              <NioBrand logo={logoName} variant={logoVariant} />
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <ul className="nl-footer-social justify-content-sm-end">
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="facebook-f"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="twitter"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="linkedin"
                              variant="primary-soft"
                            />
                          </li>
                          <li>
                            <NioMedia
                              href="#"
                              rounded="circle"
                              size="sm"
                              icon="telegram"
                              variant="primary-soft"
                            />
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-landing-copyright py-4">
            <Container>
              <p className="fs-9 text-white text-uppercase">
                Copyright &copy;{" "}
                <span className="text-white">{new Date().getFullYear()}</span>{" "}
                NioLand. Template made by{" "}
                <Link
                  to="https://softnio.com/"
                  target="_blank"
                  className="fs-8 text-primary fw-bold"
                >
                  SOFTNIO
                </Link>
              </p>
            </Container>
          </div>
        </>
      ) : variant === 8 ? (
        <>
          <div className="nl-footer-top">
            <Container>
              <Row className="nl-footer-content gy-4 gy-lg-0 justify-content-between align-items-center pt-5 pt-lg-7 pb-5 border-bottom">
                <Col lg="6">
                  <div className="nl-footer-brand">
                    <div className="nl-footer-logo text-center text-lg-start">
                      <NioBrand logo={logoName} variant={logoVariant} />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <ul className="nl-footer-menu">
                    <li>
                      <Link className="fs-7" to="#">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7" to="#">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7" to="#">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link className="fs-7" to="#">
                        Office
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="nl-footer-bottom">
            <Container>
              <Row className="nl-footer-content gy-3 gx-lg-0 align-items-center justify-content-between pt-5 pb-5 pb-lg-7">
                <Col lg="6">
                  <ul className="nl-footer-social justify-content-center justify-content-lg-start">
                    <li>
                      <NioMedia
                        href="#"
                        rounded="circle"
                        size="sm"
                        icon="facebook-f"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        rounded="circle"
                        size="sm"
                        icon="twitter"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        rounded="circle"
                        size="sm"
                        icon="linkedin"
                        variant="primary-soft"
                      />
                    </li>
                    <li>
                      <NioMedia
                        href="#"
                        rounded="circle"
                        size="sm"
                        icon="telegram"
                        variant="primary-soft"
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg="6">
                  <p className="fs-7 text-gray-700 text-center text-lg-end">
                    &copy; 2011 -{" "}
                    <span id="currentYear"> {new Date().getFullYear()} </span>
                    <Link
                      className="text-primary fw-bold"
                      to="https://softnio.com/"
                      target="_blank"
                    >
                      Softnio
                    </Link>
                    . All Rights Reserved.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : variant === 9 ? (
        <>
          <div className="call-to">
            <div className="nl-mask z-1 blur-6"></div>
            <Container>
              <div className="call-to-content z-1 position-relative  py-7">
                <Row className="justify-content-center">
                  <Col lg="8" xl="6">
                    <div className="call-to-info text-center">
                      <NioBrand logo={logoName} variant={logoVariant} />
                      <h2 className="text-white mb-1">
                        Create Better Build Faster
                      </h2>
                      <p className="fs-7 text-white opacity-75 m-0">
                        Everything you need to create your next unique and
                        professional website, including impressive and
                        ready-made pages.
                      </p>
                      <div className="call-to-action pt-5 pt-xl-7">
                        <Link
                          to="https://shorturl.at/nuxL6"
                          target="_blank"
                          className="btn btn-primary mb-1"
                        >
                          <NioIcon name="bag-fill" className="me-2" />
                          Purchase NioLand Now
                        </Link>
                        <Link
                          to="https://1.envato.market/NioLandReact"
                          target="_blank"
                        >
                          <img src="/images/icon/envato.png" alt="envato" />
                          <span>Available only on Envato</span>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="nl-footer-landing-copyright py-3">
            <Container>
              <p className="mb-0 fs-7 text-center text-capitalize">
                Copyright &copy;{" "}
                <span className="text-white">{new Date().getFullYear()}</span>{" "}
                NioLand. Template made by{" "}
                <Link to="https://softnio.com/" target="_blank">
                  Softnio
                </Link>
              </p>
            </Container>
          </div>
        </>
      ) : (
        {
          children,
        }
      )}
    </footer>
  );
}
