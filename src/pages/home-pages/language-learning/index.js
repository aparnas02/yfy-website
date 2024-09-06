import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// components
import {
  NioButton,
  NioSection,
  NioCount,
  NioCard,
  NioMedia,
  NioSubscribeField,
} from "../../../components";

// section content
import TestimonialContent from "../../../components/PageComponents/Homepages/LanguageLearning/TestimonialContent/TestimonialContent";

function index() {
  return (
    <AppLayout title="Language Learning" layoutClass="13">
      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-language nl-frame nl-frame-four">
        <div className="nl-frame-children nl-frame-children-one">
          <img
            src="images/language-learning/icon-globe.png"
            alt="icon"
            className="animate animate-infinite animate-pulse animate-duration-2"
          />
        </div>
        <div className="nl-frame-children nl-frame-children-two">
          <img
            src="images/language-learning/icon-love.png"
            alt="icon"
            className="animate animate-infinite animate-pulse animate-duration-3"
          />
        </div>
        <div className="nl-frame-children nl-frame-children-three">
          <img
            src="images/language-learning/icon-en.png"
            alt="icon"
            className="animate animate-infinite animate-pulse animate-duration-3"
          />
        </div>
        <div className="nl-frame-children nl-frame-children-four">
          <img
            src="images/language-learning/icon-cn.png"
            alt="icon"
            className="animate animate-infinite animate-pulse animate-duration-2"
          />
        </div>
        <div className="nl-banner-wrap">
          <Container>
            <Row className="justify-content-center gy-5 pt-lg-7">
              <Col xl="8">
                <Row className="gy-3 gx-sm-5 gx-md-3 gx-xl-7 gx-xxl-3 justify-content-center">
                  <Col xxl="8" className="text-center">
                    <span className="display-2 fw-medium d-block d-sm-inline-block p-3 text-dark bg-white rounded-4">
                      NioLand brings
                    </span>
                  </Col>
                  <Col sm="6" className="text-center text-sm-end">
                    <span className="display-2 fw-semibold d-block d-sm-inline-block p-3 text-dark bg-primary rounded-4">
                      Language
                    </span>
                  </Col>
                  <Col sm="6" className="text-center text-sm-start">
                    <span className="display-2 fw-medium d-block d-sm-inline-block p-3 text-dark bg-white rounded-4">
                      Learning
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col md="8" lg="6">
                <div className="d-flex flex-column align-items-center text-center">
                  <p className="text-white mb-0">
                    {" "}
                    Learn a language right here with hundreds of free
                    language-learning lessons. Get access to compact lessons
                    from the experts and connect with a community of native
                    speakers.
                  </p>
                  <div>
                    <ul className="d-flex flex-wrap justify-content-center justify-content-xl-start gy-5 gy-md-3  gap-3 pt-5">
                      {[1, 2, 3, 4, 5].map((flag, idx) => (
                        <li key={idx} className="p-1 bg-white rounded-circle">
                          <NioMedia
                            rounded="circle"
                            className="animate animate-pulse animate-infinite animate-duration-1s animate-delay-1"
                            img={`images/icon/flag-${flag}.png`}
                            alt="flag"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="pt-5">
                      <NioButton
                        href="#"
                        label="Start Learning"
                        className="btn-dark"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center pt-5 pt-lg-7">
              <Col xl="8">
                <h5 className="text-gray text-center fw-normal mb-5">
                  {" "}
                  Over{" "}
                  <span className="fw-semibold text-dark">
                    32K+ Software
                  </span>{" "}
                  Business Growing With NioLand.
                </h5>
                <Row className="gy-2 gap-sm-2 justify-content-center text-center align-items-center">
                  {["a", "b", "c", "d", "e"].map((brand, idx) => (
                    <Col key={idx} xs="4" sm="3" lg="2">
                      <Link className="nl-brand" to="#">
                        <img
                          src={`images/brands/${brand}-light.png`}
                          alt="brand"
                        />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* learn language Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="align-items-center justify-content-between">
            <Col lg="6">
              <div className="text-center mb-5 mb-lg-0">
                <img
                  src="images/language-learning/section-cover-1.png"
                  alt="section-cover"
                />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head pb-0 text-center text-lg-start">
                <h2 className="nl-section-title">
                  The <span className="text-primary">world's #1</span> way to
                  learn a language{" "}
                </h2>
                <p className="mb-0">
                  {" "}
                  Learning with us is fun, and research shows that it works!
                  With quick, bite-sized lessons, you’ll earn points and unlock
                  new levels while gaining real-world communication skills.
                  Learn a language right here with hundreds of free
                  language-learning lessons. Get access to compact lessons from
                  the experts.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/* learn language Section End */}

      {/* Changeing Section Start */}
      <NioSection>
        <Row className="justify-content-center">
          <Col lg="8" xxl="6">
            <div className="nl-section-head text-center">
              <h2 className="nl-section-title mb-0">
                <span className="text-indigo-700">Changing</span> the way people
                learn new languages
              </h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-3 gy-md-5">
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="cyan-600"
                    icon="globe"
                    className="mb-5"
                  />
                  <h5 className="mb-0">
                    {" "}
                    More than 1000 language combinations so you can learn.{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="yellow"
                    icon="book-read"
                    className="mb-5"
                  />
                  <h5 className="mb-0">
                    {" "}
                    More than 1000 language combinations so you can learn.{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="indigo-700"
                    icon="text2"
                    className="mb-5"
                  />
                  <h5 className="mb-0">
                    {" "}
                    36 vocabulary builders to install words fast for constant
                    improvement{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="red"
                    icon="chat-circle"
                    className="mb-5"
                  />
                  <h5 className="mb-0">
                    {" "}
                    41 real conversations to give you fluency in learning
                    languages{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="cyan"
                    icon="todo"
                    className="mb-4"
                  />
                  <h5 className="mb-0">
                    {" "}
                    Grammar features & conjugation tables to shortcut your
                    progress{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="green"
                    icon="clock"
                    className="mb-4"
                  />
                  <h5 className="mb-0">
                    {" "}
                    More than 1000 language combinations so you can learn.{" "}
                  </h5>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Changeing Section End */}

      {/* Dialect Section Start */}
      <NioSection>
        <NioSection.Content>
          <Row className="flex-lg-row-reverse align-items-center justify-content-between gx-0 border-bottom pb-5 pb-lg-7">
            <Col lg="6">
              <div className="text-center mb-5 mb-lg-0">
                <img
                  src="images/language-learning/section-cover-2.png"
                  alt="section-cover"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="text-center text-lg-start">
                <h2 className="nl-section-title">
                  Boost your learning with{" "}
                  <span className="text-primary">Dialect</span> plus{" "}
                </h2>
                <p className="mb-0">
                  {" "}
                  Learning with us is fun, and research shows that it works!
                  With quick, bite-sized lessons, you’ll earn points and unlock
                  new levels while gaining real-world communication skills.{" "}
                </p>
                <NioButton
                  href="#"
                  label="Start Learning"
                  className="btn-primary mt-5"
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pt-lg-7">
            <Col sm="6" lg="3">
              <div className="text-center mb-5 mb-lg-0">
                <div className="h1 mb-2">
                  <NioCount end={70} suffix="k" />
                  <span className="text-primary"> +</span>
                </div>
                <h5>Lessons Taught</h5>
                <p className="mb-0">
                  {" "}
                  Engaging and educational lessons for all subjects.
                </p>
              </div>
            </Col>
            <Col sm="6" lg="3">
              <div className="text-center mb-5 mb-lg-0">
                <div className="h1 mb-2">
                  <NioCount end={40} suffix="k" />
                  <span className="text-primary"> +</span>
                </div>
                <h5>Students Enrolled</h5>
                <p className="mb-0">
                  Join our student community and unlock a world of knowledge.
                </p>
              </div>
            </Col>
            <Col sm="6" lg="3">
              <div className="text-center mb-5 mb-lg-0">
                <div className="h1 mb-2">
                  <NioCount end={11} />
                  <span className="text-primary"> +</span>
                </div>
                <h5>Lessons Taught</h5>
                <p className="mb-0">
                  Explore a diverse range of lessons taught by experts.
                </p>
              </div>
            </Col>
            <Col sm="6" lg="3">
              <div className="text-center mb-5 mb-lg-0">
                <div className="h1 mb-2">
                  <NioCount end={15} suffix="k" />
                  <span className="text-primary"> +</span>
                </div>
                <h5>5-Star Reviews</h5>
                <p className="mb-0">
                  Discover why our courses have received numerous.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/* Dialect Section End */}

      {/* testimonial Section Start */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Head alignX="center">
          <h2 className="nl-section-title">
            People love
            <span className="text-primary"> Dialect</span>
          </h2>
          <p className="mb-0">
            Learning with us is fun, and research shows that it works! Learning
            a language on Dialect is completely free.
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* testimonial Section End */}

      {/* CTA Section Start */}
      <NioSection className="bg-primary bg-2">
        <NioSection.Content>
          <Row className="align-items-xl-center justify-content-center justify-content-lg-between position-relative gy-5 gy-xl-0 gx-lg-7">
            <Col lg="6">
              <Row className="gy-3 text-center text-lg-start">
                <Col xxl="8">
                  <span className="display-5 fw-bold d-inline-block p-3 text-dark bg-white rounded">
                    NioLand brings
                  </span>
                </Col>
                <Col xs="12">
                  <span className="display-5 fw-bold d-inline-block p-3 text-white text-nowrap bg-indigo-700 rounded">
                    Language Learning?
                  </span>
                </Col>
              </Row>
            </Col>
            <Col lg="6" xl="5">
              <div className="text-center text-lg-start">
                <p className="fs-20 mb-0 text-dark">
                  {" "}
                  Learn a language right here with hundreds of free
                  language-learning lessons. Get access to compact lessons from
                  the experts and connect with a community of native speakers to
                  help you master words faster.{" "}
                </p>
                <ul className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 pt-5">
                  {[1, 2, 3, 4, 5].map((flag, idx) => (
                    <li key={idx} className="p-1 bg-white rounded-circle">
                      <NioMedia
                        rounded="circle"
                        className="animate animate-pulse animate-infinite animate-duration-1s animate-delay-1"
                        img={`images/icon/flag-${flag}.png`}
                        alt="flag"
                      />
                    </li>
                  ))}
                </ul>
                <div className="pt-5">
                  <NioButton
                    href="#"
                    label="Start Learning"
                    className="btn-dark"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* CTA Section End */}

      {/* NewsLetter Section Start */}
      <NioSection className="pt-7 pb-lg-0">
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
      {/* NewsLetter Section End */}
    </AppLayout>
  );
}

export default index;
