import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// components
import {
  NioIcon,
  NioSection,
  NioCounter,
  NioCard,
  NioMedia,
} from "../../../components";

// section contents
import ProductView from "../../../components/PageComponents/InnerPages/ProductDetails/ProductView/ProductView";

function index() {
  return (
    <AppLayout title="Product Details" footerVariant={8} layoutClass="16">
      {/*  Product-Details Section Start   */}
      <NioSection className="nl-section-product-details pb-lg-7 pt-120 pt-lg-180">
        <NioSection.Content>
          <Row className="gy-5 gy-md-7 gy-lg-0 justify-content-lg-between">
            <Col lg="6">
              <ProductView />
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div>
                  <div className="pb-3 border-bottom">
                    <span className="fs-8  text-uppercase fw-semibold">
                      Electronics
                    </span>
                    <h3>Wireless Headphone -360</h3>
                  </div>
                  <div className="d-flex gap-4 align-items-center pt-1">
                    <div className="d-flex gap-1 align-items-center">
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
                          <em className="icon ni ni-star-fill text-gray-600"></em>
                        </li>
                      </ul>
                      <p className="fs-8">(7 Reviews)</p>
                    </div>
                    <Link to="#" className="d-flex align-items-center ">
                      <NioIcon name="edit-alt text-dark " />
                      <span className="fs-8 ms-1 text-dark">
                        Write A Review
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="nl-product-specification py-5">
                  <div className="nl-product-specification-content">
                    <h6 className="fs-7 m-0 w-50">Color:</h6>
                    <ul className="color-select w-50">
                      <li className="form-check">
                        <input
                          className="form-check-input border-2 almond"
                          type="radio"
                          name="color"
                          id="color-one"
                        />
                      </li>
                      <li className="form-check">
                        <input
                          className="form-check-input border-2 steel-blue"
                          type="radio"
                          name="color"
                          id="color-two"
                        />
                      </li>
                      <li className="form-check">
                        <input
                          className="form-check-input border-2 electric-blue"
                          type="radio"
                          name="color"
                          id="color-three"
                        />
                      </li>
                      <li className="form-check">
                        <input
                          className="form-check-input border-2 dark-olive"
                          type="radio"
                          name="color"
                          id="color-four"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="nl-product-specification-content">
                    <h6 className="fs-7 m-0 w-50">Brand:</h6>
                    <p className="fs-7  w-50">Nio</p>
                  </div>
                  <div className="nl-product-specification-content">
                    <h6 className="fs-7 m-0 w-50">Product Code:</h6>
                    <p className="fs-7  w-50">Product 20</p>
                  </div>
                  <div className="nl-product-specification-content">
                    <h6 className="fs-7 m-0 w-50">Availability:</h6>
                    <p className="fs-7  w-50">25 In Stock</p>
                  </div>
                  <div className="nl-product-specification-content">
                    <h6 className="fs-7 m-0 w-50">Quantity:</h6>
                    <div className="w-50">
                      <NioCounter />
                    </div>
                  </div>
                </div>
                <div className="position-relative overflow-hidden bg-primary-soft rounded-3 p-4">
                  <h4 className="mb-5">$450.00</h4>
                  <p className="fs-8 d-flex align-items-center gap-1 text-dark">
                    <NioIcon
                      name="plus-circle-fill"
                      variant="primary"
                      className="fs-5"
                    />
                    <span>Add Nio care pius service from $39</span>
                  </p>
                  <ul className="d-flex align-items-center gap-2">
                    <li>
                      <button className="btn btn-primary">Buy Now</button>
                    </li>
                    <li>
                      <button className="btn btn-white text-primary">
                        Add To Cart
                      </button>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center gap-1 pt-4">
                    <em className="icon ni ni-heart-fill text-primary "></em>
                    <p className="fs-7 fw-semibold text-dark">
                      {" "}
                      Add to WishList{" "}
                      <span className="fs-8 text-gray-700 fw-normal">
                        (32,145 Adds)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="fs-8 text-dark">
                    {" "}
                    Must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound.{" "}
                  </p>
                  <div className="nl-social d-sm-flex align-items-center gap-3 pb-2">
                    <h6 className="fs-8 m-0 fw-semibold text-uppercase mb-2 mb-sm-0">
                      Share :
                    </h6>
                    <ul>
                      <li>
                        <Link to="#" className="d-flex align-items-center ">
                          <em className="icon ni ni-facebook-f text-primary"></em>
                          <p className="fs-8 text-nowrap text-dark fw-semibold ms-1">
                            Facebook{" "}
                            <span className="fs-8 text-gray-700">120</span>
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex align-items-center ">
                          <em className="icon ni ni-twitter text-primary"></em>
                          <p className="fs-8 text-nowrap text-dark fw-semibold ms-1">
                            Twitter{" "}
                            <span className="fs-8 text-gray-700">60</span>
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="d-flex align-items-center ">
                          <em className="icon ni ni-snapchat text-primary"></em>
                          <p className="fs-8 text-nowrap text-dark fw-semibold ms-1">
                            Snap Chat{" "}
                            <span className="fs-8 text-gray-700">80</span>
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="nl-nav-tabs py-5 py-lg-7">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  {" "}
                  Product Details{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                  disabled
                >
                  {" "}
                  Reviews (242){" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                  disabled
                >
                  {" "}
                  Shipping & Payment{" "}
                </Link>
              </li>
            </ul>
            <div className="tab-content pt-5" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                tabIndex="0"
              >
                <div className="mb-5">
                  <h5 className="mb-2">Product Description</h5>
                  <p className="fs-7 text-dark">
                    {" "}
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Vivamus bibendum
                    magna Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Contrary to popular roots in a piece of classical.
                    Must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound.{" "}
                  </p>
                </div>
                <Row>
                  <Col lg="10" xl="8">
                    <Row className="flex-row-reverse gy-5 gy-md-0">
                      <Col md="6">
                        <div>
                          <h6 className="mb-3">Care & Instructions</h6>
                          <p className="fs-7 text-dark">
                            {" "}
                            Introducing our premium product, designed to meet
                            your needs with style and functionality. Crafted
                            with utmost care and attention to detail, this
                            product combines durability and aesthetic appeal.{" "}
                          </p>
                        </div>
                      </Col>
                      <Col md="6">
                        <h6 className="mb-3">Item Details</h6>
                        <ul className="d-flex flex-column gap-1">
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Brand:{" "}
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">
                              Nio Fashion
                            </p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Product Code:{" "}
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">
                              Product 20
                            </p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Reference:
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">
                              455656ssss562
                            </p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">Type:</h6>
                            <p className="fs-7 text-gray-j800 w-50">Skirts</p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Reward Points:
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">
                              Nio Fashion
                            </p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Color:
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">Gray</p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Condition:
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">Fress</p>
                          </li>
                          <li className="d-flex align-items-center justify-content-between">
                            <h6 className="fs-8 text-uppercase  w-50">
                              Availability:
                            </h6>
                            <p className="fs-7 text-gray-j800 w-50">In Stock</p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </NioSection.Content>
      </NioSection>
      {/* Product - Details Section End */}

      {/* Related Section Start */}
      <NioSection className="pt-lg-0">
        <Row>
          <Col xs="12">
            <div className="nl-section-head pb-5">
              <h2>Related products</h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5">
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                  <Link to="/product-details">
                    <img
                      src="images/shop/product-cover-7.jpg"
                      alt="product-cover"
                      className="w-100"
                    />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link
                      to="#"
                      className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark"
                    >
                      High Bass Headphone
                    </Link>
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
                    <p className="fs-6 m-0 text-dark fw-bold">
                      {" "}
                      $145.00 - <del className="text-gray-700">$495.00</del>
                    </p>
                    <NioMedia
                      href="#"
                      size="lg"
                      icon="cart"
                      className="text-primary"
                    />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                  <Link to="/product-details">
                    <img
                      src="images/shop/product-cover-10.jpg"
                      alt="product-cover"
                      className="w-100"
                    />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link
                      to="#"
                      className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark"
                    >
                      Multifunctional Mouse
                    </Link>
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
                    <p className="fs-6 m-0 text-dark fw-bold"> $45.00</p>
                    <NioMedia
                      href="#"
                      size="lg"
                      icon="cart"
                      className="text-primary"
                    />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                  <Link to="/product-details">
                    <img
                      src="images/shop/product-cover-8.jpg"
                      alt="product-cover"
                      className="w-100"
                    />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link
                      to="#"
                      className="d-block line-clamp-1 fs-5 fw-bold mb-1 text-dark"
                    >
                      Nikon DSLR Camera{" "}
                    </Link>
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
                    <p className="fs-6 m-0 text-dark fw-bold"> $145.00</p>
                    <NioMedia
                      href="#"
                      size="lg"
                      icon="cart"
                      className="text-primary"
                    />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6" xl="3">
              <NioCard className="h-100 overflow-hidden">
                <div className="card-img-top">
                  <Link to="/product-details">
                    <img
                      src="images/shop/product-cover-9.jpg"
                      alt="product-cover"
                      className="w-100"
                    />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column gap-2 p-4">
                  <div>
                    <Link
                      to="#"
                      className="d-block line-clamp-1 fs-5 fw-bold  mb-1 text-dark"
                    >
                      TD6 Earbuds
                    </Link>
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
                    <p className="fs-6 m-0 text-dark fw-bold">
                      {" "}
                      $145.00 - <del className="text-gray-700">$495.00</del>
                    </p>
                    <NioMedia
                      href="#"
                      size="lg"
                      icon="cart"
                      className="text-primary"
                    />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Related Section End */}
    </AppLayout>
  );
}

export default index;
