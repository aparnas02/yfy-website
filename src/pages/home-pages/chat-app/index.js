import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import video from "./sample website gif (2).gif";
// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";
import analyticsgif from "./output-onlinegiftools (2).gif";
import handgif from "./output-onlinegiftools (1).gif";
import feature1 from "./undraw_Learning_re_32qv.png";
import feature2 from "./undraw_Success_factors_re_ce93.png";
import feature3 from "./undraw_Experience_design_re_dmqq.png";
import feature4 from "./undraw_Referral_re_0aji.png";
import feature5 from "./undraw_design_components_9vy6.png";
import feature6 from "./undraw_Control_panel_re_y3ar.png";
import img1 from "./settings (1).png";

// components
import {
  NioSection,
  NioCount,
  NioButton,
  NioCard,
  NioMedia,
  NioIcon,
  NioField,
  NioSwiper,
} from "../../../components";

// section content
import NioSubscribeField from "../../../components/Forms/NioSubscribeField/NioSubscribeField";
import hrmsgif from "./hrms-and-payroll-2-A85r16x22BcDOJK6.gif";
import payrollgif from "./website gifs.gif";
import payroll from "./PayRoll-website (1).gif";
import FaqContent from "../../../components/PageComponents/Homepages/BusinessDigital/FaqContent/FaqContent";
import TestimonialContent from "../../../components/PageComponents/Homepages/BSManagement/TestimonialContent/TestimonialContent";

function index() {
  return (
    <AppLayout title="Chat App" layoutClass="5">
      {/*  Banner Section Start  */}
      {/* <div className="my-9 mb-3">
        <img
          src={video}
          alt="animated gif"
          width={900}
          style={{
            display: "block",
            margin: "10px auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "6px",
          }}
        />
      </div> */}

      {/*  Banner Section End  */}

      {/*  Support Section Start  */}
      <div className="my-9 mb-3">
        <NioSection
          className="nl-section-support bg-primary-soft overflow-hidden py-2"
          masks={["shape"]}
        >
          <div className="row d-flex justify-content-center align-items-center">
            {/* <span className="nl-section-subtitle">support multiplatform</span> */}
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center">
              <h1>
                {/* <span className="">"</span> */}
                Still using{" "}
                <span
                // className="title-shape title-shape-3 title-shape-3_one"
                >
                  old software
                </span>
                {"  "}in the{" "}
                <span className="" style={{ color: "#6531a8" }}>
                  AI age
                </span>
                ?{/* <span className="">" </span> */}
              </h1>
              <div className="col-md-12 col-lg-12 text-center text-black">
                Upgrade to our next-gen payroll system—automate compliance,
                integrate HRMS, and streamline accounting seamlessly!"
              </div>
            </div>
          </div>

          <NioSection.Content>
            <Tab.Container defaultActiveKey="pills-platform-tab-1">
              <Row className="nl-tab style-2 justify-content-center">
                {/* <Col xs="12">
                <Nav
                  variant="pills"
                  className="justify-content-center gap-3 gap-xl-6 pb-5 pb-lg-7 text-primary"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-1">
                      <NioIcon className="fs-3" name="skype" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-2">
                      <NioIcon className="fs-3" name="twitter" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-3">
                      <NioIcon className="fs-3" name="snapchat" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-4">
                      <NioIcon className="fs-3" name="flickr-round" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-5">
                      <NioIcon className="fs-3" name="telegram" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="pills-platform-tab-6">
                      <NioIcon className="fs-2" name="layout-alt-fill" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col> */}
                {/* Tab content  */}
                <Col lg="7">
                  <Tab.Content className="position-relative">
                    <div className="bg-masks z-n1 bg-masks-3 d-none d-lg-block ">
                      <img
                        src={analyticsgif}
                        alt="object"
                        style={{
                          width: "150px",
                          opacity: 0.5,
                          // marginLeft: "40%",
                          // marginTop: "17%",
                          marginLeft: "53%",
                          marginTop: "77%",
                        }}
                      />
                    </div>
                    <div className="bg-masks z-n1 bg-masks-4 d-none d-lg-block ">
                      <img
                        src={handgif}
                        alt="object"
                        style={{
                          width: "150px",
                          opacity: 0.5,
                          // marginLeft: "-56%",
                          marginLeft: "-79%",
                          marginTop: "67%",
                        }}
                      />
                    </div>
                    <div className="bg-masks z-n1 bg-masks-5 d-none d-lg-block">
                      {/* <img src="images/shapes/waves-4.png" alt="object" /> */}
                    </div>
                    <Tab.Pane eventKey="pills-platform-tab-1">
                      <div
                        className="d-flex justify-content-center"
                        style={{ margin: "10px auto" }}
                      >
                        {/* <img
                        src={payrollgif}
                        alt="object"
                        width={700}
                        // style={{
                        //   // borderRadius: "10px",
                        //   width: "429px",
                        //   marginLeft: "249px",
                        //   marginTop: "-48px",
                        // }}
                        className="overflow-hidden rounded-3"
                      /> */}
                        <img
                          src={video}
                          alt="animated gif"
                          width={900}
                          style={{
                            display: "block",
                            margin: "10px auto",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="pills-platform-tab-2">
                      <img
                        src="images/chat-app/tab-cover-b.jpg"
                        alt="platform-tiles"
                        className="overflow-hidden rounded-3"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-platform-tab-3">
                      <img
                        src="images/chat-app/tab-cover-c.jpg"
                        alt="platform-tiles"
                        className="overflow-hidden rounded-3"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-platform-tab-4">
                      <img
                        src="images/chat-app/tab-cover-d.jpg"
                        alt="platform-tiles"
                        className="overflow-hidden rounded-3"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-platform-tab-5">
                      <img
                        src="images/chat-app/tab-cover-e.jpg"
                        alt="platform-tiles"
                        className="overflow-hidden rounded-3"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-platform-tab-6">
                      <img
                        src="images/chat-app/tab-cover-f.jpg"
                        alt="platform-tiles"
                        className="overflow-hidden rounded-3"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
              <NioSection.Head alignX="center">
                <h4
                  className=""
                  style={
                    {
                      // fontSize: "2Our Client Family0px",
                      // color: "purple",
                      // width: "850px",
                      // marginleft: "-117px",
                      // fontStyle: "normal",
                    }
                  }
                >
                  Precision, Simplicity & Compliance Guaranteed!!
                </h4>
              </NioSection.Head>

              <div className="col-md-12 col-lg-12 text-black d-flex justify-content-center">
                <span className="mx-3 d-flex justify-content-center">
                  Discover yfyapp{" "}
                </span>
                <NioButton
                  href="/auth/sign-up"
                  className="btn-primary"
                  label="Explore"
                />
              </div>
            </Tab.Container>
            {/* <div className="text-center pt-5 pt-lg-7">
            <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
              <li>
                <NioButton
                  href="/features"
                  className="btn-primary"
                  label="Explore All Features"
                />
              </li>
              <li>
                <NioButton
                  href="#"
                  className="btn-outline-dark"
                  label="Learn More"
                />
              </li>
            </ul>
          </div> */}
          </NioSection.Content>
        </NioSection>
      </div>
      {/*  Support Section End  */}

      {/*  Features Section Start  */}
      <NioSection className="py-7 py-lg-90">
        <NioSection.Content className="d-flex flex-column gap-120 text-black">
          <Row className="align-items-center flex-lg-row-reverse justify-content-between">
            <Col lg="6" xl="5">
              <div
                className="nl-feature-overview-img text-center mb-5 mb-lg-0 mr-2"
                style={{ width: "550px" }}
              >
                {/* <img
                  src="images/chat-app/section-cover-1-a.png"
                  alt="cover-fd"
                  className="base"
                /> */}
                <img src={payroll} alt="cover-bg" />
                <div className="children children-center w-100 h-100">
                  {/* <img src={payroll} alt="cover-bg" /> */}
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <div className="nl-section-head pb-5">
                  {/* <span className="nl-section-subtitle mb-lg-2">
                    Boost revenue
                  </span> */}
                  <h2 className="nl-section-title" style={{ color: "#6531a8" }}>
                    Product Overview
                  </h2>
                </div>
                <ul className="nl-timeline d-flex flex-column gap-3 gap-md-5">
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          Yfyapp revolutionizes your organizational workflow by
                          seamlessly integrating attendance, leave management,
                          reimbursements, payroll processing, and compliance
                          into your existing finance and operations.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          This holistic approach ensures that payroll and HR
                          functions are perfectly aligned with your business
                          activities, significantly reducing administrative
                          overhead and enhancing resource efficiency.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          With real-time data access, stakeholders can make
                          swift, informed decisions, driving strategic actions
                          precisely when needed.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <ul className="d-flex gap-3 flex-wrap align-items-center pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="/features"
                      className="btn-primary"
                      label="Explore All Features"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      className="btn-outline-dark"
                      label="Learn More"
                    />
                  </li>
                </ul> */}
              </div>
            </Col>
          </Row>
          {/* <Row className="align-items-center justify-content-between">
            <Col lg="6" xl="5">
              <div className="nl-feature-overview-img text-center mb-5 mb-lg-0">
                <img
                  src="images/chat-app/section-cover-2-a.png"
                  alt="cover-bg"
                  className="base"
                />
                <div className="children children-center w-100 h-100">
                  <img
                    src="images/chat-app/section-cover-2.png"
                    alt="cover-fd"
                  />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <div className="nl-section-head pb-5">
                  <span className="nl-section-subtitle text-warning mb-lg-2">
                    chatBots
                  </span>
                  <h2 className="nl-section-title">
                    Balance AI automation and the human touch
                  </h2>
                </div>
                <ul className="nl-timeline d-flex flex-column gap-3 gap-md-5">
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-warning-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          {" "}
                          Harmonize AI automation and human touch for optimal
                          customer experiences.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-warning-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          {" "}
                          Blend technology and human interaction for a perfect
                          customer engagement balance.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex gap-3 flex-wrap align-items-center pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="#"
                      className="btn-warning"
                      label="Meet ChatBot"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      className="btn-outline-dark"
                      label="Learn More"
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row> */}
          {/* <Row className="align-items-center flex-lg-row-reverse justify-content-between">
            <Col lg="6" xl="5">
              <div className="nl-feature-overview-img text-center mb-5 mb-lg-0">
                <img
                  src="images/chat-app/section-cover-3-a.png"
                  alt="cover-bg"
                  className="base"
                />
                <div className="children children-center w-100 h-100">
                  <img
                    src="images/chat-app/section-cover-3.png"
                    alt="cover-fd"
                    className="mt-7"
                  />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <div className="nl-section-head pb-5">
                  <div className="nl-section-subtitle text-danger mb-lg-2">
                    Great user experience
                  </div>
                  <h2 className="nl-section-title">
                    Building blocks of remarkable experience
                  </h2>
                </div>
                <ul className="nl-timeline d-flex flex-column gap-3 gap-md-5">
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          Build remarkable experiences with innovation,
                          personalization, and seamless interactions.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item p-0">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          Elevate experiences through innovation,
                          personalization, and seamless interactions.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex gap-3 flex-wrap align-items-center pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="/features"
                      className="btn-red"
                      label="Explore All Features"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      className="btn-outline-dark"
                      label="Learn More"
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row> */}
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End  */}

      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="justify-content-between align-items-center ">
            <Col lg="12" className="d-flex justify-content-center">
              <div className="nl-section-head text-center text-lg-start pb-5 pb-lg-0">
                <h2 style={{ color: "#6531a8" }}>Top Capabilities</h2>
              </div>
            </Col>
            {/* <Col lg="6">
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-end">
                <li>
                  <NioButton
                    href="#"
                    label="Open Creator Account"
                    className="btn-outline-dark border-gray-50"
                  />
                </li>
              </ul>
            </Col> */}
            <NioSection.Content className="nl-section-content py-5">
              <TestimonialContent />
            </NioSection.Content>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/*  Video Section Start  */}
      {/* <NioSection className="nl-video-section bg-primary-soft overflow-hidden">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">How it works?</span>
          <h2 className="nl-section-title">
            Take a Tour and See How NioLand
            <span className="title-shape title-shape-3 title-shape-3_one">
              works?
            </span>
          </h2>
          <p className="mb-0">
            Explore NioLand through a guided tour and discover how our platform
            works to revolutionize your business.{" "}
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-video nl-video-s1">
                <div className="nl-video-inner">
                  <div className="nl-video-content">
                    <div className="nl-video-img text-center">
                      <img
                        src="images/chat-app/section-cover-4.jpg"
                        alt="cover"
                        className="rounded-3"
                      />
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xl"
                        rounded="circle"
                        icon="play-fill text-white"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="text-bg-red shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Video Section End  */}

      {/*  Funfact Section Start  */}
      {/* <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 justify-content-lg-around">
            <Col sm="6" lg="3">
              <div className="position-relative text-center">
                <div className="mb-5">
                  <img src="images/chat-app/icon-feature-1.png" alt="icon" />
                </div>
                <NioCount
                  className="h1 d-inline-block mb-2"
                  end={75}
                  decimals={3}
                  suffix=",000"
                  decimal=","
                />
                <p className="mb-0">Chats Monthly</p>
              </div>
            </Col>
            <Col sm="6" lg="3">
              <div className="position-relative text-center">
                <div className="mb-5">
                  <img src="images/chat-app/icon-feature-2.png" alt="icon" />
                </div>
                <NioCount
                  className="h1 d-inline-block mb-2"
                  end={150}
                  suffix="+"
                />
                <p className="mb-0">Connected Countries</p>
              </div>
            </Col>
            <Col sm="6" lg="3">
              <div className="position-relative text-center">
                <div className="mb-5">
                  <img src="images/chat-app/icon-feature-3.png" alt="icon" />
                </div>
                <NioCount
                  className="h1 d-inline-block mb-2"
                  end={200}
                  decimals={3}
                  decimal=","
                />
                <p className="mb-0">Support Report</p>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Funfact Section End  */}

      {/*  Integrate Section Start  */}
      <NioSection className="nl-section-integrate bg-primary-soft overflow-hidden pb-7 pb-lg-0 py-lg-0">
        <NioSection.Content className="position-relative">
          <Row className="justify-content-between">
            <Col lg="5" className="align-self-center">
              <div className="nl-section-head text-center text-lg-start text-black py-7 py-lg-220">
                {/* <span className="nl-section-subtitle">Easy integration</span> */}
                <h2 className="nl-section-title mb-2">
                  <span
                    // className="title-shape title-shape-3 title-shape-3_two"
                    style={{ color: "#6531a8" }}
                  >
                    Our Client Family
                  </span>{" "}
                  {/* with 200+ tools. */}
                </h2>
                <p className="mb-0">
                  Connect NioLand with apps you use and love. Chat with your
                  customers, send their details to your CRM, manage orders and
                  accept payments.
                </p>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-start pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="/auth/sign-up"
                      className="btn-primary"
                      label="Sign Up For Free"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      className="btn-outline-dark"
                      label="All Integrations"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="infinite-scroll">
                <div className="infinite-scroll-col infinite-scroll-init infinite-scroll-lg-vertical infinite-scroll-horizontal infinite-scroll-duration-12">
                  {/* {["11", "12", "13", "14", "15", "16", "17", "18", "19"]?.map(
                    (tool, idx) => (
                      <div className="infinite-scroll-card" key={idx}>
                        <img src={`images/tools/${tool}.png`} alt="tool" />
                      </div>
                    )
                  )} */}
                </div>
                <div className="infinite-scroll-col infinite-scroll-init infinite-scroll-lg-verticalAlternate infinite-scroll-horizontalAlternate infinite-scroll-duration-12">
                  {["11", "12", "13", "14", "15", "16", "17", "18", "19"]?.map(
                    (tool, idx) => (
                      <div className="infinite-scroll-card" key={idx}>
                        <img src={`images/tools/${tool}.png`} alt="tool" />
                      </div>
                    )
                  )}
                </div>

                <div className="infinite-scroll-col infinite-scroll-init infinite-scroll-lg-vertical infinite-scroll-horizontal infinite-scroll-duration-12">
                  {/* {["9", "8", "7", "6", "5", "4", "3", "2", "1"]?.map(
                    (tool, idx) => (
                      <div className="infinite-scroll-card" key={idx}>
                        <img src={`images/tools/${tool}.png`} alt="tool" />
                      </div>
                    )
                  )} */}
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Integrate Section End  */}

      {/*  Testimonial Section Start  */}
      <NioSection className="nl-section-testimonial py-7 py-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">testimonials</span>
          <h2 className="nl-section-title">
            Our <span className="title-shape title-shape-3">customers</span> Say{" "}
            <br /> it Best.
          </h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-0">
            <Col lg="4">
              <div className="d-flex flex-column gap-3 gap-lg-4">
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        Thank you @NioLand for helping us stay connected to our
                        clients
                      </h5>
                      <p className="fs-8 mb-0">
                        One way we're continuing to serve clients remotely is
                        using online chat software by NioLand. Clients visiting
                        our website can click the chat to get connected to a
                        Navigator in real time. Thank you @NioLand for helping
                        us stay connected to our clients during this time!
                        pic.twitter.com/4SEjAtQ0AR
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/a.jpg" />
                      <div>
                        <h6 className="mb-0">Wade Warren</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        Our @NioLand team calls their happiness scores
                        “Chatisfaction”
                      </h5>
                      <p className="fs-8">
                        We use @NioLand and really love the capabilities and UX!
                        Our @NioLand team calls their happiness scores
                        “Chatisfaction” instead of Satisfaction.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/b.jpg" />
                      <div>
                        <h6 className="mb-0">Jesicca Brown</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        “Great service by Nadim thank you
                      </h5>
                      <p className="fs-8">
                        This morning we completed our 10,000th @NioLand
                        conversation! But why is that we love NioLand so much?
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/c.jpg" />
                      <div>
                        <h6 className="mb-0">Jane Doe</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
              </div>
            </Col>
            <Col lg="4">
              <div className="d-flex flex-column gap-3 gap-lg-4">
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        Really glad to have a call with Dani – super invaluable.{" "}
                      </h5>
                      <p className="fs-8">
                        Hey @LiveChat I just wanted to let you know how great
                        your service worked for me during my recent launch. I
                        was able to connect with my potential students in a way
                        I never have been able to before. And I had my best
                        launch ever. #Thanks
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/d.jpg" />
                      <div>
                        <h6 className="mb-0">Kevin Martin</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        The Services provided are really great, we received a
                        genuine advice and at very reasonable cost.
                      </h5>
                      <p className="fs-8">
                        One of my favorite things in the entire world is
                        randomly jumping into chat on our site (shoutout
                        @NioLand ). It's super nice to just talk to your
                        customers, kind of reminds you why you do what you do.
                        If you have chat and have never been in it, I highly
                        recommend it. #eComTips
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/e.jpg" />
                      <div>
                        <h6 className="mb-0">Alex Chance</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        Just came back to home and should say that it is
                        definitely a great experience.
                      </h5>
                      <p className="fs-8">
                        I do love your app @NioLand - in less than 24 hours I
                        booked a $250 sale. What can I say? I'm a sucker for a
                        good ROI!
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/f.jpg" />
                      <div>
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
              </div>
            </Col>
            <Col lg="4">
              <div className="d-flex flex-column gap-3 gap-lg-4">
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        Hannah helped me cover a lot during a short time!
                      </h5>
                      <p className="fs-8">
                        Thank you @mariuszcieply iam using @NioLand for more
                        than 2 years it's better than any other NioLand products
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/g.jpg" />
                      <div>
                        <h6 className="mb-0">Kamran Adil</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        I had a great time chatting with Vassilena!{" "}
                      </h5>
                      <p className="fs-8">
                        I want to thank @NioLand too!! We have used them for the
                        past 10 years and recently, after an upgrade, had a
                        problem in a magento install, yet they hung in there and
                        the support team worked their magic. Thanks to all!
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/h.jpg" />
                      <div>
                        <h6 className="mb-0">Alex Hales</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column gap-5">
                    <div>
                      <h5 className="mb-2">
                        I tried the Hair mask first and its the best one I've
                        ever tried love it.
                      </h5>
                      <p className="fs-8">
                        One way we're continuing to serve clients remotely is
                        using online chat software by NioLand. Clients visiting
                        our website can click the chat to get connected to a
                        Navigator in real time. Thank you @NioLand for helping
                        us stay connected to our clients during this time!
                        pic.twitter.com/4SEjAtQ0AR
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <NioMedia rounded="circle" img="images/avatar/i.jpg" />
                      <div>
                        <h6 className="mb-0">Mark Hardson</h6>
                        <span className="d-block fs-8">@cryptomil</span>
                      </div>
                    </div>
                  </NioCard.Body>
                </NioCard>
              </div>
            </Col>
          </Row>
          <div className="text-center pt-5">
            <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
              <li>
                <NioButton
                  href="/auth/sign-up"
                  className="btn-primary"
                  label="Sign Up For Free"
                />
              </li>
              <li>
                <NioButton
                  href="/auth/login"
                  className="btn-outline-dark"
                  label="Login To Your account"
                />
              </li>
            </ul>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}
      {/*  Faqs Section Start   */}

      {/*  Faqs Section End   */}
      {/*  Faq Section Start   */}
      <NioSection className="pt-7 pt-lg-120">
        <Row className="justify-content-center">
          <Col xl="7">
            <div className="nl-section-head pb-7 text-center">
              <span className="nl-section-subtitle mb-2">faqs</span>
              <div>
                <h2 className="nl-section-title" style={{ color: "#6531a8" }}>
                  Frequently Asked Questions
                </h2>
                <p className="mb-0 text-black">
                  Find answers to commonly asked questions about our product or
                  service in our comprehensive FAQ section.
                </p>
              </div>
              {/* <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton
                    href="#"
                    className="btn-primary"
                    icon="arrow-right after"
                    label="Read All Faqs"
                  />
                </li>
              </ul> */}
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col lg="12">
              <FaqContent />
            </Col>
            {/* <Col lg="4">
              <NioCard className="bg-gray">
                <NioCard.Body>
                  <div className="mb-5">
                    <NioMedia
                      size="xl"
                      border
                      rounded="circle"
                      icon="chat-fill"
                      variant="purple"
                      className="mb-5"
                    />
                    <h5 className="m-0 mb-2">
                      Do you need any help? Get in touch with our support team.
                    </h5>
                    <p className="fs-7 mb-0 text-black">
                      Lorem ipsum dolor sit amet, consectet adipiscing elit.
                      Consequat aliquet soll ac.
                    </p>
                  </div>
                  <Link
                    to="#"
                    className="btn-link fs-7 text-purple text-lowercase"
                  >
                    <span>support@nioland.com</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col> */}
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Faq Section End   */}

      {/*  Support Section End  */}
      {/* <NioSection className="bg-primary-soft pb-0 pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col xl="6">
              <div className="nl-section-head text-center">
                <ul className="rating d-flex align-items-center justify-content-center gap-1 mb-2">
                  <li>
                    <NioIcon name="star-fill" className="text-warning" />
                  </li>
                  <li>
                    <NioIcon name="star-fill" className="text-warning" />
                  </li>
                  <li>
                    <NioIcon name="star-fill" className="text-warning" />
                  </li>
                  <li>
                    <NioIcon name="star-fill" className="text-warning" />
                  </li>
                  <li>
                    <NioIcon name="star-fill" className="text-warning" />
                  </li>
                </ul>
                <div>
                  <h2 className="nl-section-title">
                    Our Support Heroes Are Here For You 24/7
                  </h2>
                  <p className="mb-0">
                    Meet our world famous support team. They are fast, they are
                    smart, and they will help you out any time day or night!
                  </p>
                </div>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5 pt-lg-7">
                  <li>
                    <NioButton
                      href="#"
                      className="btn-primary"
                      label="Chat With Us"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="/contact-us"
                      className="btn-outline-dark"
                      label="Contact Us"
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="nl-support-thumb mb-n2">
            <img src="images/chat-app/section-cover-5.png" alt="thumb" />
          </div>
        </NioSection.Content>
      </NioSection> */}
      {/*  Support Section End  */}

      {/*  Trial Section Start  */}
      {/* <NioSection className="bg-warning">
        <Row className="justify-content-center">
          <Col xl="10">
            <div className="nl-section-head text-center">
              <h2 className="display-3 mb-3">
                Start a free LiveChat trial now!
              </h2>
              <div className="col-lg-7 mx-auto">
                <p className="fs-5 text-dark ">
                  Supercharge your website and social media profiles. Turn
                  visits into sales, customer into fans.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col md="10" lg="8" xl="6">
              <div>
                <div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Row className="gy-3 gx-3">
                      <Col md="9">
                        <NioField.Input
                          className="mb-4 mb-md-0"
                          placeholder="Enter Your Email"
                        />
                      </Col>
                      <Col md="3">
                        <input
                          type="submit"
                          className="btn btn-danger btn-block h-100"
                          value="Sign Up Free"
                        />
                      </Col>
                    </Row>
                  </form>
                </div>
                <ul className="d-flex flex-wrap align-items-center justify-content-around pt-5">
                  <li className="text-dark">
                    <NioIcon name="check-circle" className="me-1" />
                    <span className="fs-6">Free 14-day trial</span>
                  </li>
                  <li className="text-dark">
                    <NioIcon name="check-circle" className="me-1" />
                    <span className="fs-6">Ticketing System</span>
                  </li>
                  <li className="text-dark">
                    <NioIcon name="check-circle" className="me-1" />
                    <span className="fs-6">Analytics</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Trial Section End  */}

      {/*  NewsLetter Section Start   */}
      <NioSection className="nl-section nl-section-nwsletter pb-0 pt-7 pt-lg-120">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">
                Join the 5000+ People That Uses Softnio Products.
              </p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="5">
            <NioSubscribeField />
          </Col>
        </Row>
      </NioSection>
      {/*  NewsLetter Section End   */}
    </AppLayout>
  );
}

export default index;
