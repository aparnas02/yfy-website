import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioButton, NioMedia, NioSubscribeField, NioScrollCarousel, NioIcon } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/PodcastApp/FaqContent/FaqContent';
import FeaturesContent from '../../../components/PageComponents/Homepages/PodcastApp/FeaturesContent/FeaturesContent';

function index() {
  return (
    <AppLayout title="Podcast App" layoutClass="23">

      {/*  Banner Section Start  */}
      <section className="nl-section nl-banner nl-banner-podcast">
        <div className="nl-frame">
          <div className="nl-frame-children nl-frame-children-one">
            <img src="images/podcast-app/banner-cover-1.png" alt="banner-cover"   />
            <img src="images/podcast-app/banner-cover-1-a.png" alt="banner-cover-children" className="sub"/>
          </div>
          <div className="nl-frame-children nl-frame-children-two">
            <img src="images/podcast-app/banner-cover-2.png" alt="banner-cover" />
          </div>
        </div>
        <div className="nl-banner-wrap">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <div className="nl-banner-content text-center">
                  <span className="nl-section-subtitle mb-3 mb-md-4">Most Download App</span>
                  <div>
                    <h1 className="display-3 text-capitalize">Millions of shows. <br/> More ways to listen.</h1>
                    <p className="col-lg-10 mb-0 mx-auto">Easy to listen anytime and anywhere. Podcasts not only provides general information but also from other perspectives.</p>
                  </div>
                  <ul className="d-flex gap-3 flex-wrap gap-3 pt-5 pt-lg-7 align-items-center justify-content-center" >
                    <li>
                      <Link className="d-inline-block rounded-2 overflow-hidden" to="#">
                        <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                      </Link>
                    </li>
                    <li>
                      <Link className="d-inline-block rounded-2 overflow-hidden" to="#">
                        <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="6">
                <div className="brand-content text-center pt-5 pt-lg-7 overflow-hidden">
                      <p className="fs-8 mb-5 nl-text-sep text-gray-700">
                        <span className="text-gray-700">Trusted By <b className="text-dark">35,000+</b> Companies</span>
                      </p>
                      <Row className="gy-2 gy-lg-0 justify-content-center text-center align-items-center">
                        {
                          ["b", "c", "d", "a"].map((brand, idx) => (
                            <Col key={idx} xs="4" sm="3"  >
                              <Link to="#">
                                <img src={`images/brands/${brand}.png`} alt="brand" />
                              </Link>
                            </Col>
                          ))
                        }
                      </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Features Section Start   */}
      <NioSection className="nl-section-feature bg-gray">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Feature overview</span>
          <h2 className="nl-section-title"> Simple yet powerful features </h2>
          <p className="mb-0"> Powerful features designed with simplicity in mind, streamlining processes and maximizing efficiency for optimal performance. </p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5">
            <Col lg="6" >
              <div className="position-relative d-flex flex-column justify-content-around rounded-3 bg-white overflow-hidden h-100">
                <div className="p-5 p-lg-7">
                  <h3 className="mb-2 mb-md-3">Hey <span className="text-primary">Siri,</span> play my podcasts</h3>
                  <p className="fs-6  line-clamp-3"> Just ask your favorite personal assistant to put on whatever you want to hear. Podcasts not only provides general information but also from other perspectives. </p>
                </div>
                <div className="nl-frame mb-n1">
                  <img src="images/podcast-app/card-cover-1.png" alt="card-cover" />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="position-relative  d-flex flex-column justify-content-around rounded-3 bg-white overflow-hidden h-100">
                <div className="p-5 p-lg-7">
                  <h3 className="mb-2 mb-md-3">1 month free <span className="text-danger">subscriptions</span>
                  </h3>
                  <p className="fs-6  line-clamp-3">Beyond hearing millions of free shows, you can also support many of your favorite podcasters with subscriptions. </p>
                </div>
                <div className="nl-frame text-center">
                  <img src="images/podcast-app/card-cover-2.png" alt="card-cover" />
                </div>
              </div>
            </Col>
            <Col xs="12"  >
              <FeaturesContent />
            </Col>
            <Col xs="12">
              <div className="text-center pt-5">
                <NioButton href="#" label="Explore All Features" className="btn-primary" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}

      {/* Tools Section Start */}
      <NioSection fluid className="overflow-hidden pt-7 pt-lg-120">
        <Row className="justify-content-center text-center">
          <Col lg="10" xxl="8">
            <h2 className="display-3 col-lg-8 mx-lg-auto mb-5 mb-lg-0">Tools to power any podcast</h2>
          </Col>
        </Row>
        <NioSection.Content>
          <div className="nl-frame">
            <img src="images/podcast-app/section-cover-4.png" alt="section-cover" />
          </div>
        </NioSection.Content>
      </NioSection>

      {/* Tools Section End */}

      {/* Creator Section Start */}

      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="justify-content-between align-items-center pb-5 pb-md-7">
            <Col lg="5">
              <div className="nl-section-head text-center text-lg-start pb-5 pb-lg-0">
                <h3>Most Popular Creators</h3>
              </div>
            </Col>
            <Col lg="6">
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-end">
                <li>
                  <NioButton href="#" label="Open Creator Account" className="btn-outline-dark border-gray-50" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col lg="4" md="6"  >
              <div>
                <Link to="#" className="d-inline-block position-relative w-100">
                  <img src="images/podcast-app/card-cover-8.jpg" alt="blog-cover" className="overflow-hidden rounded-2 w-100" />
                </Link>
                <div className="pt-5">
                  <div>
                    <h4 className="mb-2">The Daily</h4>
                    <p className="m-0 fs-7  line-clamp-3"> "The Daily" is a popular podcast that offers in-depth news analysis and captivating storytelling, providing listeners with a daily dose of informative and thought-provoking content. </p>
                  </div>
                  <div className="pt-3 pt-md-5">
                    <Link to="#" className="btn-link">
                      <span>Listen Now</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6"  >
              <div>
                <Link to="#" className="d-inline-block position-relative w-100">
                  <img src="images/podcast-app/card-cover-9.jpg" alt="blog-cover" className="overflow-hidden rounded-2 w-100" />
                </Link>
                <div className="pt-5">
                  <div>
                    <h4 className="mb-2">Good Inside Human</h4>
                    <p className="m-0 fs-7  line-clamp-3"> "Good Inside Human" is a podcast that explores inspiring stories, uplifting experiences, and acts of kindness, reminding us of the inherent goodness within humanity and the positive impact we can make in the world. </p>
                  </div>
                  <div className="pt-3 pt-md-5">
                    <Link to="#" className="btn-link">
                      <span>Listen Now</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6"  >
              <div>
                <Link to="#" className="d-inline-block position-relative w-100">
                  <img src="images/podcast-app/card-cover-10.jpg" alt="blog-cover" className="overflow-hidden rounded-2 w-100" />
                </Link>
                <div className="pt-5">
                  <div>
                    <h4 className="mb-2">Slow Burn by Becky</h4>
                    <p className="m-0 fs-7  line-clamp-3"> "Slow Burn" by Becky is a captivating podcast that takes a deep dive into historical events and explores their lasting impact, unraveling intriguing stories with meticulous research and compelling storytelling. </p>
                  </div>
                  <div className="pt-3 pt-md-5">
                    <Link to="#" className="btn-link">
                      <span>Listen Now</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Creator Section End */}

      {/* Works Section Start */}
      <NioSection className="nl-section-works position-relative overflow-hidden pb-0 pt-7 pt-lg-120 bg-gray" masks={["shape-4-b"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">How it works</span>
          <h2 className="nl-section-title"> Podcast experience reimagined </h2>
          <p className="mb-0"> Podcast.co streamlines podcast publishing with powerful growth-focused tools & support. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <div className="nl-frame">
                <img src="images/podcast-app/section-cover-2.png" alt="laptop-frame" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection>
      {/* Works Section End */}

      {/* Integration Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Integrations</span>
          <h2 className="nl-section-title"> Save time with our integrations </h2>
        </NioSection.Head>
        <div className="nl-section-content">
          <NioScrollCarousel selector="intetegration" dir="rtl" className="texts-animation-scroll pb-5 pb-md-7">
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-1.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-2.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-3.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-4.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-5.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-6.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-7.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-8.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-9.png" alt="icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="images/podcast-app/icon-10.png" alt="icon" />
              </Link>
            </div>
          </NioScrollCarousel>
          <Row className="gy-5 gy-lg-0">
            <Col lg="6"  >
              <div>
                <div className="mb-5">
                  <Link to="#">
                    <img src="images/podcast-app/luminous.png" alt="brand" />
                  </Link>
                </div>
                <p className="fs-5 line-clamp-4 text-dark m-0 ">"We are hosts of the podcast True Crime Dropouts and this has made our launch so easy! Every thing is so easy to understand and someone is ALWAYS available to help!Loving Podcast.co so far! Beautiful UI, easy to manage your podcast, and stellar support."</p>
                <div className="d-flex align-items-center gap-3 pt-4">
                  <NioMedia rounded="circle" size="md" img="images/avatar/a.jpg"  />
                  <div>
                    <h6 className="mb-0 mb-n1">Devon Lane</h6>
                    <span className="fs-9 ">Skyline Properties</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6"  >
              <div>
                <div className="mb-5">
                  <Link to="#">
                    <img src="images/podcast-app/sitemark.png" alt="brand" />
                  </Link>
                </div>
                <p className="fs-5 line-clamp-4 text-dark m-0 "> "Podcast.co works like a dream. From hosting a landing page, the ease of uploading and creating info for each episode, the integration of the ability to create eye catching audiograms and the seamless hosting and distribution of the podcast. What’s not to like?" </p>
                <div className="d-flex align-items-center gap-3 pt-4">
                  <NioMedia rounded="circle" size="md" img="images/avatar/b.jpg" />
                  <div>
                    <h6 className="mb-0 mb-n1">Floyd Miles</h6>
                    <span className="fs-9 ">Sun West Condominiums</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="text-center pt-3 pt-lg-7">
                <NioButton href="#" label="See All Integration" className="btn-primary" />
              </div>
            </Col>
          </Row>
        </div>
      </NioSection>
      {/* Integration Section End */}

      {/* FAQ Section Start */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-between gx-lg-7">
            <Col lg="4">
              <div className="nl-section-head pb-lg-0  text-center text-lg-start">
                <span className="nl-section-subtitle mb-2">FAQs</span>
                <h2 className="nl-section-title">Frequently Asked Questions</h2>
                <p className="mb-0">Here are quick answers to all your questions about Podcast.co - Still need some help? <Link to="#" className="btn-link">Get in touch</Link>
                </p>
              </div>
            </Col>
            <Col lg="8">
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* FAQ Section End */}

      {/* Call-To-Action Section Start */}

      <NioSection className="nl-section-podcast-cta  pt-5 pt-lg-7 ">
        <NioSection.Content className="pt-5 pt-lg-7 px-5 px-md-7 overflow-hidden rounded-4 bg-dark" masks={["blur"]} >
          <Row className="align-items-end align-items-xxl-center justify-content-center justify-content-lg-around">
            <Col lg="5">
              <div className="nl-section-head pb-xl-5 pb-xxl-0 text-center text-lg-start">
                <span className="nl-section-subtitle mb-4">Get Started</span>
                <div>
                  <h2 className="display-5 mb-3 text-white">Download our app & get 1 month free trial</h2>
                  <p className="text-white opacity-75">Easy to listen anytime and anywhere. Podcasts not only provides general information but also from other perspectives. </p>
                </div>
                <ul className="d-flex pt-5 pt-lg-7 gap-3 align-items-center justify-content-center justify-content-lg-start ">
                  <li>
                    <Link to="#" className="d-inline-block border border-white rounded-2 overflow-hidden">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-inline-block border border-white rounded-2 overflow-hidden">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4"  >
              <div className="nl-frame text-center">
                <img src="images/podcast-app/section-cover-3.png" alt="mobile-frame" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Call-To-Action Section End */}


      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-gray-50">
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
      {/*  Newsletter Section End  */}

    </AppLayout >
  )
}

export default index;