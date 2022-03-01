import React from "react";
import { Col, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import USERS from '../Data/fruitsDetails';
import List from '../Components/List';
import '../style/Services.css';
function Services() {
  let { keyword } = useParams();
  if (keyword !== '') {
    var results = USERS.filter((USERS) => {
      return USERS.id == keyword;
    });
  }

  return (
    <>
      <div>
        {results.map((ee) => {
          return <Col sm={10} className='colum'>
            <Card className='cardWise' >
              <Row className='cardrow'>
                <Col sm={4}><Card.Img variant="top" src={ee.Image} fluid="true" className='cardimg' /></Col>
                <Col sm={8}>    <Card.Body>
                  <Card.Title>{ee.name}</Card.Title>
                  <Card.Text>
                    {ee.desciption}
                  </Card.Text>
                  <Card.Text >
                    Price : RS {ee.Kg} /KG
                  </Card.Text>
                </Card.Body></Col>
              </Row>


            </Card>
          </Col>
        })}

      </div>
      <List />
    </>
  );
}
export default Services;