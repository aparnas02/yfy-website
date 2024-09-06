import React from "react";
import { Col, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// components
import {
  NioSection,
  NioSubscribeField,
  NioButton,
  NioMedia,
  NioCard,
} from "../../../components";

// section content
import CallToAction from "../../../components/PageComponents/SectionComponents/CallToAction/CallToAction";
import TestimonialContent from "../../../components/PageComponents/InnerPages/Features/TestimonialContent/TestimonialContent";

function index() {
  return (
    <AppLayout title="Features">
      {/*  Discover Section Start  */}
      <NioSection
        className="pt-120 pt-lg-160 pb-7 pb-lg-120 overflow-hidden"
        masks={[" blur-1 left top", " blur-1 right bottom"]}
      >
        <Row className="justify-content-center">
          <Col lg="10" xxl="6">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle mb-2">
                Discover our feature
              </span>
              <h2 className="nl-section-title">
                All The Featuers You Expect,{" "}
                <span className="d-lg-block">Even More.</span>
              </h2>
              <p className="mb-0">
                {" "}
                NioLand offers all the features you, providing a comprehensive
                and versatile platform to streamline your business operations.{" "}
              </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton
                    href="#"
                    className="btn-primary"
                    label="Get Started"
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
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <div className="nl-banner-img nl-banner-features pt-xl-7 mt-xl-3 text-center">
            <div className="nl-banner-features-content">
              <img
                src="images/features/banner-cover.png"
                alt="cover-img"
                className="nl-banner-features-base"
              />
              <img
                src="images/features/banner-cover-a.png"
                alt="cover-img"
                className="nl-banner-features-children one h-120"
              />
              <img
                src="images/features/banner-cover-b.png"
                alt="cover-img"
                className="nl-banner-features-children two h-200  animate animate-shakeY animate-duration-12"
              />
              <img
                src="images/features/banner-cover-c.png"
                alt="cover-img"
                className="nl-banner-features-children three h-300 animate animate-shakeY animate-duration-12"
              />
            </div>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Discover Section End  */}

      {/*  Features Section Start  */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 align-items-center">
            <Col sm="6" lg="4">
              <div className="nl-feature-card-text line-1">
                <div className="nl-feature-card-text-body">
                  <h5 className="fw-normal">
                    Visualize &amp; break down{" "}
                    <span className="fw-semibold d-inline-block d-sm-block">
                      engagement trends
                    </span>
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4">
              <div className="nl-feature-card-text line-2">
                <div className="nl-feature-card-text-body">
                  <h5 className="fw-normal">
                    <span className="fw-semibold d-inline-block d-sm-block">
                      Build funnels &amp; find key
                    </span>{" "}
                    retention drivers
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4">
              <div className="nl-feature-card-text line-3">
                <div className="nl-feature-card-text-body">
                  <h5 className="fw-normal">
                    See the impact of{" "}
                    <span className="fw-semibold d-inline-block d-sm-block">
                      product launches &amp; experiments
                    </span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End  */}

      {/*  Testimonial Section Start  */}
      <NioSection className="bg-primary-gradient ">
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}

      {/*  Story-Line Section Start  */}
      <NioSection
        className="pb-lg-7 pt-7 pt-lg-120"
        masks={["blur-1 left center", "blur-1 right bottom"]}
      >
        <NioSection.Content className="d-flex flex-column gap-7 gap-lg-120">
          <Row className="gy-5 gy-lg-0 flex-row-reverse align-items-center justify-content-lg-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0">
                <img
                  src="images/cover/cover-24.png"
                  alt="cover-bg"
                  className="base"
                />
                <img
                  src="images/cover/cover-24-a.png"
                  alt="cover-forground"
                  className="children children-1 animate animate-shakeY animate-duration-12"
                />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head pb-0">
                <div className="d-flex gap-3 align-items-center mb-5">
                  <NioMedia
                    size="md"
                    rounded="circle"
                    variant="blue-soft"
                    icon="activity-round-fill"
                  />
                  <div>
                    <span className="nl-section-subtitle mb-2">
                      Insights report
                    </span>
                  </div>
                </div>
                <h6 className="" style={{ color: "#6531a8" }}>
                  {" "}
                  Revolutionize Compliance Management: Automates Regulatory
                  Filings and Regulatory Payments{" "}
                  <span className="d-lg-block"> in Details</span>
                </h6>
                <ul className="nl-timeline pt-4">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      {/* <div className="nl-timeline-symbol text-bg-primary text-white"></div> */}
                      <div className="nl-timeline-content mt-n1">
                        <p style={{ fontSize: "16px" }}>
                          With yfy®, automate not just payroll processing and
                          disbursements, but also compliance tasks such as PF,
                          TDS, ESI and PT/LWF.. payments and returns filing.
                          Simplify regulatory obligations and ensure timely,
                          accurate compliance effortlessly with yfy®'s
                          comprehensive automation features.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          See how often users perform meaningful actions,
                          monitor growth of key user cohorts, like power users
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p>
                          know how current trends compare to previous results.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0">
                <img
                  src="images/cover/cover-25.png"
                  alt="cover-base"
                  className="base"
                />
                <img
                  src="images/cover/cover-25-a.png"
                  alt="cover-children"
                  className="children children-2 animate animate-shakeY animate-duration-12"
                />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head pb-0">
                <div className="d-flex gap-3 align-items-center mb-5">
                  <NioMedia
                    size="md"
                    rounded="circle"
                    variant="red-soft"
                    icon="filter-fill"
                  />

                  <div>
                    <div className="d-inline-block fs-8 text-uppercase text-danger fw-semibold mb-2">
                      Funnel Report
                    </div>
                  </div>
                </div>
                <h4 className="" style={{ color: "#6531a8" }}>
                  Automates Tax and Pay Calculations
                </h4>
                <ul className="nl-timeline pt-4">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      {/* <div className="nl-timeline-symbol text-bg-danger-soft"></div> */}
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-6 mb-0" style={{ fontSize: "16px" }}>
                          yfy® streamlines tax and pay calculations, automates
                          approval workflows and facilitates disbursements.
                          Plus, it seamlessly integrates with banks, allowing
                          direct downloading in their preferred format. Simplify
                          tax and pay calculations.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-6 mb-0">
                          Locate the funnel steps that cause friction, so you
                          can better engage users before they drop off.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 flex-row-reverse align-items-lg-center justify-content-lg-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0">
                <img
                  src="images/cover/cover-26.png"
                  alt="cover-base"
                  className="base"
                />
                <img
                  src="images/cover/cover-26-a.png"
                  alt="cover-children"
                  className="children children-3 animate animate-shakeY animate-duration-12"
                />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head pb-0">
                <div className="d-flex gap-3 align-items-center mb-5">
                  <NioMedia
                    size="md"
                    rounded="circle"
                    variant="purple-soft"
                    icon="signal"
                  />

                  <div>
                    <div className="d-inline-block fs-8 text-uppercase text-indigo fw-semibold mb-2">
                      Signal Report
                    </div>
                  </div>
                </div>
                <h5 className="" style={{ color: "#6531a8" }}>
                  Seamless Tax Management: Empowering Employees and
                  Administrators
                </h5>

                <ul className="nl-timeline pt-4">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      {/* <div className="nl-timeline-symbol text-bg-indigo text-white"></div> */}
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0" style={{ fontSize: "16px" }}>
                          Seamless Tax Management: Empowering Employees and
                          Administrators... yfy® simplifies tax estimation,
                          declaration and proof submissions for employees, while
                          enabling admins to factor these details into monthly
                          tax calculations seamlessly. With yfy®, streamline the
                          tax process for both employees and administrators,
                          ensuring accuracy and compliance effortlessly.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-indigo text-white"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-6 mb-0">
                          Use your findings to nudge users towards the actions
                          that lead them to experience value and stick around.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0">
                <img
                  src="images/cover/cover-25.png"
                  alt="cover-base"
                  className="base"
                />
                <img
                  src="images/cover/cover-25-a.png"
                  alt="cover-children"
                  className="children children-2 animate animate-shakeY animate-duration-12"
                />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head pb-0">
                <div className="d-flex gap-3 align-items-center mb-5">
                  <NioMedia
                    size="md"
                    rounded="circle"
                    variant="red-soft"
                    icon="filter-fill"
                  />

                  <div>
                    <div className="d-inline-block fs-8 text-uppercase text-danger fw-semibold mb-2">
                      Funnel Report
                    </div>
                  </div>
                </div>
                <h4 className="" style={{ color: "#6531a8" }}>
                  Integrates Attendance and Leave Management
                </h4>
                <ul className="nl-timeline pt-4">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      {/* <div className="nl-timeline-symbol text-bg-danger-soft"></div> */}
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-6 mb-0" style={{ fontSize: "16px" }}>
                          Seamlessly integrates attendance and leave management
                          into payroll calculations. Say goodbye to manual input
                          and errors, as yfy® automates the process for accuracy
                          and efficiency. By consolidating these functions,
                          you'll streamline payroll processing and ensure that
                          all aspects of employee compensation are accounted
                          for.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-6 mb-0">
                          Locate the funnel steps that cause friction, so you
                          can better engage users before they drop off.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Story-Line Section End  */}

      {/*  Values Section Start  */}
      <NioSection masks={["blur-1 left center"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">our values</span>
          <h2 className="nl-section-title mb-0">
            Learn About Other NioLand Features
          </h2>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" className="btn-primary" label="Get Started" />
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
          <Row className="gy-3 gy-lg-5">
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="blue-soft"
                    icon="file-text-fill"
                  />
                  <div>
                    <h5>Retention Report</h5>
                    <p className="fs-8 mb-0">
                      A retention report provides valuable insights into
                      customer or employee retention rates, helping
                      organizations measure and improve.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="info-soft"
                    icon="pie-fill"
                  />
                  <div>
                    <h5>Deliver Impact Results</h5>
                    <p className="fs-8 mb-0">
                      Our efforts consistently deliver impactful results, making
                      a tangible difference in achieving our goals and
                      objectives.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="yellow-soft"
                    icon="tree-structure-fill"
                  />
                  <div>
                    <h5>A/B Test Variants</h5>
                    <p className="fs-8 mb-0">
                      A/B test variants are distinct versions of a webpage or
                      element used to compare user engagement and performance.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="red-soft"
                    icon="diamond-fill"
                  />
                  <div>
                    <h5>Limitless Segmentation</h5>
                    <p className="fs-8 mb-0">
                      Limitless segmentation allows for the categorization of
                      data without constraints, enabling precise targeting and
                      analysis across.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="blue-soft"
                    icon="bell-fill"
                  />
                  <div>
                    <h5>Team Dashboard &amp; Alerts</h5>
                    <p className="fs-8 mb-0">
                      The team dashboard provides real-time insights and
                      triggers alerts, enhancing collaboration and keeping teams
                      informed for.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="green-soft"
                    icon="puzzle-fill"
                  />
                  <div>
                    <h5>Integration Directory</h5>
                    <p className="fs-8 mb-0">
                      An integration directory centralizes and organizes
                      connections between various software systems, streamlining
                      data exchange.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Values Section End  */}

      {/*  Device Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">
            responsive on every device
          </span>
          <h2>Over 250,000 Users love us. They can’t be wrong!</h2>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton
                href="/customer-testimonials"
                className="btn-outline-primary"
                label="Customer Reviews"
              />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <div className="nl-responsive-img text-center">
            <img src="images/thumb/o.png" alt="" className="w-100" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Device Section End  */}

      {/*  Learn-More Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">learn more</span>
          <h2>The World's Most Grossing Analytics Software Service</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg="6">
              <NioCard className="nl-feature-block overflow-hidden border-0 bg-primary-soft rounded-2 h-100">
                <NioCard.Body>
                  <div className="nl-feature-block-content h-100">
                    <NioMedia
                      size="lg"
                      rounded="circle"
                      variant="primary"
                      icon="users-fill"
                      className="mb-3 mb-md-5"
                    />
                    <h4>Get To Know Our Amazing Team</h4>
                    <p className="fs-6 mb-0">
                      Take a closer look at our outstanding team members, their
                      diverse skills, and collective dedication to delivering
                      excellence, driving innovation, and ensuring your
                      satisfaction with our products.
                    </p>
                    <NioButton
                      href="/about"
                      className="btn-link pt-5"
                      label="About Us"
                      icon="arrow-right after"
                    />
                  </div>
                </NioCard.Body>
                <div className="text-start">
                  <img
                    src="images/features/a.png"
                    alt="feature"
                    className="pe-3 pe-md-7"
                  />
                </div>
              </NioCard>
            </Col>
            <Col lg="6">
              <NioCard className="nl-feature-block overflow-hidden border-0 bg-primary-soft rounded-2 h-100">
                <NioCard.Body>
                  <div className="nl-feature-block-content h-100">
                    <NioMedia
                      size="lg"
                      rounded="circle"
                      variant="red"
                      icon="help-fill"
                      className="mb-3 mb-md-5"
                    />
                    <h4>Questions? Go to help center for info!</h4>
                    <p className="fs-6 mb-0">
                      For any queries or information, please refer to our Help
                      Center. It offers comprehensive resources to address your
                      questions and provide detailed information about our
                      products and services.
                    </p>
                    <NioButton
                      href="/about"
                      className="btn-link pt-5"
                      label="Help Center"
                      icon="arrow-right after"
                    />
                  </div>
                </NioCard.Body>
                <div className="text-end">
                  <img
                    src="images/features/b.png"
                    alt="feature"
                    className="ps-3 ps-md-7"
                  />
                </div>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Learn-More Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <CallToAction />
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End  */}

      {/*  CTA Section End  */}

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
