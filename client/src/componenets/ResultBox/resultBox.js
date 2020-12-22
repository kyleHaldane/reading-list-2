import ResultCard from "../ResultCard";
import React from "react";
import { Col, Row, Container } from "reactstrap";

export default function resultBox(props){
    return(
        <div>
          <Container>
            <Row>
              <Col>
              <a>Results</a>
              <hr />
              <div>
                {props.books.length ? (
                  props.books.map(book => <ResultCard book ={book} />))
                : <h3>No Results to Display</h3>
                }
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}