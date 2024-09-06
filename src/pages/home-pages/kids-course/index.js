import React from 'react';
import { Link } from 'react-router-dom';
import { NioButton, NioCard } from '../../../components';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// Components 
import { NioIcon, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// sections content 
import TestimonialContent from '../../../components/PageComponents/Homepages/KidsCourse/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Kids Course" layoutClass="2">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-kd-course">
        <div className="nl-banner-wrap pb-0">
          <Container>
            <Row className="justify-content-between">
              <Col lg="6" xl="5">
                <div className="nl-banner-content text-center text-lg-start pb-7 pb-xl-0 pt-lg-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="d-flex flex-grow-0 me-2 mb-3 mb-lg-0">
                      <NioMedia
                        border
                        size="sm"
                        alt="avatar"
                        rounded="circle"
                        className="border-white"
                        img="images/avatar/kids-a.jpg"
                      />
                      <NioMedia
                        border
                        size="sm"
                        alt="avatar"
                        rounded="circle"
                        className="border-white ms-n1"
                        img="images/avatar/kids-b.jpg"
                      />
                      <NioMedia
                        border
                        size="sm"
                        alt="avatar"
                        rounded="circle"
                        className="border-white ms-n1"
                        img="images/avatar/kids-c.jpg"
                      />
                      <NioMedia
                        border
                        size="sm"
                        alt="avatar"
                        rounded="circle"
                        className="border-white ms-n1"
                        img="images/avatar/kids-d.jpg"
                      />
                    </div>
                    <p className="fw-bold text-dark fs-7">
                      <span className="text-danger">5k+</span> Enrollment
                    </p>
                  </div>
                  <div>
                    <h1 className="display-3 mb-3 mb-lg-0">Better Future For Your Kids.</h1>
                    <p className="mb-0">We just don’t give our students only lecture but real life experiment, workshops and enjoyable experience.</p>
                  </div>
                  <ul className="d-flex flex-sm-row-reverse flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-end gap-3 pt-5 pt-xxl-6">
                    <li>
                      <div className="d-flex flex-column flex-sm-row gap-2 align-items-center">
                        <NioMedia
                          size="lg"
                          rounded="circle"
                          icon="play-fill"
                          variant="purple"
                          lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                          className="animate animate-infinite animate-pulse animate-duration-1"
                        />
                        <div>
                          <div className="text-dark fw-semibold">Watch Video</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <NioButton
                        href="/auth/sign-up"
                        label="Sign Up Free"
                        className="btn-primary"
                      />
                    </li>

                  </ul>
                  <div className="pt-5 pt-xxl-6">
                    <p className="title-shape fs-8 fw-medium text-dark text-capitalize mb-0">Join with 5M+ parents by downloading our app</p>
                    <ul className="d-flex justify-content-center gap-4 justify-content-lg-start gap-3 pt-3 pt-lg-5">
                      <li>
                        <Link to="#">
                          <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="border overflow-hidden rounded-3" alt="app-store" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" >
                          <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="border overflow-hidden rounded-3" alt="play-store" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="align-self-end">
                <div className="nl-frame">
                  <img src="images/kids-course/banner-cover-1.png" alt="banner-cover" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Program Section Start   */}
      <NioSection className="nl-section-program bg-primary-soft">
        <NioSection.Content>
          <Row className="align-items-end justify-content-between">
            <Col xl="4" xxl="3">
              <div className="nl-section-head pb-xl-0">
                <span className="nl-section-subtitle">our Program</span>
                <h2>Our Popular Program</h2>
              </div>
            </Col>
            <Col xl="7">
              <Row className="gy-5 gy-xl-0 g-xl-4">
                <Col sm="6" lg="4" >
                  <div>
                    <NioMedia img="images/kids-course/icon-1.png" alt="program-icon" className="mb-2" />
                    <h5 className="mb-1">Creative Thinking</h5>
                    <p className="fs-7 line-clamp-2">
                      Unleash creativity for innovative solutions and fresh perspectives.
                    </p>
                  </div>
                </Col>
                <Col sm="6" lg="4" >
                  <div>
                    <NioMedia img="images/kids-course/icon-3.png" alt="program-icon" className="mb-2" />
                    <h5 className="mb-1">Career Planning</h5>
                    <p className="fs-7 line-clamp-2">Master the art of public speaking, captivating audiences with confidence and impactful communication.</p>
                  </div>
                </Col>
                <Col sm="6" lg="4" >
                  <div>
                    <NioMedia img="images/kids-course/icon-2.png" alt="program-icon" className="mb-2" />
                    <h5 className="mb-1">Public Speaking</h5>
                    <p className="fs-7 line-clamp-2">Confidently engage audiences with impactful public speaking skills.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center pt-7 pt-lg-120 pb-0">
            <Col lg="6">
              <div className="nl-program-img mb-5 mb-md-7 mb-lg-0" >
                <img src="images/kids-course/section-cover-1.png" alt="section-cover" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div className="nl-section-head" >
                <h2>Kids Will Love to Learn</h2>
                <p className="mb-0">Easy secure access to digital learning resources should be the status in the education.</p>
              </div>
              <ul className="d-flex flex-column gap-5">
                <li className="d-flex gap-4">
                  <NioIcon name="check-circle-fill" size="md" className="text-danger" />
                  <div className="mt-n1 ms-0">
                    <h5 className="text-capitalize mb-1">Focused Learning</h5>
                    <p className="mb-0 fs-7">Our program engages kids in core subjects like early literacy, reading, writing, language, and math,</p>
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <NioIcon name="check-circle-fill" size="md" className="text-danger" />

                  <div className="mt-n1 ms-0">
                    <h5 className="text-capitalize mb-1">Joyful Experience</h5>
                    <p className="mb-0 fs-7">Five whimsical, charming characters—including narrator Kodi Bear guide kids through activities and stories.</p>
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <NioIcon name="check-circle-fill" size="md" className="text-danger" />

                  <div className="mt-n1 ms-0">
                    <h5 className="text-capitalize mb-1">Nuture By Experts</h5>
                    <p className="mb-0 fs-7">Nioland was developed in collaboration with learning experts at Stanford and aligned with the Head Start</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Program Section End   */}

      {/*  Course Section End   */}
      <NioSection className="nl-section-course pt-7 pt-lg-120">
        <div className="nl-section-head pb-md-7 nl-block-head-between align-items-lg-end flex-column flex-lg-row">
          <div className="text-center text-lg-start pb-5 pb-lg-0">
            <span className="nl-section-subtitle text-purple">Our Program</span>
            <h2>
              <span className="d-inline-block d-lg-block">Most</span> Demanding Classes
            </h2>
          </div>
          <div className="text-center text-lg-start">
            <NioButton href="#" className="btn-purple" label="Browse All Classes" />
          </div>
        </div>
        <NioSection.Content>
          <Row className="gy-4 gy-xl-0">
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <div className="card-image">
                  <img src="images/blog/blog-1.jpg" alt="blog" className="card-img-top img-fit-cover h-100" />
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <span className="badge text-bg-purple-soft text-uppercase mb-3">Museum &amp; Park</span>
                    <Link to="#" className="d-inline-block fs-4 fw-bold text-dark">
                      Virtual museum, national park &amp; Zoo tours
                    </Link>
                    <Row className="gy-2 mt-3">
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">1200+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">2812 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <em className="icon ni ni-globe"></em>
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <em className="icon ni ni-tag-alt"></em>
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">Book Mark</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                    <NioButton href="#" className="btn-primary text-white" label="Join For $11.99 Only" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <div className="card-image">
                  <img src="images/blog/blog-2.jpg" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <span className="badge text-bg-purple-soft text-uppercase mb-3">Geographic brain</span>
                      <Link to="#" className="d-inline-block fs-4 fw-bold text-dark">National geographic kids fun brain</Link>
                    <Row className="gy-2 mt-3">
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">340+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">1410 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">Book Mark</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    </div>
                      <NioButton href="#" className="btn-primary text-white" label="Join for $11.99 only" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <div className="card-image">
                  <img src="images/blog/blog-3.jpg" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <span className="badge text-bg-purple-soft text-uppercase mb-3">Museum &amp; Park</span>
                    <Link to="#" className="d-inline-block fs-4 fw-bold text-dark">Fun doodles with mo to learn mathmatics</Link>
                    <Row className="gy-2 mt-3">
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">120+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">810 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="nl-course-overview-list">
                          <div className="nl-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nl-course-overview-content">
                            <span className="text-dark text-nowrap fs-8 fw-semibold">Book Mark</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                    <NioButton href="#" className="btn-primary text-white" label="Join for $11.99 only" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection >
      {/*  Course Section End   */}

      {/*  Works Section Start   */}
      <NioSection className="overflow-hidden" masks={["shape-13 d-done d-md-block"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">How it works?</span>
          <h2>Unique For Every Learner</h2>
          <p className="mb-0">
            Tailored to each individual, our approach ensures a unique learning experience that meets diverse needs.
          </p>
          <ul className="d-flex flex-wrap justify-content-center gap-4 pt-5">
            <li>
              <NioButton href="/auth/sign-up" className="btn-primary" label="Sign Up Free" />
            </li>
            <li>
              <div className="d-flex align-items-center gap-2">
                <NioMedia
                  size="lg"
                  rounded="circle"
                  icon="play-fill"
                  variant="purple"
                  lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                  className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                />

                <div>
                  <div className="fw-semibold text-dark">Watch Video</div>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gap g-5 g-md-7 overflow-hidden">
            <Col md="6">
              <div className="nl-course-cta-img position-relative"  >
                <img src="images/kids-course/section-cover-3-a.png" alt="kids-thumb" />
              </div>
            </Col>
            <Col md="6">
              <div className="nl-course-cta-img position-relative" >
                <img src="images/kids-course/section-cover-3-b.png" alt="kids-thumb" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End   */}

      {/*  Testimonial Section Start    */}
      <NioSection className="nl-section-testimonial" masks={["shape-14 d-none d-md-block"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">Our testimonials</span>
          <h2 className="nl-section-title mb-0">
            What Our Parents Say <span className="d-inline-block d-lg-block">About Us</span></h2>
          <ul className="d-flex justify-content-center gap-4 pt-5">
            <li>
              <NioButton href="#" className="btn-purple" label="Browse All Classes" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content className="overflow-hidden">
          <div className="mx-lg-n9">
            <div className="mx-xl-n9">
              <TestimonialContent />
            </div>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End   */}

      {/*  Gallery Section Start   */}
      <NioSection className="nl-section-gallery overflow-hidden pb-7 pb-lg-120" masks={["shape-15", "shape-16", "shape-17"]}>

        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">our gallery</span>
          <h2 className="nl-section-title">Few moments with our superkids</h2>

          <ul className="d-flex flex-sm-row-reverse flex-column flex-sm-row align-items-center justify-content-center gap-3 pt-3 pt-sm-5">
            <li>
              <div className="d-flex flex-column flex-sm-row gap-2 align-items-center">
                <NioMedia
                  size="lg"
                  rounded="circle"
                  icon="play-fill"
                  variant="purple"
                  lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                  className="animate animate-infinite animate-pulse animate-duration-1"
                />
                <div>
                  <div className="text-dark fw-semibold">Watch Video</div>
                </div>
              </div>
            </li>
            <li>
              <NioButton
                href="/auth/sign-up"
                label="Sign Up Free"
                className="btn-primary"
              />
            </li>

          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <div className="nl-gallery-img" >
            <img src="images/kids-course/gallary.png" alt="gallary" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Gallery Section End   */}

      {/*  App-Download Section Start   */}
      <NioSection className="nl-section-app-dwnld pt-7 pb-0 bg-purple-soft z-1 position-relative overflow-hidden pt-7 pt-lg-120" masks={["shape-18"]} >
        <NioSection.Content className="position-relative z-1">
          <Row className="justify-content-between">
            <Col lg="5">
              <div className="text-center text-lg-start pb-7 pb-xxl-0">
                <h2>Download Our App To Start Your Class.</h2>
                <p className="fs-5  mb-0">Are you ready to make your children future skilled proof ? Join with 5M+ parents to explore our immersive world.</p>
                <ul className="d-flex justify-content-center gap-4 justify-content-lg-start gap-3 pt-6">
                  <li>
                    <Link to="#">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="border overflow-hidden rounded-3" alt="app-store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="border overflow-hidden rounded-3" alt="play-store" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6" className="align-self-end">
              <div className="nl-app-download">
                <img src="images/kids-course/app.png" alt="apps" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  App-Download Section End   */}


      {/*  NewsLetter Section Start   */}
      <NioSection className="nl-section-nwsletter pt-7 pt-xxl-120 pb-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="5">
            <NioSubscribeField />
          </Col>
        </Row>
      </NioSection>
      {/*  NewsLetter Section End   */}

    </AppLayout >
  )
}

export default index;