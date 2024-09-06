import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioCount, NioMedia, NioButton, NioSection, NioCard, NioSubscribeField } from '../../../components';

// section content
import TestimonialContent from '../../../components/PageComponents/Homepages/CollaborationTool/TestimonialContent/TestimonialContent';

function index() {
  return (

    <AppLayout title="Collaboration" layoutClass="3">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner nl-banner-collab">
        <div className="nl-banner-wrap position-relative bg-primary-soft">
          <div className="nl-mask"></div>
          <div className="nl-banner-content">
            <Container>
              <Row className="justify-content-center">
                <Col xl="10">
                  <div className="nl-banner-content position-relative text-center">
                    <span className="nl-section-subtitle bg-dark mb-5">Secure team management</span>
                    <div>
                      <h1 className="display-3 text-capitalize mb-2">Transform your <span className="title-shape title-shape-2 text-primary">teamwork</span> with a simple <span className="text-danger">collaboration</span> tool </h1>
                      <p className="mb-0">Revolutionize teamwork with our simple collaboration tool, empowering seamless communication and boosting productivity for exceptional results. </p>
                    </div>
                    <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center pt-5 pt-lg-7">
                      <li>
                        <NioButton href="/auth/sign-up" className="btn-primary" label="Create Account" />
                      </li>
                      <li>
                        <NioButton href="#" className="btn-outline-primary" label="Learn More" />
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="nl-banner-grids container position-relative  px-lg-3">
          <div className="nl-banner-grids-content">
            <div className="left">
              <img src="images/collaboration-tool/grid-cover-1.jpg" alt="grid-img" className="shadow-xl rounded-4 h-400" />
              <img src="images/collaboration-tool/grid-cover-2.jpg" alt="grid-img" className="shadow-xl rounded-4 h-400" />
            </div>
            <div className="right">
              <div className="right-row right-row-one">
                <img src="images/collaboration-tool/grid-cover-3.jpg" alt="grid-img" className="shadow-xl rounded-4 h-500" />
                <img src="images/collaboration-tool/grid-cover-4.jpg" alt="grid-img" className="shadow-xl rounded-4 h-500" />
              </div>
              <div className="right-row right-row-two">
                <img src="images/collaboration-tool/grid-cover-5.jpg" alt="grid-img" className="shadow-xl rounded-4 h-88" />
              </div>
              <div className="right-row right-row-three">
                <img src="images/collaboration-tool/grid-cover-6.jpg" alt="grid-img" className="shadow-xl rounded-4 h-185" />
                <img src="images/collaboration-tool/grid-cover-7.jpg" alt="grid-img" className="shadow-xl rounded-4 h-185" />
              </div>
            </div>
          </div>
          <img src="images/collaboration-tool/grid-cover.png" className="nl-banner-grids-alter" alt="cover-grids" />
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Brand Section Start   */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <h6 className="text-center fw-normal mb-5">More than 100,000+ teams are using NioLand</h6>
              <Row className="justify-content-center justify-content-lg-between gy-5 text-center">
                {
                  ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                    <Col xs="4" sm="3" lg="2" key={idx}>
                      <Link to="#" className="nl-brand" >
                        <img src={`images/brands/${brand}.png`} alt="tool" className="w-auto h-24px" />
                      </Link>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brand Section End   */}

      {/*  Products Section Start   */}
      <NioSection className="nl-product-section overflow-hidden pb-7 pb-lg-120">
        <NioSection.Content className="d-flex flex-column gap-7 gap-xl-120">
          <Row className="align-items-center flex-row-reverse justify-content-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0" >
                <img src="images/collaboration-tool/section-cover-1.png" alt="cover-bg" className="base" />
                <img src="images/collaboration-tool/section-cover-1-a.png" alt="cover-fd" className="children children-rs children-4 h-240 shadow-xl rounded-3 img-fluid animate animate-shakeY animate-duration-12 " />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="pb-5 pb-lg-7 pb-5">
                  <NioMedia size="lg" rounded="3" variant="primary" className="mb-5" icon="user-group-fill" />
                  <div>
                    <h2 className="nl-section-title">Collaborate and Ship Designs Faster.</h2>
                    <p className="text-dark mb-0">Work on files together in real-time, and review and get feedback without the back and forth.</p>
                  </div>
                </div>
                <ul className="nl-timeline">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Streamline collaboration for faster design iteration and efficient shipping, driving productivity and project success.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Enhance teamwork and accelerate design delivery by leveraging collaborative tools that enable seamless communication and efficient workflow.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Empower your team to work together effectively, ensuring quick design turnaround and timely project completion.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                  <li>
                    <NioButton href="/auth/sign-up" className="btn-primary" label="Create Account" />
                  </li>
                  <li>
                    <NioButton href="#" className="btn-outline-primary" label="Learn More" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-7 mb-lg-0" >
                <img src="images/collaboration-tool/section-cover-2.png" alt="cover-bg" className="base" />
                <img src="images/collaboration-tool/section-cover-2-a.png" alt="cover-fd" className="children children-rs  children-right-bottom rounded-4 h-400 animate animate-shakeY animate-duration-12 animate-delay-1 " />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="pb-5 pb-lg-7 pb-5">
                  <NioMedia size="lg" rounded="3" variant="red" className="mb-5" icon="user-group-fill" />
                  <h2 className="nl-section-title">Simplify Workflows, Improve Processes.</h2>
                  <p className="text-dark mb-0">Streamline workflows and optimize processes for improved efficiency, productivity, and overall business performance.</p>
                </div>
                <ul className="nl-timeline">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7">Simplify workflows for increased efficiency and productivity, optimizing processes and reducing bottlenecks.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7">Improve business processes by streamlining workflows, eliminating unnecessary steps, and enhancing overall operational efficiency.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7">Enhance productivity and drive success by simplifying workflows, enabling smoother processes and better resource utilization</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                  <li>
                    <NioButton href="/auth/sign-up" className="btn-red" label="Create Account" />
                  </li>
                  <li>
                    <NioButton href="#" className="btn-outline-danger" label="Learn More" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="flex-row-reverse align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-feature-overview-img mb-5 mb-lg-0" >
                <img src="images/collaboration-tool/section-cover-3.png" alt="cover-bg" className="base" />
                <img src="images/collaboration-tool/section-cover-3-a.png" alt="cover-fd" className="children children-rs  children-left-top h-400 animate animate-shakeY animate-duration-12 animate-delay-2" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="pb-5 pb-lg-7 pb-5">
                  <NioMedia size="lg" rounded="3" variant="primary" className="mb-5" icon="user-group-fill" />
                  <h2 className="nl-section-title">Build Impactful Creatives Easily</h2>
                  <p className="text-dark mb-0">Create powerful and visually striking creatives effortlessly, even without prior design experience or expertise.</p>
                </div>
                <ul className="nl-timeline">
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Easily create impactful and visually stunning creatives, even without extensive design skills or experience.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Build eye-catching and impactful creatives effortlessly with user-friendly tools and intuitive design features.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nl-timeline-item">
                    <div className="nl-timeline-item-inner">
                      <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                      <div className="nl-timeline-content mt-n1">
                        <p className="fs-7 mb-0">Empower your creativity with easy-to-use tools that simplify the process of creating impactful and memorable designs.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                  <li>
                    <NioButton href="/auth/sign-up" className="btn-primary" label="Create Account" />
                  </li>
                  <li>
                    <NioButton href="#" className="btn-outline-primary" label="Learn More" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Products Section End   */}

      {/*  Feature Section Start   */}
      <NioSection className="nl-feature-section bg-gray-200">
        <NioSection.Head alignX="center" className="pb-7">
          <h2 className="nl-section-title">
            <span className="text-primary">Features</span> That Get You Results
          </h2>
          <p className="fs-5 mb-0">Unlock features that deliver tangible results, driving success, growth, and achieving your desired outcomes.</p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="/features" className="btn-primary" label="Explore All" />
            </li>
            <li>
              <NioButton href="#" className="btn-outline-primary" label="Learn More" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-md-7">
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="indigo-100" className="text-dark rounded-4 mb-3" icon="bar-chart-fill" />
                <h5>Live Collaboration</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="orange-200" className="text-dark rounded-4 mb-3" icon="layout-fill" />
                <h5>1M+ Templates</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="gray-500" className="text-dark rounded-4 mb-3" icon="folder-fill" />
                <h5>Searchable Assets</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="green-200" className="text-dark rounded-4 mb-3" icon="star-fill" />
                <h5>Unlimited Reviews</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="yellow-100" className="text-dark rounded-4 mb-3" icon="bell-fill" />
                <h5>Notifications</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="indigo-100" className="text-dark rounded-4 mb-3" icon="heart-fill" />
                <h5>Responsive Design</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="red-200" className="text-dark rounded-4 mb-3" icon="layer-fill" />
                <h5>Media Support</h5>
              </div>
            </Col>
            <Col xs="6" md="4" lg="3" >
              <div className="d-flex flex-column align-items-center text-center">
                <NioMedia size="xl" variant="cyan-200" className="text-dark rounded-4 mb-3" icon="user-group-fill" />
                <h5>Version History</h5>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End   */}

      {/*  Video Section Start   */}
      <NioSection className="nl-section-video bg-blue-900 " masks={["shape-3"]}>
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-center justify-content-xl-between">
            <Col xl="6" >
              <div className="nl-video nl-video-s2 mb-5 mb-lg-7 mb-xl-0">
                <div className="nl-video-content bg-primary">
                  <div className="nl-video-img">
                    <img src="images/peoples/people-group-1.png" alt="video-cover" className="parallax-init" />
                  </div>
                  <div className="nl-video-btn">
                    <NioMedia
                      size="xxl"
                      variant="white"
                      rounded="circle"
                      icon="play-fill fs-2 text-primary"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="8" xl="5">
              <div className="text-center text-xl-start">
                <div className="pb-5 pb-lg-7">
                  <h2 className="h1 text-white mb-3 mb-lg-4">We believe in the power of teams.</h2>
                  <p className="fs-6 mb-0 text-white opacity-75" > We're passionate advocates of the incredible potential that teams hold. Through collaboration, shared goals, and diverse talents, we empower teams to make a positive impact, drive innovation, and achieve extraordinary results that surpass individual capabilities. </p>
                </div>

                <div className="d-flex align-items-md-center flex-column flex-xl-row justify-content-xl-start align-items-center" >
                  <NioMedia
                    size="xxl"
                    rounded="circle"
                    img="images/avatar/a.jpg"
                    className="mb-3 mb-xl-0" />
                  <div className="ps-md-5 m-0">
                    <div className="fs-5 mb-2 fw-bold text-indigo-100">“NioLand helps us to organize our work professionally and effectively”</div>
                    <div className="fs-8 text-indigo-700 text-uppercase fw-semibold">Robert Mayar - Founder of Airbnb</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Video Section Start   */}

      {/*  Testimonial Section Start   */}
      <NioSection className="nl-section-testimonial py-7 py-lg-120">
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="pb-5 pb-lg-7 text-center">
              <h2 className="nl-section-title">Hear What Teams Around The World Saying <span className="text-primary">About Nioland.</span></h2>
              <p className="fs-5 mb-0">Hear global teams' testimonials about Nioland, as they share the positive impact on collaboration, productivity, and success.</p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-primary" label="Read Case Study" />
                </li>
                <li>
                  <NioButton href="/auth/sign-up" className="btn-outline-primary" label="Create Account" />
                </li>
              </ul>
            </div>
          </Col >
        </Row >
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection >
      {/*  Testimonial Section End   */}

      {/*  Integrate Section Start   */}
      <NioSection className="nl-section-int-tools bg-red-100 has-mask overflow-hidden" masks={["shape-4"]}>
        <NioSection.Head alignX="center">
          <h2 className="nl-sectiont-title"> Nioland Integrates With All Your <span className="text-danger">Favourite Tools.</span>
          </h2>
        </NioSection.Head>
        <NioSection.Content className="position-relative z-1">
          <div className="nl-integrate-tools text-center gap g-5">
            <div>
              <img src="images/collaboration-tool/tool-1.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-2.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-3.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-4.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-5.png" alt="tool-icon" className="tool" />
            </div>
            <div>
              <img src="images/collaboration-tool/tool-6.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-7.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-8.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-9.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-10.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-11.png" alt="tool-icon" className="tool" />
            </div>
          </div>
          <Row className="justify-content-between align-items-center g-5 pt-5 pt-md-9">
            <Col lg="4">
              <div className="nl-integrate-video">
                <div className="d-flex align-items-center">
                  <div className="nl-video-btn nl-video-btn-s1 text-danger me-4">
                    <NioMedia
                      size="lg"
                      rounded="circle"
                      icon="play-fill"
                      variant="red"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="animate animate-infinite animate-pulse animate-duration-1"
                    />
                  </div>
                  <div>
                    <h4 className="h4">Watch Demo</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <Row className="gy-3 flex-wrap gy-sm-0">
                <Col xs="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h3 mb-2 mb-md-1" end={500} suffix="k+" />
                    <p className="fs-6 fw-normal mb-0 text-nowrap text-dark">Active Users</p>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h3 mb-2 mb-md-1" end={100} suffix="k+" />
                    <p className="fs-6 fw-normal mb-0 text-nowrap text-dark">Active Teams</p>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h3 mb-2 mb-md-1" end={20} suffix="k+" />
                    <p className="fs-6 fw-normal mb-0 text-nowrap text-dark">Positive Reviews</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Integrate Section End  */}

      {/*  Blog Section Start   */}
      <NioSection className="nl-section-blog py-7 py-lg-120">
        <NioSection.Head alignX="center">
          <h2 className="nl-section-title">Read Latest <span className="text-primary">Articles Of NioLand</span></h2>
          <p className="mb-0">Maecenas quis integer aenean nisl viverra morbi magna amet viverra sollicitudin posuere scelerisque urna, urna fringilla. </p>
          <NioButton href="/blogs" className="btn-primary mt-5" label="Browse All Articles" />
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-xl-0 ">
            <Col md="6" xl="4" >
              <NioCard className="h-100 has-shadow">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/blog-6.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="pt-5">
                    <ul className="pb-3">
                      <li>
                        <Link to="/blog-details" className="badge text-bg-danger-soft  text-uppercase text-dark fw-semibold">Resources</Link>
                      </li>
                    </ul>
                      <Link to="/blog-details" className="fs-5 text-dark fw-bold">Color Schemes of 24 Most Visited Websites (2020)</Link>
                    <div className="card-divider"></div>
                    <ul className="nl-list-meta">
                      <li className="fs-7 text-dark">Feb 10, 2022</li>
                      <li className="fs-7 text-dark">8 min read</li>
                    </ul>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100 has-shadow">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/blog-5.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="pt-5">
                    <ul className="pb-3">
                      <li>
                        <Link to="/blog-details" className="badge text-bg-cyan-200  text-uppercase fw-semibold">TIPS &amp; Tricks</Link>
                      </li>
                    </ul>
                      <Link to="/blog-details" className="fs-5 text-dark fw-bold">How to Increase Productivity With Evernote iOS Widgets</Link>
                    <div className="card-divider"></div>
                    <ul className="nl-list-meta">
                      <li className="fs-7 text-dark">Feb 10, 2022</li>
                      <li className="fs-7 text-dark">8 min read</li>
                    </ul>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100 has-shadow">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/blog-4.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="pt-5">
                    <ul className="pb-3">
                      <li>
                        <Link to="/blog-details" className="badge text-bg-indigo-100  text-uppercase text-dark fw-semibold">Knowledge</Link>
                      </li>
                    </ul>
                      <Link to="/blog-details" className="fs-5 text-dark fw-bold">Home at Work, Not Just ‘Work From Home’</Link>
                    <div className="card-divider"></div>
                    <ul className="nl-list-meta">
                      <li className="fs-7 text-dark">Feb 10, 2022</li>
                      <li className="fs-7 text-dark">8 min read</li>
                    </ul>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Blog Section End  */}


      {/*  CTA Section Start   */}
      <section className="nl-section position-relative py-7 py-lg-120 overflow-hidden bg-indigo-700 ">
        <div className="bg-masks bg-masks-1 d-none d-lg-block">
          <img src="images/collaboration-tool/object-2-a.png" alt="bg-mask" />
        </div>
        <div className="bg-masks bg-masks-2 d-none d-lg-block">
          <img src="images/collaboration-tool/object-2-b.png" alt="bg-mask" />
        </div>
        <div className="nl-mask shape-5"></div>
        <Container>
          <div>
            <Row className="justify-content-center">
              <Col lg="8" xl="6">
                <div className="pb-5 pb-lg-7 pb-0 text-center">
                  <h2 className="nl-sectiont-title text-white mb-0" >Not convinced you’re the one? We love to take a challenge.</h2>
                  <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center pt-5">
                    <li>
                      <NioButton href="#" className="btn-white text-dark text-primary" label="Start Your Free Trial" />
                    </li>
                    <li>
                      <NioButton href="/auth/login" className="btn-outline-white" label="Login to Your Account" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/*  CTA Section End  */}


      {/*  NewsLetter Section Start   */}
      <NioSection className="nl-section pb-0 pt-7 pt-lg-120">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="4">
            <NioSubscribeField variant={3} />
          </Col>
        </Row>
      </NioSection>
      {/*  NewsLetter Section End   */}

    </AppLayout >
  )
}

export default index;