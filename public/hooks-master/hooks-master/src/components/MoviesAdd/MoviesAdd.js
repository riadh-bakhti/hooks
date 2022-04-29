import React from 'react'
import { useState } from "react";
import Stars from "../Stars/Stars";

import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import "./moviesadd.css"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter movie title" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" placeholder="Enter movie year" />
            </Form.Group>
          </Row>

    

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Movie Image</Form.Label>
            <Form.Control placeholder="Enter movie image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Movie Link</Form.Label>
            <Form.Control placeholder="Enter movie link" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Movie Trailer</Form.Label>
            <Form.Control placeholder="Enter movie trailer" />
          </Form.Group>

          <Form.Control
            as="textarea"
            placeholder="Leave a description here"
            style={{ height: "100px" }}
          />

          <Stars isEdit={true} />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MoviesAdd = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        
        onClick={() => setModalShow(true)}
      >
        Add
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default MoviesAdd