import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// layout
import AppLayout from "../../../layouts/AppLayout/AppLayout";

// section content
import { NioSection, NioSubscribeField } from "../../../components";
import CallToAction from "../../../components/PageComponents/SectionComponents/CallToAction/CallToAction";

function index() {
  return (
    <AppLayout variant={2} title="Terms and Conditions">
      {/*  Terms Section Start  */}
      <NioSection
        className="pt-120 pt-lg-180"
        masks={["blur-1 left top", "blur-1 right bottom"]}
      >
        <div className="nl-block-head md">
          <div className="nl-section-head pb-0">
            <nav>
              <ol className="breadcrumb mb-3 mb-md-4">
                <li className="breadcrumb-item">
                  <a href="/index-live-chat-app">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Terms &amp; Conditions
                </li>
              </ol>
            </nav>
            <h2>Terms &amp; Conditions</h2>
          </div>
          <hr className="mt-5 mb-0" />
        </div>
        <NioSection.Content>
          <Row className="pt-3">
            <Col lg="3">
              <div className="nl-entry-sidebar">
                <ul className="nl-list-link nl-list-link-page flush">
                  <li className="active">
                    <Link to="#" className="fs-7">
                      Term &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-7">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-7">
                      Platform Agreement
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-7">
                      Offer Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-7">
                      Prohibited Activities
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="9">
              <div className="nl-entry-wrap pt-3 ps-lg-5">
                <div className="nl-entry">
                  <div className="pb-5">
                    <h5>Website and Mobile App Terms of Use</h5>
                    <p className="fs-7 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nam vitae viverra dolor lacus convallis lobortis
                      quam. Blandit purus sem euismod sit cursus non eu
                      tristique sem. Etiam cras turpis adipiscing molestie elit
                      habitasse. Amet, maecenas cras imperdiet nulla blandit
                      interdum dictum. Cras nunc, risus aliquet facilisi.
                      Ullamcorper posuere porta placerat hendrerit eget neque
                      risus. In gravida feugiat nisl ipsum sed aliquam.
                      Consectetur aliquet vestibulum sit a id. Sed vitae nunc
                      proin feugiat blandit scelerisque ac ultrices. Nulla
                      malesuada viverra eros, sem lectus. Dolor sed ullamcorper
                      magna nibh aliquam mauris fermentum, elit. Nec in augue
                      vel in tellus. Consectetur nunc iaculis donec scelerisque.
                    </p>
                    <p className="fs-7 text-dark">
                      Enim suscipit quam venenatis eget nulla. Non augue et,
                      lobortis vestibulum venenatis enim viverra consequat
                      elementum. Semper eu dictum urna ullamcorper dolor.
                      Potenti sed nunc dignissim laoreet volutpat sit. Fermentum
                      tellus, diam sollicitudin feugiat aliquet nullam turpis
                      ipsum. Dui vestibulum commodo malesuada sagittis in mauris
                      lobortis. Leo amet augue malesuada nibh commodo orci at
                      diam ac.
                    </p>
                    <p className="fs-7 text-dark">
                      Mauris volutpat faucibus cursus nullam odio sit a eget.
                      Leo lacus, sit eleifend amet vitae non. Risus, sit sit
                      arcu augue. Pellentesque ultrices turpis ultrices non
                      sollicitudin nibh aenean hac tempor. Blandit ipsum magna
                      venenatis egestas sed sagittis. Iaculis vel volutpat,
                      rhoncus, sit sit convallis viverra. Diam proin pretium eu
                      odio nisi, proin. Ultrices eu in condimentum aliquam.
                    </p>
                    <p className="fs-7 text-dark">
                      Fusce id mi nisl, amet. Quis viverra ante mauris vulputate
                      varius faucibus dolor sit at. Sed quam interdum sem enim
                      pharetra. Sit porttitor tempor facilisis in. Euismod vel
                      pharetra pretium gravida amet. Tincidunt tortor arcu in
                      mollis fermentum volutpat fringilla. Quis elementum
                      feugiat ac nulla suspendisse ornare euismod. Lorem
                      tincidunt maecenas sed feugiat massa commodo sed malesuada
                      convallis. Tortor at mattis risus, integer pretium, dui,
                      faucibus.
                    </p>
                  </div>
                  <div className="pb-5">
                    <h5>What about my privacy?</h5>
                    <p className="fs-7 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nam vitae viverra dolor lacus convallis lobortis
                      quam. Blandit purus sem euismod sit cursus non eu
                      tristique sem. Etiam cras turpis adipiscing molestie elit
                      habitasse. Amet, maecenas cras imperdiet nulla blandit
                      interdum dictum. Cras nunc, risus aliquet facilisi.
                      Ullamcorper posuere porta placerat hendrerit eget neque
                      risus. In gravida feugiat nisl ipsum sed aliquam.
                      Consectetur aliquet vestibulum sit a id. Sed vitae nunc
                      proin feugiat blandit scelerisque ac ultrices. Nulla
                      malesuada viverra eros, sem lectus. Dolor sed ullamcorper
                      magna nibh aliquam mauris fermentum, elit. Nec in augue
                      vel in tellus. Consectetur nunc iaculis donec scelerisque.
                    </p>
                    <p className="fs-7 text-dark">
                      Enim suscipit quam venenatis eget nulla. Non augue et,
                      lobortis vestibulum venenatis enim viverra consequat
                      elementum. Semper eu dictum urna ullamcorper dolor.
                      Potenti sed nunc dignissim laoreet volutpat sit. Fermentum
                      tellus, diam sollicitudin feugiat aliquet nullam turpis
                      ipsum. Dui vestibulum commodo malesuada sagittis in mauris
                      lobortis. Leo amet augue malesuada nibh commodo orci at
                      diam ac.
                    </p>
                  </div>
                  <div className="pb-5">
                    <h5>
                      Are there restrictions on how I can use the Platform?
                    </h5>
                    <p className="fs-7 text-dark">
                      You agree that all content and materials, including
                      without limitation information, data, text, photographs,
                      videos, audio clips, written posts and comments, software,
                      scripts, graphics, and interactive features (collectively,
                      “Content”) generated, provided, or otherwise made
                      accessible or available by NioLand on the Platform are
                      protected by copyrights, trademarks, service marks,
                      patents, trade secrets or other proprietary rights and
                      laws. All such Content is the proprietary property of
                      NioLand with all rights reserved. Except as expressly
                      authorized by NioLand in writing, you agree not to sell,
                      license, rent, modify, distribute, copy, reproduce,
                      transmit, publicly display, publish, adapt, edit or create
                      derivative works from such Content. For clarity, the
                      foregoing restrictions apply to third party trademarks,
                      which may be used by us on the Platform under license.
                      Unless otherwise noted, we are not affiliated with or
                      endorsed by the owner of any third-party trademarks
                      displayed.
                    </p>
                    <p className="fs-7 text-dark">
                      Subject to these Terms of Use, we grant each user of the
                      Platform a limited, non-exclusive, non-sublicensable and
                      non-transferable license to use (i.e., to download and
                      display locally) Content solely for purposes of using the
                      Platform or receiving services. The Platform may allow you
                      to copy or download certain Content, but please remember
                      that even where these functionalities exist, all the
                      restrictions in this section still apply.{" "}
                    </p>
                    <p className="fs-7 text-dark">
                      By submitting information or content to or through the
                      Platform, by email or over the phone, you hereby do and
                      shall grant us a worldwide, non-exclusive, perpetual,
                      royalty-free, fully paid, sublicensable and transferable
                      license to use such information. Without limiting the
                      generality of the foregoing, you acknowledge that NioLand
                      may disclose and transfer any such information that you
                      provide (i) to its affiliates, agents or service
                      providers; (ii) to any other person or entity with your
                      consent; or (iii) if we have a right or duty to disclose
                      or are permitted or compelled to disclose such information
                      by law.
                    </p>
                  </div>
                  <div className="pb-5">
                    <h5>
                      Who is responsible for what I see and do on the Platform?
                    </h5>
                    <p className="fs-7 text-dark">
                      You agree that all content and materials, including
                      without limitation information, data, text, photographs,
                      videos, audio clips, written posts and comments, software,
                      scripts, graphics, and interactive features (collectively,
                      “Content”) generated, provided, or otherwise made
                      accessible or available by NioLand on the Platform are
                      protected by copyrights, trademarks, service marks,
                      patents, trade secrets or other proprietary rights and
                      laws. All such Content is the proprietary property of
                      NioLand with all rights reserved. Except as expressly
                      authorized by NioLand in writing, you agree not to sell,
                      license, rent, modify, distribute, copy, reproduce,
                      transmit, publicly display, publish, adapt, edit or create
                      derivative works from such Content. For clarity, the
                      foregoing restrictions apply to third party trademarks,
                      which may be used by us on the Platform under license.
                      Unless otherwise noted, we are not affiliated with or
                      endorsed by the owner of any third-party trademarks
                      displayed.
                    </p>
                    <p className="fs-7 text-dark">
                      Subject to these Terms of Use, we grant each user of the
                      Platform a limited, non-exclusive, non-sublicensable and
                      non-transferable license to use (i.e., to download and
                      display locally) Content solely for purposes of using the
                      Platform or receiving services. The Platform may allow you
                      to copy or download certain Content, but please remember
                      that even where these functionalities exist, all the
                      restrictions in this section still apply.{" "}
                    </p>
                  </div>
                </div>
                {/*  .nl-entry  */}
              </div>
              {/*  .nl-entry-wrap  */}
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Terms Section End  */}

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
              <p className="fs-7 text-dark">
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
