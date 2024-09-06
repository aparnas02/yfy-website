import React from 'react';
import { Accordion } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';


export default function FaqContent() {
  const data = useData();
  const contents = data.faqs.contents;
  return (
    <Accordion className="style-1 icon-arrow-circle" defaultActiveKey={0}>
      {
        contents && contents.map((content, idx) => (
          <Accordion.Item eventKey={idx} key={idx}>
            <Accordion.Header>{content.title}</Accordion.Header>
            <Accordion.Body>{content.description}</Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  );
}
