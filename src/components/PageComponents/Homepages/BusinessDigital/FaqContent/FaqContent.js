import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Col, Row } from "react-bootstrap";

// data
import { useData } from "../../../../../context/DataProvider/DataProvider";

// components
import NioIcon from "../../../../NioIcon/NioIcon";
import NioMedia from "../../../../NioMedia/NioMedia";
import NioCard from "../../../../Cards/NioCard/NioCard";

export default function Business() {
  const data = useData();
  const contents = data.faqs.contents;

  return (
    <Row className="gy-5">
      <Col lg="8">
        <Accordion
          className="style-1 icon-arrow-circle"
          // defaultActiveKey={0}
        >
          {contents &&
            contents.map((content, idx) => (
              <Accordion.Item eventKey={idx} key={idx}>
                <Accordion.Header>{content.title}</Accordion.Header>
                <Accordion.Body>{content.description}</Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </Col>
      <Col lg="4">
        <NioCard className="bg-gray">
          <NioCard.Body>
            <div className="mb-4">
              <NioMedia
                border
                size="lg"
                rounded="circle"
                icon="chat-fill"
                variant="purple"
                className="mb-3"
              />
              <h5 className="mb-2 ">
                Do you need any help? Get in touch with our support team.
              </h5>
              <p className="fs-8 mb-0 text-black">
                Lorem ipsum dolor sit amet, consectet adipiscing elit. Consequat
                aliquet soll ac.
              </p>
            </div>
            <Link
              to="#"
              className="btn-link text-lowercase text-purple text-success"
            >
              <span>support@nioland.com</span>
              <NioIcon name="arrow-right" />
            </Link>
          </NioCard.Body>
        </NioCard>
      </Col>
    </Row>
  );
}
