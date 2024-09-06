import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// components
import {
  NioSection,
  NioMedia,
  NioIcon,
  NioButton,
  NioCard,
  NioBadge,
  NioScrollCarousel,
} from "../../../components";

function index() {
  return (
    <AppLayout title="Business Analytics" footerVariant={2} layoutClass="17">
      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-business-analytics overflow-hidden">
        <div className="nl-banner-wrap">
          <div className="container position-static">
            <Row className="justify-content-center position-static align-items-center">
              <Col className="col-sm-10 col-lg-8 col-xl-6">
                <div className="pb-md-7 pb-xl-0">
                  <div className="nl-banner-brand mb-5">
                    <div className="icon">
                      <img
                        src="images/business-analytics/banner-icon.png"
                        alt="banner-icon"
                      />
                    </div>
                    <div className="info">
                      <div>
                        <span>Featured on</span>
                        <h6>Product Hunt</h6>
                      </div>
                      <div className="count">
                        <em className="icon ni ni-sort-up-fill text-success"></em>
                        <p className="fs-8">786</p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-5 pb-lg-7 text-center text-xl-start">
                    <h1 className="text-capitalize mb-2">
                      {" "}
                      Introducing Cloudly, the one stop solution for your
                      business analytics{" "}
                    </h1>
                    <p>
                      Cloudly is your ultimate destination for comprehensive
                      business analytics. With powerful features and intuitive
                      design, it's the one-stop solution to unlock insights and
                      drive data-driven decisions for your business.
                    </p>
                  </div>
                  <ul className="d-flex flex-wrap gap gy-3 align-items-center justify-content-center justify-content-xl-start">
                    <li>
                      <NioButton
                        href="#"
                        label="Get Started"
                        icon="arrow-right after ms-1"
                        className="btn-primary align-items-center"
                      />
                    </li>
                    <li>
                      <NioButton
                        href="#"
                        label="Learn More"
                        className="btn-outline-primary"
                      />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl="6">
                <div className="nl-frame nl-frame-13 pt-7 pt-xl-0">
                  <img
                    src="images/business-analytics/banner-cover.png"
                    alt="business-analytics"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Features Section Start  */}
      <NioSection className="bg-blue-700 py-lg-7">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col xl="10" xxl="8">
              <h5 className="text-gray text-center fw-normal mb-5">
                over 32K+ software business growing with NioLand
              </h5>
              <Row className="gy-2 gap-sm-2 justify-content-center text-center align-items-center">
                {["a", "b", "c", "d", "e"].map((brand, idx) => (
                  <Col key={idx} xs="4" sm="3" lg="2">
                    <div className="nl-brand">
                      <Link to="#">
                        <img
                          src={`images/brands/${brand}-light.png`}
                          alt="brand"
                        />
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End */}

      {/* Data - Service Section Start */}
      <NioSection className="nl-section-data py-7 py-lg-120">
        <Row>
          <Col xxl="7">
            <div className="pb-5 pb-sm-7">
              <h2 className="display-1 text-indigo-100">
                <span className="text-primary d-lg-block">Data,</span> at your
                service
              </h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 gx-xl-7">
            <Col md="6" lg="4">
              <NioCard className="card-shadow-yellow bg-yellow-400 overflow-hidden border-0 h-100">
                <NioCard.Body>
                  <h4 className="mb-1">Multiple sources, one truth.</h4>
                  <p className="fw-medium">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                </NioCard.Body>
                <div className="text-center">
                  <img
                    src="images/business-analytics/card-1-a.png"
                    alt="card-cover"
                  />
                </div>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="card-shadow-cyan bg-teal-600 overflow-hidden border-0 h-100">
                <NioCard.Body>
                  <h4 className="mb-1">The basics are always free.</h4>
                  <p className="fw-medium">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                </NioCard.Body>
                <div className="text-center">
                  <img
                    src="images/business-analytics/card-1-b.png"
                    alt="card-cover"
                  />
                </div>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="card-shadow-purple bg-pink-500 overflow-hidden border-0 h-100">
                <NioCard.Body>
                  <h4 className="mb-1">Modular customization.</h4>
                  <p className="fw-medium">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </p>
                </NioCard.Body>
                <div className="text-end me-n2">
                  <img
                    src="images/business-analytics/card-1-c.png"
                    alt="card-cover"
                  />
                </div>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Data - Service Section End */}

      {/* Platform Section Start */}
      <NioSection className="overflow-hidden bg-indigo-700 pb-xl-0">
        <Row className="justify-content-center">
          <Col lg="8" xl="6">
            <div className="nl-section-head text-center">
              <h2 className="display-3 text-white mb-2">
                A new approach{" "}
                <span className="d-lg-block text-indigo-100">to platform</span>
              </h2>
              <p className="text-white mb-0">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam.
              </p>
              <ul className="d-flex flex-wrap gap gy-3 align-items-center justify-content-center mt-5">
                <li>
                  <NioButton
                    href="#"
                    label="Get Started"
                    icon="arrow-right after"
                    className="btn-white text-primary align-items-center"
                  />
                </li>
                <li>
                  <NioButton
                    href="#"
                    label="Learn More"
                    className="btn-outline-white"
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gx-2 gy-2 gy-xl-0 justify-content-xl-center mb-xl-n2">
            <Col sm="6" lg="4" xl="2">
              <NioCard className="bg-blue-700 border-4 border-indigo-100 rounded-bottom-xl-0 h-100">
                <NioCard.Body className="d-flex flex-column align-items-center text-center justify-content-between gap-5">
                  <NioMedia size="2xl" variant="red" icon="layers-fill" />
                  <div>
                    <h4 className="text-white">Overview</h4>
                    <p className="fs-8 text-white mb-0">
                      Lorem ipsum dolor sit amet conctetur adip.
                    </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Add View"
                    className="btn-primary text-nowrap rounded"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col sm="6" lg="4" xl="2">
              <NioCard className="bg-blue-700 border-4 border-indigo-100 h-100">
                <NioCard.Body className="d-flex flex-column align-items-center text-center justify-content-between gap-5">
                  <NioMedia size="2xl" variant="teal-600" icon="mail-fill" />
                  <div>
                    <h4 className="text-white">Reports</h4>
                    <p className="fs-8 text-white mb-0">
                      Lorem ipsum dolor sit amet conctetur adip.
                    </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Add View"
                    className="btn-primary text-nowrap rounded"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col sm="6" lg="4" xl="2">
              <NioCard className="bg-blue-700 border-4 border-indigo-100 h-100">
                <NioCard.Body className="d-flex flex-column align-items-center text-center justify-content-between gap-5">
                  <NioMedia size="2xl" variant="pink-500" icon="eye-fill" />
                  <div>
                    <h4 className="text-white">Marketing</h4>
                    <p className="fs-8 text-white mb-0">
                      Lorem ipsum dolor sit amet conctetur adip.
                    </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Add View"
                    className="btn-primary text-nowrap rounded"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col sm="6" lg="4" xl="2">
              <NioCard className="bg-blue-700 border-4 border-indigo-100 h-100">
                <NioCard.Body className="d-flex flex-column align-items-center text-center justify-content-between gap-5">
                  <NioMedia size="2xl" variant="yellow" icon="users-fill" />
                  <div>
                    <h4 className="text-white">Cohorts</h4>
                    <p className="fs-8 text-white mb-0">
                      Lorem ipsum dolor sit amet conctetur adip.
                    </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Add View"
                    className="btn-primary text-nowrap rounded"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col sm="6" lg="4" xl="2">
              <NioCard className="bg-blue-700 border-4 border-indigo-100 h-100">
                <NioCard.Body className="d-flex flex-column align-items-center text-center justify-content-between gap-5">
                  <NioMedia size="2xl" variant="teal-600" icon="sign-usd-alt" />
                  <div>
                    <h4 className="text-white">Finance</h4>
                    <p className="fs-8 text-white mb-0">
                      Lorem ipsum dolor sit amet conctetur adip.
                    </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Add View"
                    className="btn-primary text-nowrap rounded"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Platform Section End */}

      {/* Setup Section Start */}
      <NioSection className="bg-teal-600" masks={["shape-44"]}>
        <NioSection.Content>
          <Row className="align-items-center justify-content-between">
            <Col lg="5" xl="4">
              <div className="nl-section-head text-center text-lg-start pb-7 pb-lg-0">
                <h2 className="display-1">
                  <span className="text-white">Super Simple</span> Setup
                </h2>
                <p className="fs-5 fw-bold mb-0">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus .{" "}
                </p>
                <ul className="d-flex flex-wrap gap gy-3 align-items-center justify-content-center justify-content-lg-start pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="#"
                      label="Get Started"
                      icon="arrow-right after"
                      className="btn-white text-teal-600"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      label="Learn More"
                      className="btn-outline-white"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <ul>
                  <li className="d-flex gap-2 gap-sm-4 mb-6 mb-lg-7">
                    <NioMedia
                      size="xl"
                      rounded="circle"
                      variant="yellow"
                      className="border border-2 border-dark"
                    >
                      <span className="fw-bold">1</span>
                    </NioMedia>
                    <div>
                      <ul className="d-flex flex-wrap gap gy-3 align-items-center gap-3 mb-3">
                        <li>
                          <Link to="#">
                            <img
                              src="images/icon/nioland.png"
                              alt="linked-in"
                            />
                          </Link>
                        </li>
                      </ul>
                      <div>
                        <h3>Connect NioLand</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipiscing eli
                          mattis sit phasellus .
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex gap-2 gap-sm-4 mb-6 mb-lg-7">
                    <NioMedia
                      size="xl"
                      rounded="circle"
                      variant="danger"
                      className="border border-2 border-dark"
                    >
                      <span className="fw-bold">2</span>
                    </NioMedia>
                    <div>
                      <ul className="d-flex flex-wrap gap gy-3 align-items-center gap-3 mb-3">
                        <li>
                          <Link to="#">
                            <img
                              src="images/icon/facebook.png"
                              alt="facebook"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src="images/icon/twitter.png" alt="twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src="images/icon/discord.png" alt="discord" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img
                              src="images/icon/linked-in.png"
                              alt="linked-in"
                            />
                          </Link>
                        </li>
                      </ul>
                      <div>
                        <h3>Connect you channels</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipiscing eli
                          mattis sit phasellus .
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex gap-2 gap-sm-4">
                    <NioMedia
                      size="xl"
                      rounded="circle"
                      variant="purple-500"
                      className="border border-2 border-dark"
                    >
                      <span className="fw-bold">3</span>
                    </NioMedia>
                    <div>
                      <ul className="d-flex flex-wrap gap gy-3 align-items-center gap-3 mb-3">
                        <li>
                          <Link to="#">
                            <img src="images/icon/union.png" alt="union" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img
                              src="images/icon/circle-lotus.png"
                              alt="lotus"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src="images/icon/lotus.png" alt="lotus" />
                          </Link>
                        </li>
                      </ul>
                      <div>
                        <h3>Multiple source, one truth</h3>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipiscing eli
                          mattis sit phasellus .
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Setup Section End */}

      {/* Features Section Start */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content className="d-flex flex-column gap-7 gap-lg-120">
          <Row className="flex-lg-row-reverse align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-frame mb-5 mb-md-6">
                <img
                  src="images/business-analytics/section-cover-1.png"
                  alt="section-cover"
                />
              </div>
            </Col>
            <Col lg="5">
              <div>
                <div className="pb-5 pb-sm-7">
                  <h2 className="display-1 text-primary">Platform</h2>
                  <p className="h3">
                    Introducing Tydo’s Platform, the home for your store’s
                    analytics.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-primary"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-primary"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-primary"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                  </ul>
                  <div>
                    <NioButton
                      href="#"
                      label="Learn More"
                      icon="arrow-right after"
                      className="btn-outline-dark"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-end justify-content-between">
            <Col lg="6">
              <div className="nl-frame mb-5 mb-md-6 mb-lg-0">
                <img
                  src="images/business-analytics/section-cover-2.png"
                  alt="section-cover"
                />
              </div>
            </Col>
            <Col lg="5">
              <div>
                <div className="pb-5 pb-sm-7">
                  <h2 className="display-1 text-teal-600"> Portfolio</h2>
                  <p className="h3">
                    Meet your analytics hub, one single space to manage multiple
                    stores.
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-teal-600"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-teal-600"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-teal-600"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                  </ul>
                  <div>
                    <NioButton
                      href="#"
                      label="Learn More"
                      icon="arrow-right after"
                      className="btn-outline-dark"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="flex-lg-row-reverse align-items-end justify-content-between">
            <Col lg="6">
              <div className="nl-frame mb-5 mb-md-6">
                <img
                  src="images/business-analytics/section-cover-3.png"
                  alt="section-cover"
                />
              </div>
            </Col>
            <Col lg="5">
              <div>
                <div className="pb-5 pb-sm-7">
                  <h2 className="display-2 mb-2 text-pink-500">
                    Email Reports
                  </h2>
                  <p className="h3">Data delivered to your inbox.</p>
                </div>
                <div>
                  <ul>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-pink-500"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-pink-500"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                    <li className="d-flex gap-2 mb-3 mb-md-5">
                      <span>
                        <NioIcon
                          name="plus-medi-fill"
                          className="text-pink-500"
                        />
                      </span>
                      <p className="fw-medium">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam.{" "}
                      </p>
                    </li>
                  </ul>
                  <div>
                    <NioButton
                      href="#"
                      label="Learn More"
                      icon="arrow-right after"
                      className="btn-outline-dark"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}

      {/* Case Studios Section Start */}

      <section className="nl-section nl-section-studios bg-blue-700 py-7 py-lg-120">
        <Container>
          <Row className="justify-content-center pb-5">
            <Col lg="10" xl="8">
              <div className="nl-section-head text-center">
                <NioBadge
                  size="sm"
                  label="Case Studies"
                  className="text-bg-white text-primary text-uppercase rounded-pill px-5 fs-8 fw-semibold mb-3"
                />
                <h2 className="h1 text-white">
                  Discover how people & companies are using Cloudly in their
                  work
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <NioScrollCarousel
          selector="one"
          speed={2}
          margin={24}
          direction="ltr"
          className="py-4 border-top border-bottom border-4 border-white"
        >
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Freelancers
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Small Businesses
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              project team
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
        </NioScrollCarousel>
        <NioScrollCarousel
          selector="two"
          speed={2}
          margin={24}
          className="py-4 border-bottom border-4 border-white"
        >
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              companies
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              shopkeepers
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Analytics team
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
        </NioScrollCarousel>
        <NioScrollCarousel
          selector="three"
          speed={2}
          margin={24}
          direction="ltr"
          className="py-4 border-bottom border-4 border-white"
        >
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Groceries data
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Online commerce
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h2 className="h1 text-nowrap text-uppercase text-white m-0">
              Small Businesses
            </h2>
            <div>
              <NioButton
                href="#"
                icon="arrow-right after"
                label="Case Studies"
                className="btn-primary text-nowrap rounded"
              />
            </div>
          </div>
        </NioScrollCarousel>
      </section>
      {/* Case Studios Section End */}

      {/* Best Section Start */}
      <NioSection className="nl-section-best py-7 py-lg-120">
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="nl-section-head text-center">
              <h2 className="display-1">Loved by the best</h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col md="6" lg="4">
              <NioCard className="card-shadow-purple bg-pink-500 border-0 h-100">
                <NioCard.Body className="card-body d-flex flex-column justify-content-between">
                  <h5>
                    “Email Reports is like the daily Morning Brew email for your
                    business.”
                  </h5>
                  <div className="pt-7">
                    <h6 className="fs-7 mb-0">Nick Sharma</h6>
                    <p className="fs-7 fw-medium">CEO, Sharma Brands</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="card-shadow-blue bg-indigo-500 border-0 h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between">
                  <h5>
                    “Having done ecommerce since 1996, Email Reports is the
                    culmination of everything a founder or head of marketing
                    needs to see every morning
                  </h5>
                  <div className="pt-7">
                    <h6 className="fs-7 mb-0">John Carter</h6>
                    <p className="fs-7 fw-medium">Financial Analyst</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="card-shadow-cyan bg-teal-600 border-0 h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between">
                  <h5>
                    “Analytics debt is the silent killer for eCommerce brands.
                    Tydo is like having a rockstar analyst that shines a
                    flashlight on your business and up-levels decision making &
                    operational rigor.”
                  </h5>
                  <div className="pt-7">
                    <h6 className="fs-7 mb-0">Helena Smith</h6>
                    <p className="fs-7 fw-medium">Brand Strategist</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Best Section End */}

      {/* Integrations Section Start */}
      <section className="nl-section-integrations position-relative z-1 overflow-hidden bg-yellow py-7 py-xl-120">
        <div className="nl-frame nl-frame-14 d-none d-xl-block">
          <div className="nl-frame-children nl-frame-children-one">
            <img
              src="images//business-analytics/section-cover-4-a.png"
              alt="section-cover"
            />
          </div>
          <div className="nl-frame-children nl-frame-children-two">
            <img
              src="images//business-analytics/section-cover-4-b.png"
              alt="section-cover"
            />
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" xxl="6">
              <div className="nl-section-head text-center">
                <h2 className="display-1 mb-3">Integrations</h2>
                <p className="mb-5">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam veritatis, obcaecati dolores laborum placeat maxime.{" "}
                </p>
                <NioButton
                  href="#"
                  icon="arrow-right after"
                  label="Learn More"
                  className="btn-primary"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Integrations Section End */}

      {/* Call - To Section Start */}
      <NioSection className="bg-dark mb-n1">
        <Row className="justify-content-center">
          <Col xl="10">
            <div className="nl-section-head pb-0 text-center">
              <h2 className="display-3 text-white">
                Cloudly makes it easy to share and protect your data when you
                want.
              </h2>
              <ul className="d-flex flex-wrap gap gy-3 align-items-center justify-content-center pt-5 pt-lg-7">
                <li>
                  <NioButton
                    href="#"
                    label="Get Started"
                    icon="arrow-right after ms-1"
                    className="btn-primary position-relative z-1 align-items-center"
                  />
                </li>
                <li>
                  <NioButton
                    href="#"
                    label="Learn More"
                    className="ms-n1 btn-outline-white"
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </NioSection>
      {/* Call - To Section End */}
    </AppLayout>
  );
}

export default index;
