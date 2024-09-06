import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioField, NioIcon, NioBadge, NioMedia, NioCard, NioSubscribeField } from '../../../components';

// section content  
import BlogsContent from '../../../components/PageComponents/InnerPages/Blogs/BlogsContent/BlogsContent';
import CallToAction from '../../../components/PageComponents/SectionComponents/CallToAction/CallToAction';

function index() {

  return (
    <AppLayout title="Blog / News">

      {/*  Resource Section Start  */}
      <NioSection className="overflow-hidden pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <NioSection.Content>
          <Row className="justify-content-center text-center">
            <Col lg="8" xl="6">
              <div className="nl-section-head">
                <span className="nl-section-subtitle mb-2">Our blog</span>
                <h2 className="nl-section-title">Resource Center</h2>
                <p> Unlock the potential of our resource center, accessing valuable information and insights for your business growth. </p>
              </div>
            </Col>
            <Col lg="8">
              <div className="nl-filter-wrap pb-5 pb-md-7">
                <NioField>
                  <NioField.Input icon="search before z-1" placeholder="Search for articles" />
                </NioField>
                <ul className="nl-tag justify-content-center pt-4">
                  <li>
                    <Link to="#" className="nl-tag-item">all</Link>
                  </li>
                  <li>
                    <Link to="#" className="nl-tag-item">Growth</Link>
                  </li>
                  <li>
                    <Link to="#" className="nl-tag-item">Marketing</Link>
                  </li>
                  <li>
                    <Link to="#" className="nl-tag-item">Tech</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl="8" >
              <BlogsContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Resource Section End  */}

      {/*  Latest Section Start  */}
      <NioSection className="nl-blog-section" masks={["blur-1 right bottom"]}>
        <NioSection.Head className="pb-5">
          <h2 className="mb-0 nl-section-title">Latest Posts</h2>
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
            <Col md="6" lg="4" >
              <NioCard className="rounded-3">
                <NioCard.Body className="d-flex flex-column gap-4 p-4">
                  <div className="card-img-top">
                    <img src="images/blog/c.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">How To Build And Automate A Referral Program</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/c.jpg" />
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
                    <img src="images/blog/e.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">How To Optimize Page Performance Using Heatmaps</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/e.jpg" />
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
                    <img src="images/blog/f.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div>
                    <NioBadge rounded="circle" className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize mb-5">
                      <Link className="text-dark" to="/blog-details">4 Tips To Optimize Your Funnels For Conversion</Link>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <NioMedia size="md" rounded="circle" img="images/avatar/f.jpg" />
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
          </Row>
          <div className="nl-pagination-wrap d-flex flex-wrap flex-md-nowrap align-items-center gap g-3 justify-content-center justify-content-md-between pt-5 pt-lg-7">
            <div className="nl-pagination-col">
              <p className="fs-7">Showing: <span className="text-dark">1-4 of 23 Products</span>
              </p>
            </div>
            <div className="nl-pagination-col">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-s1">
                  <li className="page-item d-none">
                    <Link className="page-link" to="#">
                      <NioIcon name="chevron-left" />
                      <span className="d-none d-sm-inline-block">Prev</span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">1</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">2</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">3</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">4</Link>
                  </li>
                  <li className="page-item d-none d-lg-block">
                    <Link className="page-link" to="#">5</Link>
                  </li>
                  <li className="page-item d-none d-lg-block">
                    <Link className="page-link" to="#">6</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <span className="d-none d-sm-inline-block">Next</span>
                      <NioIcon name="chevron-right" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*  .nl-pagination-wrap  */}
        </NioSection.Content>
      </NioSection>
      {/*  Latest Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <CallToAction />
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End  */}


      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
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
      {/*  Newsletter Section End  */}
    </AppLayout>
  )
}

export default index;