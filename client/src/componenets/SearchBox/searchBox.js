import React from "react";
import ResultBox from "../ResultBox";
import { Container, Row, Col, Button } from 'reactstrap';
import { Input } from "../Form";

export default function searchBox(props){
  return(
  <div className="">
    <Container className="shadow p-3 mb-5 bg-white rounded border">
    <Row>
      <Col>
      <h2>Book search</h2>
      </Col>
    </Row>
    <Row>
      <Col>
      <div className="md-form mt-2">
      <Input type="text" placeholder="Search" aria-label="Search"
         onChange={props.handleInputChange}
         name="search"
         placeholder="search book (required)" 
      />
      </div>
      <Button className="mb-3" outline color="primary"
        onClick={props.handleSearchSubmit}
      >search</Button>{' '}
      </Col>
    </Row>
    </Container>
  </div>
  )
}