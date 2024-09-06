import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioSection, NioMedia, NioButton, NioIcon, NioCard } from '../../../components';

// section content 
import StoryContent from '../../../components/PageComponents/Homepages/GreenTech/StoryContent/StoryContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/GreenTech/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Green Tech" footerVariant={5} layoutClass="22">
      {/*  Banner Section Start  */}
      <section className="nl-banner nl-banner-green-tech" data-bg-image="green-tech/banner-cover.jpg">
        <div className="nl-banner-wrap">
          <Container>
            <div className="nl-banner-content">
              <Row className="justify-content-center">
                <Col lg="11">
                  <div className="text-center d-flex gap-5 flex-column align-items-center">
                    <h1 className="display-3 text-capitalize text-white">Advancing towards a <br/> <span className="text-primary">Greener Tomorrow</span> by Clean Energy.</h1>
                    <NioMedia
                          size="xxl"
                          rounded="circle"
                          icon="play-fill fs-2"
                          lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                          className="text-bg-white animate animate-infinite animate-pulse animate-duration-1"
                        />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <NioButton 
          href="#"
          label="Learn More"
          icon="arrow-up-right after ms-2"
          className="btn-primary position-absolute bottom-0 start-0"  />
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* Testimonial Section Start */}
      <NioSection className="nl-section-testimonials py-md-80 py-lg-0 mt-xl-n6 mt-xxl-n1">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-lg-end">
            <Col lg="10" xl="11">
              <TestimonialContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Testimonial Section End */}

      {/* Revolution Section Start */}
      <NioSection className="overflow-hidden nl-section-revolution bg-green-800">
        <NioSection.Content>
          <Row>
            <Col lg="6">
              <div className="pb-7 pb-lg-0">
                <h2 className="text-white mb-3 mb-md-5 mb-lg-80">Join The Energy <span className="d-lg-block">Revolution</span>
                </h2>
                <div className="mb-5 fs-6 text-gray"> More Than 100,000+ Teams are using Nioland </div>
                <Row className="gap g-4">
                  {
                    ["b", "c", "d", "a", "e"].map((brand, idx) => (
                      <Col key={idx} xs="4" sm="3" md="2">
                        <Link to="#" className="nl-brand">
                          <img src={`images/brands/${brand}-light.png`} alt="brand" />
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Col>
            <Col lg="6" >
              <div className="ps-5 border-start border-4 border-primary">
                <p className="fs-5 text-white mb-5"> Join the energy revolution and be part of the transformative movement towards sustainable and renewable energy sources. Contribute to a greener future by adopting clean energy technologies and practices. </p>
                <p className="text-white mb-5"> Together, we can make a significant impact in combating climate change and creating a more sustainable world for generations to come. </p>
                <Link to="#" className="btn-link text-white">
                  <span>Learn More</span>
                  <NioIcon name="arrow-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Revolution Section End */}

      {/* Power - Info Section Start */}
      <NioSection className="nl-section-power-info py-7 pt-xl-0 pb-lg-120  mt-xxl-n120">
        <NioSection.Content>
          <Row className="d-flex flex-column gap-5 gap-md-7 gap-xl-200">
            <Col xs="12">
              <div className="nl-frame nl-frame-one">
                <img src="images/green-tech/section-cover-1.jpg" alt="section-frame"  />
                <div className="nl-frame-info bg-white shadow-xl p-5 p-md-7 border-top border-4 border-primary mt-5  mt-xl-0" >
                  <span className="d-inline-block mb-2 mb-md-4">
                    <img src="images/green-tech/icon-3.png" alt="icon" />
                  </span>
                  <h2 className="nl-section-title">Power your home with wind energy</h2>
                  <p className="mb-0"> Power your home with clean and renewable wind energy. By utilizing wind turbines, you can generate electricity that is environmentally friendly and reduces your carbon footprint. With this sustainable solution, you not only save on energy costs but also contribute to a greener future. Experience the benefits of wind power and embrace a more sustainable lifestyle for your home. </p>
                </div>
              </div>
            </Col>
            <Col xs="12">
              <div className="nl-frame nl-frame-two">
                <img src="images/green-tech/section-cover-2.jpg" alt="section-frame"  />
                <div className="nl-frame-info bg-white shadow-xl p-5 p-md-7 border-top border-4 border-primary mt-5 mt-xl-0" >
                  <span className="d-inline-block mb-2 mb-md-4">
                    <img src="images/green-tech/icon-2.png" alt="icon" />
                  </span>
                  <h2 className="nl-section-title">Save money for your business with solar</h2>
                  <p className="mb-0"> Save money for your business by harnessing the power of solar energy. Solar panels provide a cost-effective solution for generating electricity, reducing your reliance on traditional energy sources and lowering your utility bills. Embrace sustainable practices while enjoying long-term savings and a positive environmental impact. Invest in solar and power your business with clean, renewable energy. </p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Power - Info Section End */}

      {/* Community Section Start */}
      <NioSection className="nl-section-community bg-gray">
        <Row>
          <Col xs="12">
            <div className="nl-frame">
              <img src="images/green-tech/section-cover-3.jpg" alt="section-frame"  />
              <div className="nl-frame-info bg-white shadow-xl p-5 p-md-7 py-md-5 border-top border-4 border-primary mt-5 mt-xl-0">
                <h2 className="nl-section-title mb-lg-3">Clean power for your community</h2>
                <p className="mb-0"> Empower your community with clean and sustainable power solutions, reducing carbon emissions and promoting a healthier environment. Join us in embracing renewable energy for a greener and more resilient community. </p>
                <ul className="d-flex flex-column gap-lg-3 pt-5">
                  <li className="d-sm-flex gap-4">
                    <span className="d-inlnine-block flex-shrink-0">
                      <img src="images/green-tech/icon-1.png" alt="icon" className="mb-3 mb-sm-0" />
                    </span>
                    <div>
                      <h5>Smart Technnology</h5>
                      <p className="fs-7 "> Harness the power of smart technology to optimize efficiency, connectivity. </p>
                    </div>
                  </li>
                  <li className="d-sm-flex gap-4">
                    <span className="d-inlnine-block flex-shrink-0">
                      <img src="images/green-tech/icon-4.png" alt="icon" className="mb-3 mb-sm-0" />
                    </span>
                    <div>
                      <h5>Sustainable solutions</h5>
                      <p className="fs-7 "> Discover sustainable solutions that promote environmental stewardship, reduce carbon footprint. </p>
                    </div>
                  </li>
                  <li className="d-sm-flex gap-4">
                    <span className="d-inlnine-block flex-shrink-0">
                      <img src="images/green-tech/icon-5.png" alt="icon" className="mb-3 mb-sm-0" />
                    </span>
                    <div>
                      <h5>Cost savings</h5>
                      <p className="fs-7 "> Achieve significant cost savings through efficient resource management, streamlined processes. </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </NioSection>
      {/* Community Section End */}

      {/* Resource Section Start */}

      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="justify-content-between align-items-end pb-5">
            <Col lg="5">
              <div className="nl-section-head pb-5 pb-lg-0">
                <h2 className="nl-section-title">Resources</h2>
                <p className="mb-0"> Access a wide range of valuable resources to enhance knowledge, skills, and productivity for personal. </p>
              </div>
            </Col>
            <Col lg="6" className="text-lg-end">
                  <NioButton href="#" label="Browse All" className="btn-primary" />
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col lg="4" md="6">
              <NioCard className="border-0">
                <div className="card-img-top">
                  <Link to="#" className="d-inline-block position-relative w-100">
                    <img src="images/green-tech/card-cover-1.jpg" alt="blog-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pb-0 pt-4">
                  <div>
                    <h5 className="text-capitalize line-clamp-1 mb-3">The Future of Solar Energy</h5>
                    <p className="fs-7 mb-0 line-clamp-3"> The future of solar energy looks promising, with advancing technologies and increased adoption paving the way for a sustainable and renewable energy. </p>
                  </div>
                  <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" >
              <NioCard className="border-0">
                  <div className="card-img-top">
                    <Link to="#" className="d-inline-block position-relative w-100">
                      <img src="images/green-tech/card-cover-2.jpg" alt="blog-cover" className="w-100" />
                    </Link>
                  </div>
                  <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pb-0 pt-4">
                    <div>
                      <h5 className="text-capitalize line-clamp-1 mb-3">Electric Cars And Sustainability</h5>
                      <p className="fs-7 mb-0 line-clamp-3"> Electric cars are driving sustainability forward by reducing carbon emissions, promoting clean transportation, and contributing to a more. </p>
                    </div>
                    <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link" />
                  </NioCard.Body>
              </NioCard>
              <div>
              </div>
            </Col>
            <Col lg="4" md="6" >
            <NioCard className="border-0">
                <div className="card-img-top">
                  <Link to="#" className="d-inline-block position-relative w-100">
                    <img src="images/green-tech/card-cover-3.jpg" alt="blog-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pb-0 pt-4">
                  <div>
                    <h5 className="text-capitalize line-clamp-1 mb-3">The Evolution Of Sustainable Architecture</h5>
                    <p className="fs-7 mb-0 line-clamp-3">Sustainable architecture has evolved, integrating innovative design, eco-friendly materials, and energy-efficient practices to create environmentally conscious.</p>
                  </div>
                  <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Resource Section End */}

      {/* Stories Section Start */}
      <NioSection fluid={true} className="nl-section-stories overflow-hidden py-7 py-lg-120  bg-green-800">
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-xl-center">
            <Col xl="6">
              <StoryContent />
            </Col>
            <Col xl={{ span: 5, order: 1 }}>
              <div className="px-3 ps-xl-7 ms-xl-5">
                <h2 className="display-3 text-white text-capitalize mb-3">Inspiring Stories to build a <span className="text-primary">better future.</span>
                </h2>
                <p className="fs-5 m-0 text-white"> Explore inspiring stories that ignite hope and drive change, showcasing individuals and initiatives dedicated to building a better future for all. </p>
                <NioButton href="#" label="Find Out More" className="btn-primary mt-5 mt-lg-7" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Stories Section End */}

      {/* CTA Section Start */}
      <NioSection className="bg-dark pt-lg-7 pb-lg-7">
        <Row className="align-items-center justify-content-between">
          <Col lg="6">
            <div className="pb-5 pb-lg-0">
              <h3 className="mb-2 text-white">Stay up to date</h3>
              <p className="fs-7 opacity-75 text-white">
                Stay informed and up to date with the latest news, trends, and developments across various domains with our comprehensive updates.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="text-lg-end">
              <NioButton href="#" label=" Get Started" className="btn-primary" />
            </div>
          </Col>
        </Row>
      </NioSection>
      {/* CTA Section End */}
    </AppLayout >
  )
}

export default index;