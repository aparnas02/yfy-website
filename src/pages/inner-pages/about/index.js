import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// components
import {
  NioButton,
  NioIcon,
  NioSection,
  NioMedia,
  NioCard,
  NioSubscribeField,
  NioBrand,
} from "../../../components";

function index() {
  return (
    <AppLayout title="About">
      {/*  Story Section Start  */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <Row className="justify-content-center">
          <Col lg="8" xl="6">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle mb-2">Our Story</span>
              <h2 className="nl-section-title">The Story Behind NioLand</h2>
              <p className="fs-6 mb-0">
                Discover the inspiring story behind NioLand - how a vision
                became a reality, empowering individuals and businesses to
                thrive in the digital world.
              </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton
                    href="/auth/sign-up"
                    className="btn-primary"
                    label="Join Our Team"
                  />
                </li>
                <li>
                  <NioButton
                    href="#"
                    className="btn-outline-primary"
                    label="Our Values"
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <div className="nl-video rounded-4 bg-blue-100 ">
                <div className="nl-mask shape-1 rounded-4 overflow-hidden"></div>
                <div className="nl-video-inner">
                  <div className="nl-video-logo p-4">
                    <NioBrand />
                  </div>
                  <div className="nl-video-content">
                    <div className="nl-video-img">
                      <img src="images/video/e.png" alt="video" />
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xl"
                        rounded="circle"
                        icon="play-fill"
                        variant="primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Story Section End */}

      {/*  Features Section Start  */}
      <NioSection>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md="6">
              <NioCard>
                <NioCard.Body>
                  <div className="d-flex gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div>
                      <h1 className="text-primary">240%</h1>
                    </div>
                    <div className="m-0">
                      <h4 className="text-capitalize">Company growth</h4>
                      <p className="fs-7">
                        {" "}
                        Unleashing exponential growth through innovation.{" "}
                      </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6">
              <NioCard>
                <NioCard.Body>
                  <div className="d-flex gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div>
                      <h1 className="text-warning">175+</h1>
                    </div>
                    <div className="m-0">
                      <h4 className="text-capitalize">Team members</h4>
                      <p className="fs-7">
                        {" "}
                        Our talented team members are the driving force behind.{" "}
                      </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6">
              <NioCard>
                <NioCard.Body>
                  <div className="d-flex gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div>
                      <h1 className="text-danger">625+</h1>
                    </div>
                    <div className="m-0">
                      <h4 className="text-capitalize">Active projects</h4>
                      <p className="fs-7">
                        {" "}
                        We have a diverse range of active projects that are
                        driving.{" "}
                      </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6">
              <NioCard>
                <NioCard.Body>
                  <div className="d-flex gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div>
                      <h1 className="text-success">99%</h1>
                    </div>
                    <div className="m-0">
                      <h4 className="text-capitalize">Customer satisfaction</h4>
                      <p className="fs-7">
                        {" "}
                        Customer Satisfaction is our top priority.{" "}
                      </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End  */}

      {/*  Journey Section Start  */}
      <NioSection>
        <NioSection.Content>
          <Row className="align-items-lg-end justify-content-lg-between gy-5">
            <Col lg="6">
              <div className="d-flex flex-column">
                <div className="nl-frame mb-5">
                  <img src="images/cover/cover-37.png" alt="cover-bg" />
                </div>
                <div className="nl-section-head pb-0">
                  {/* <span className="nl-section-subtitle mb-2">The journey</span> */}
                  <h4 className="" style={{ color: "#6531a8" }}>
                    Empower Applicants: Seamless Engagement with yfy®'s HRMS
                    Module
                  </h4>
                  <p className="mb-0" style={{ fontSize: "16px" }}>
                    {" "}
                    Empower applicants with HRMS module, granting access to
                    accept interview schedules, request rescheduling and upload
                    documents—all seamlessly through the application interface.
                    Simplify the hiring process and enhance applicant engagement
                    with yfy®'s intuitive features.
                  </p>
                  <ul className="nl-d-flex flex-wrap gap-3 pt-5">
                    <li>
                      <NioButton
                        href="/auth/sign-up"
                        className="btn-primary"
                        label="Join Our Team"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="d-flex flex-column">
                <div className="nl-frame mb-5 mb-lg-0 order-lg-2 mt-lg-3">
                  <img src="images/cover/cover-38.png" alt="cover-bg" />
                </div>
                {/* <div className="nl-section-head pb-0"> */}
                {/* <span className="nl-section-subtitle mb-2">Behind the story</span> */}
                <h4 className="" style={{ color: "#6531a8" }}>
                  Revolutionize Recruitment: Simplify Hiring with HRMS Module
                </h4>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {" "}
                  Our yfy® HRMS module revolutionizes recruitment with features
                  like screening, workflow status tracking and interview
                  scheduling—all within the application. Simplify and streamline
                  your hiring process, from initial screening to final interview
                  arrangements, with yfy® comprehensive HRMS solution.{" "}
                </p>
              </div>
              {/* </div> */}
            </Col>
          </Row>
          <Row className="align-items-lg-end justify-content-lg-between gy-5">
            <Col lg="6">
              <div className="d-flex flex-column">
                <div className="nl-frame mb-5">
                  <img src="images/cover/cover-37.png" alt="cover-bg" />
                </div>
                <div className="nl-section-head pb-0">
                  {/* <span className="nl-section-subtitle mb-2">The journey</span> */}
                  <h4 className="" style={{ color: "#6531a8" }}>
                    Empower Applicants: Seamless Engagement with yfy®'s HRMS
                    Module
                  </h4>
                  <p className="mb-0" style={{ fontSize: "16px" }}>
                    {" "}
                    Empower applicants with HRMS module, granting access to
                    accept interview schedules, request rescheduling and upload
                    documents—all seamlessly through the application interface.
                    Simplify the hiring process and enhance applicant engagement
                    with yfy®'s intuitive features.
                  </p>
                  <ul className="nl-d-flex flex-wrap gap-3 pt-5">
                    <li>
                      <NioButton
                        href="/auth/sign-up"
                        className="btn-primary"
                        label="Join Our Team"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="d-flex flex-column">
                <div className="nl-frame mb-5 mb-lg-0 order-lg-2 mt-lg-3">
                  <img src="images/cover/cover-38.png" alt="cover-bg" />
                </div>
                {/* <div className="nl-section-head pb-0"> */}
                {/* <span className="nl-section-subtitle mb-2">Behind the story</span> */}
                <h4 className="" style={{ color: "#6531a8" }}>
                  Revolutionize Recruitment: Simplify Hiring with HRMS Module
                </h4>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {" "}
                  Our yfy® HRMS module revolutionizes recruitment with features
                  like screening, workflow status tracking and interview
                  scheduling—all within the application. Simplify and streamline
                  your hiring process, from initial screening to final interview
                  arrangements, with yfy® comprehensive HRMS solution.{" "}
                </p>
              </div>
              {/* </div> */}
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Journey Section End  */}

      {/*  Values Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">our values</span>
          <h2 className="nl-section-title">Core Values We Define</h2>
          <p className="mb-0">
            Innovation, Collaboration, Excellence. These core values guide us as
            we strive to deliver exceptional solutions and empower businesses.
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5">
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="blue-soft"
                    icon="file-text-fill"
                  />
                  <div>
                    <h5>Result Matter</h5>
                    <p className="fs-7 mb-0">
                      {" "}
                      At NioLand, we believe that results matter. We are
                      committed to delivering tangible outcomes and measurable
                      impact for our clients.{" "}
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    icon="gift"
                    rounded="circle"
                    variant="info-soft"
                  />
                  <div>
                    <h5>Commitment</h5>
                    <p className="fs-7 mb-0">
                      Commitment is one of our core values at NioLand. We are
                      dedicated to providing exceptional service.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="warning-soft"
                    icon="growth-fill"
                  />
                  <div>
                    <h5>Growth</h5>
                    <p className="fs-7 mb-0">
                      {" "}
                      Growth is a fundamental value at NioLand. We believe in
                      continuously learning, improving, and expanding our
                      capabilities.{" "}
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    icon="users-fill"
                    variant="danger-soft"
                  />
                  <div>
                    <h5>Team Work</h5>
                    <p className="fs-7 mb-0">
                      {" "}
                      Teamwork is a core value at NioLand. We believe in the
                      power of collaboration and synergy that comes from working
                      together.{" "}
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    icon="bulb-fill"
                    variant="blue-soft"
                  />
                  <div>
                    <h5>Innovation</h5>
                    <p className="fs-7 mb-0">
                      {" "}
                      Innovation is at the heart of NioLand. We continuously
                      strive to push boundaries and challenge the status quo.{" "}
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5 justify-content-between">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    icon="flag-fill"
                    variant="blue-soft"
                  />
                  <div>
                    <h5>Ownership</h5>
                    <p className="fs-7 mb-0">
                      {" "}
                      Ownership is a core value at NioLand. We believe in taking
                      responsibility for our actions, projects, and outcomes.{" "}
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Values Section Start  */}

      {/*  Team Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">team members</span>
          <h2 className="nl-section-title">The Team Behind NioLand</h2>
          <p className="mb-0">
            Meet the dedicated team behind NioLand, working tirelessly to bring
            you the best experience.
          </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton
                href="/auth/sign-up"
                className="btn-primary"
                label="Join Our Team"
              />
            </li>
            <li>
              <NioButton
                href="#"
                className="btn-outline-primary"
                label="Learn More"
              />
            </li>
          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5">
            <Col md="6" lg="4">
              <NioCard className="border-0 bg-blue-soft ">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-0">John Carter</h4>
                      <p className="fs-7">CEO &amp; Founder</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon name="fedora fs-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/a.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="border-0 bg-green-soft">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-0">Sophie Moor</h4>
                      <p className="fs-7"> Manager Of XYZ</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon name="b-si fs-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/b.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="border-0 bg-yellow-soft">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-0">Sam Houston</h4>
                      <p className="fs-7">VP of Development</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon name="linkedin-round fs-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/c.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Team Section Start  */}

      {/*  Brands Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">support From</span>
          <h2 className="nl-section-title">Our Investors</h2>
          <p>
            We are proud to have the support of our valued investors who believe
            in our vision and contribute to our growth.
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gap g-3 justify-content-xl-center">
            {["a", "b", "c", "d", "e"]?.map((brand, idx) => (
              <Col xs="6" sm="4" lg="3" xl="2" key={idx}>
                <Link
                  to="#"
                  className="nl-brand bg-gray py-3 py-md-4 px-5 px-md-6 rounded-2 text-center d-inline-block w-100 h-100"
                >
                  <img
                    src={`images/brands/${brand}.png`}
                    alt="brand"
                    className="img-fluid"
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brands Section Start  */}

      {/*  Blog Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Press &amp; Media</span>
          <h2 className="nl-section-title">NioLand In The News</h2>
          <p className="mb-0">
            Discover the latest news and updates about NioLand, featured in top
            publications and media outlets.
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg="6">
              <NioCard className="bg-primary h-100">
                <NioCard.Body className="d-flex gap-5 flex-column justify-content-between p-5 p-md-7">
                  <div>
                    <Link to="#">
                      <img
                        src="images/brands/a-light.png"
                        alt="brand"
                        className="h-24px mb-5"
                      />
                    </Link>
                    <h2 className="text-capitalize text-white mb-2">
                      {" "}
                      NioLand raises $84M in Series C funding{" "}
                    </h2>
                    <p className="fs-7 text-white mb-0">
                      {" "}
                      NioLand, a rapidly growing technology company, recently
                      announced the successful completion of its Series C
                      funding round, securing a substantial investment of $84
                      million. <br />
                      <br /> The funding will be utilized to further enhance and
                      expand NioLand's products and services, solidifying its
                      position as a market leader in the industry. The
                      significant investment highlights the confidence and
                      support from investors in NioLand's vision and potential
                      for continued success.{" "}
                    </p>
                  </div>
                  <NioButton
                    label="Read More"
                    href="/blog-details"
                    className="btn-link text-white"
                    icon="arrow-right after"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="6">
              <Row className="gy-5">
                <Col xs="12">
                  <NioCard className="h-100 bg-indigo-700 ">
                    <NioCard.Body className="d-flex gap-5 p-lg-7 flex-column justify-content-between">
                      <Link to="#">
                        <img src="images/brands/c-light.png" alt="brand" />
                      </Link>
                      <h4 className="text-capitalize text-white">
                        NioLand claims to be the #1 player in the analytics
                        industry
                      </h4>
                      <NioButton
                        label="Read More"
                        href="/blog-details"
                        className="btn-link text-white"
                        icon="arrow-right after"
                      />
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col xs="12">
                  <NioCard className="h-100 bg-dark">
                    <NioCard.Body className="d-flex gap-5 p-lg-7 flex-column justify-content-between">
                      <Link to="#">
                        <img src="images/brands/c-light.png" alt="brand" />
                      </Link>
                      <h4 className="text-capitalize text-white">
                        NioLand CEO steps-back, new CEO comes in September after
                        the board decisions
                      </h4>
                      <NioButton
                        label="Read More"
                        href="/blog-details"
                        className="btn-link text-white"
                        icon="arrow-right after"
                      />
                    </NioCard.Body>
                  </NioCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Blog Section End  */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
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
      {/*  Newsletter Section End  */}
    </AppLayout>
  );
}

export default index;
