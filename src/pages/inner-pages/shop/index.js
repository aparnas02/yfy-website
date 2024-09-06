import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioIcon, NioSection, NioCountDown, NioField, NioCard, NioMedia } from '../../../components';

function index() {
  return (
    <AppLayout title="Shop" footerVariant={8} layoutClass="home-project-manage">

      {/*  Shop-Banner Section Start   */}
      <section className="nl-banner nl-banner-shop">
        <Container>
          <div className="nl-banner-wrap">
            <div className="nl-banner-content position-relative">
              <Row className="align-items-center justify-content-around">
                <Col xl="5">
                  <div className="nl-frame text-center mb-7 mb-xl-0">
                    <Link to="#">
                      <img src="images/shop/banner-cover.png" alt="banner-cover"/>
                    </Link>
                  </div>
                </Col>
                <Col xl="6">
                  <div className="text-center text-xl-start">
                    <div className="mb-5">
                      <h1 className="text-capitalize display-3 mb-2">MEGA DEAL</h1>
                      <p className="m-0 "> Hurry and get discounts on selected products up to 60% </p>
                    </div>
                    <NioCountDown />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section >
      {/* Shop - Banner Section End */}

      {/* Shop - Content Start */}
      <NioSection className="nl-section-products">
        <NioSection.Content>
          <Row>
            <Col lg="3">
              <div className="nl-section-content-sidebar">
                <div className="mb-4">
                  <Form data-action="#">
                    <NioField>
                      <NioField.Input childClass="" icon="search before" placeholder="Search Your Product" />
                    </NioField>
                  </Form>
                </div>
                <div className="d-flex flex-column gap-5">
                  <div>
                    <h6 className="mb-3">Categories</h6>
                    <ul className="d-flex gap gy-3 flex-column">
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="all-category" defaultChecked />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="all-category">All Categories</label>
                            <span className="fs-8 text-dark">953</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="tablet" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="tablet">Tablet</label>
                            <span className="fs-8 text-dark">5</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="laptop" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="laptop">Laptop</label>
                            <span className="fs-8 text-dark">48</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="headphone" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="headphone">Headphones</label>
                            <span className="fs-8 text-dark">75</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="console" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="console">Console</label>
                            <span className="fs-8 text-dark">29</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="category" id="other" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="other">other</label>
                            <span className="fs-8 text-dark">265</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="mb-3">Brand</h6>
                    <ul className="d-flex gap gy-3 flex-column">
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="themenio" defaultChecked />
                          <label className="form-check-label fs-7 text-dark" htmlFor="themenio">Themenio</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="mac" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="mac">MacBook</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="acer" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="acer">Acer</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="micro" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="micro">Microsoft</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="giga" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="giga">Gigabyte</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="hp" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="hp">HP</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="google" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="google">Google</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="brand" id="nio" />
                          <label className="form-check-label fs-7 text-dark" htmlFor="nio">Nio</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="mb-3">Stock Status</h6>
                    <ul className="d-flex gap gy-3 flex-column">
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="stock" id="in-stock" defaultChecked />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="in-stock">In Stock</label>
                            <span className="fs-8 text-dark">5</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-check d-flex align-items-center">
                          <input className="form-check-input" type="checkbox" name="stock" id="out-stock" />
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <label className="form-check-label fs-7 text-dark" htmlFor="out-stock">Out Of Stock</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <div className="nl-section-content-products">
                <Row className="justify-content-between align-items-center pb-5">
                  <Col className="col-sm-6">
                    <h6 className="fs-7 fw-normal">Showing all 6 results</h6>
                  </Col>
                  <Col sm="4" xl="3"  xxl="2">
                    <Form.Select aria-label="Default Sorting" className="px-2">
                      <option defaultValue>Default</option>
                      <option value="1">Popular</option>
                      <option value="2">Newest</option>
                      <option value="3">Oldest</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="gy-3 gy-lg-5">
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden ">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-1.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">C305 D Smart Watch</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $44.00 - <del className="text-gray-700">$85.00</del>
                          </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-6.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">High Bass Headphone</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $145.00 - <del className="text-gray-700">$495.00</del>
                          </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden ">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-5.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">TD6 Virtual reality</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $45.00 - <del className="text-gray-700">$95.00</del>
                          </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden ">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-4.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">Sony Headphones</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $45.00 - <del className="text-gray-700">$95.00</del>
                          </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden ">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-3.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">Draht Hocker Sidetable</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $44.00 </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                  <Col md="6" xl="4">
                    <NioCard className="h-100 overflow-hidden ">
                      <div className="card-img-top">
                      <Link to="/product-details">
                          <img src="images/shop/product-cover-2.jpg" alt="product-cover" className="w-100" />
                        </Link>
                      </div>
                      <NioCard.Body className="d-flex flex-column gap-2 p-4">
                        <div>
                          <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">Lavish Enhancement</Link>
                          <div className="d-flex align-items-center gap-1">
                            <ul className="d-flex align-items-center">
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
                            <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-6 m-0 text-dark fw-bold"> $79.00 - <del className="text-gray-700">$85.00</del>
                          </p>
                          <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                        </div>
                      </NioCard.Body>
                    </NioCard>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Shop - Content End */}

      {/* Recent Section Start */}
      <NioSection className="pt-xxl-0">
        <NioSection.Head >
          <h2>Recently Watched</h2>
        </NioSection.Head>
        <NioSection.Content>
        <Row className="gy-3 gy-lg-5">
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                <Link to="/product-details">
                    <img src="images/shop/product-cover-7.jpg" alt="product-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">High Bass Headphone</Link>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="d-flex align-items-center">
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
                      <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-6 m-0 text-dark fw-bold"> $145.00 - <del className="text-gray-700">$495.00</del>
                    </p>
                    <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                <Link to="/product-details">
                    <img src="images/shop/product-cover-10.jpg" alt="product-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">Multifunctional Mouse</Link>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="d-flex align-items-center">
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
                      <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-6 m-0 text-dark fw-bold"> $45.00 - <del className="text-gray-700">$95.00</del>
                    </p>
                    <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                <Link to="/product-details">
                    <img src="images/shop/product-cover-8.jpg" alt="product-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold mb-1 text-dark">Nikon DSLR Camera </Link>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="d-flex align-items-center">
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
                      <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-6 m-0 text-dark fw-bold"> $145.00 - <del className="text-gray-700">$495.00</del>
                    </p>
                    <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                <Link to="/product-details">
                    <img src="images/shop/product-cover-9.jpg" alt="product-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link to="#" className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark">TD6 Earbuds</Link>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="d-flex align-items-center">
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
                      <span className="fs-8 text-gray-700"> (7 Reviews) </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-6 m-0 text-dark fw-bold"> $145.00 - <del className="text-gray-700">$495.00</del>
                    </p>
                    <NioMedia href="#" size="lg" icon="cart" className="text-primary" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Recent Section End */}

    </AppLayout >
  )
}

export default index;