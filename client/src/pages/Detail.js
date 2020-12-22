import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState({});

  const { id } = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(book.authors);
  return (
    <Container>
      <Row>
        <Col>
          <h1>{book.title} by {book.authors}</h1>
        </Col>
      </Row>
      <Row>
          <Col>
            <img src={`${book.image}`} alt={book.title}></img>
          </Col>
      </Row>
      <Row>
        <Col>
          <h2>Description</h2>
            <p>{book.description}</p>
        </Col>
      </Row>
    </Container>
  )
}
export default Detail;

