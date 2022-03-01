import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import "../style/Products.css";
import USERS from "../Data/fruitsDetails";
function Products() {
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(USERS);
  const [ani, setAni] = useState(2);
  var a;
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }
    setName(keyword);
  };

  return (
    <div className="products">
      <div className="inputs">
        <Form.Control
          type="search"
          placeholder="Search fruits"
          value={name}
          onChange={filter}
          className="input"
        />
      </div>

      <Row sm={12} style={{margin:'0px'}}>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <Col key={user.id} sm={3} className="colum1" style={{animationDelay: `${ani}`}}>
              <Card className="cardWise1">
                <Card.Img
                  variant="top"
                  src={user.Image}
                  fluid="true"
                  className="img1"
                />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.desciption}</Card.Text>
                  <Card.Text>Price : RS {user.Kg} /KG</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h1 className="Empty">No results found!</h1>
        )}
      </Row>
    </div>
  );
}

export default Products;
