import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioSection, NioMedia, NioIcon, NioCard, NioBadge, NioSubscribeField } from '../../../components';

function index() {
  return (
    <AppLayout title="Blog Post">

      {/*  Tech Section Start  */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left top"]}>
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <div className="nl-section-head">
              <span className="nl-section-subtitle mb-2">tech</span>
              <h2 className="nl-section-title">Enhanced refresh with REST API is now generally available for the free plan</h2>
              <ul className="nl-list-meta justify-content-center pt-1" >
                <li className="fs-7">Feb 10, 2022</li>
                <li className="fs-7">8 min read</li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="8" >
              <div className="nl-head-img pb-5 pb-md-7">
                <img src="images/blog/single-a.jpg" alt="blog-cover" className="overflow-hidden rounded-3 img-fluid" />
              </div>
            </Col>
          </Row>
          <div className="nl-section-blog-content">
            <Row className="gap g-5">
              <Col lg="8">
                <div className="nl-entry">
                  <div className="mb-3 mb-md-5">
                    <h5 className="text-capitalize mb-3">Building the right tech stack is key</h5>
                    <p className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.</p>
                    <ul className="ps-3">
                      <li>
                        <p className="fs-7">Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</p>
                      </li>
                      <li>
                        <p className="fs-7">Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent</p>
                      </li>
                      <li>
                        <p className="fs-7">Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</p>
                      </li>
                      <li>
                        <p className="fs-7"> Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3 mb-md-5">
                    <h5 className="text-capitalize mb-3">How to choose the right tech stack for your company?</h5>
                    <p className="fs-7">Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.</p>
                    <img src="images/blog/single-b.jpg" alt="blog-cover" />
                    <h5 className="text-capitalize mb-3">What to consider when choosing the right tech stack?</h5>
                    <p className="fs-7">At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet suspendisse interdum consectetur libero nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus purus in.</p>
                    <ul className="ps-3">
                      <li>
                        <p className="fs-7">Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</p>
                      </li>
                      <li>
                        <p className="fs-7">Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent</p>
                      </li>
                      <li>
                        <p className="fs-7">Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</p>
                      </li>
                      <li>
                        <p className="fs-7"> Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3 mb-md-5">
                    <h5 className="text-capitalize mb-3">What are the most relevant factors to consider?</h5>
                    <p className="fs-7">Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed euismod nisi.</p>
                  </div>
                </div>
                {/*  .nl-entry  */}
              </Col>
              <Col lg="4">
                <div className="nl-section-blog-sidebar">
                  <NioCard className="rounded-2 ">
                    <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                      <div className="d-flex flex-wrap gap-2">
                      <NioMedia size="lg" rounded="circle" img="images/avatar/a.jpg" />
                      <div>
                        <h5 className="mb-0">John Carter</h5>
                        <span className="d-block fs-8">CEO &amp; Founder</span>
                      </div>
                      </div>
                      <p className="fs-7 mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                      <ul className="d-flex align-items-center gap-3">
                        <li>
                          <Link to="#">
                            <NioIcon className="fs-3" name="facebook-circle" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <NioIcon className="fs-3" name="twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <NioIcon className="fs-3" name="linkedin-round" />
                          </Link>
                        </li>
                      </ul>
                    </NioCard.Body>
                  </NioCard>
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Tech Section End  */}

      {/*  Blogs Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head space={false} className="pb-5">
          <h2>Related Articles</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5">
            <Col md="6" lg="4" >
              <NioCard className="rounded-3">
                <NioCard.Body className="d-flex flex-column gap-4 p-4">
                  <div className="card-img-top">
                    <img src="images/blog/a.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">Why customer retention is the ultimate growth strategy?</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/a.jpg" />
                      <div>
                        <span className="fs-7 text-dark fw-semibold">John Carter</span>
                        <ul className="nl-list-meta small">
                          <li className="fs-8 text-gray-700">Feb 10, 2022</li>
                          <li className="fs-8 text-gray-700">8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="rounded-3">
                <NioCard.Body className="d-flex flex-column gap-4 p-4">
                  <div className="card-img-top">
                    <img src="images/blog/b.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Marketing" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">Optimizing Your Advertising Campaigns For Higher ROAS</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/b.jpg" />
                      <div>
                        <span className="fs-7 text-dark fw-semibold">Annette Black</span>
                        <ul className="nl-list-meta small">
                          <li className="fs-8 text-gray-700">Feb 10, 2022</li>
                          <li className="fs-8 text-gray-700">8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="rounded-3">
                <NioCard.Body className="d-flex flex-column gap-4 p-4">
                  <div className="card-img-top">
                    <img src="images/blog/b.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">How To Build The Ultimate Tech Stack For Growth</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/b.jpg" />
                      <div>
                        <span className="fs-7 text-dark fw-semibold">Ralph Edwards</span>
                        <ul className="nl-list-meta small">
                          <li className="fs-8 text-gray-700">Feb 10, 2022</li>
                          <li className="fs-8 text-gray-700">8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Blogs Section End  */}

      {/*  Newsletter Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="bg-primary-gradient rounded-3  p-5 p-lg-7" >
            <Row className="align-items-center justify-content-center justify-content-lg-between gy-5">
              <Col lg="6">
                <div className="d-flex flex-column gap-3 flex-lg-row align-items-center">
                  <NioMedia size="xl" rounded="circle" variant="white" icon="mail-fill text-primary" />
                  <div className="text-center text-lg-start">
                    <h3 className="text-white text-capitalize mb-1">Subscribe To Our Newsletter?</h3>
                    <p className="fs-7 mb-0 text-white opacity-75">
                      Highly curated content and updates directly to your inbox.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="10" lg="6" xl="5">
                  <NioSubscribeField variant={3} />
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>

      {/*  Newsletter Section End  */}


    </AppLayout >
  )
}

export default index;