import { Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./UpdateItem.css";

const UpdateItem = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <Container fluid>
      <h3>Update Item</h3>
      <Form className="form-container">
        <Input
          type="text"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Image Url"
          onChange={(e) => setImage(e.target.value)}
        />
        
      </Form>
      <Row>
          <Col >
            <Button
              title="Update Item"
              style={{ minWidth: 100, marginTop: 2, marginRight: 5 }}
              onClick={() =>
                props.updateItem(props.itemId, {
                  name: name,
                  image: image,
                })
              }
            />
            <Button
              title="Delete Item"
              style={{ minWidth: 100, backgroundColor: "red", marginTop: 2 }}
              onClick={() => props.deleteItem(props.itemId)}
            />
          </Col>
        </Row>
    </Container>
  );
};

export default UpdateItem;
