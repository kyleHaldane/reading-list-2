import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container, Row, Col, Button,
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Media
} from 'reactstrap';
import API from "../../utils/API";

export default function resultCard(props) {

  let data;

  function databaseOrApi(props) {
    //checks if the data comes from google books api
    if (props.book.volumeInfo != undefined) {
      data = {
        title: props.book.volumeInfo.title,
        authors: props.book.volumeInfo.authors,
        description: props.book.volumeInfo.description,
        image: props.book.volumeInfo.imageLinks === undefined
          ? ""
          : `${props.book.volumeInfo.imageLinks.thumbnail}`
      }
    }
    //defaults to coming from database if not from google books api
    else
      data = {
        title: props.book.title,
        authors: props.book.authors,
        description: props.book.description,
        image: props.book.image,
        id: props.book._id
      }
    return data;
  }
  //Reassignes the data from props
  data = databaseOrApi(props);

  function save(event) {
    event.preventDefault();
    API.saveBook({
      title: props.book.volumeInfo.title,
      authors: props.book.volumeInfo.authors,
      description: props.book.volumeInfo.description,
      image: props.book.volumeInfo.imageLinks === undefined
        ? ""
        : `${props.book.volumeInfo.imageLinks.thumbnail}`
    })
  }

  const remove = (event) => {
    event.preventDefault();
    API.deleteBook(data.id);
    console.log(data)
  }

  return (
    <div>
      <Container>
        <Card>
          <CardBody >
            <CardTitle>{data.title}</CardTitle>
            <CardSubtitle>{data.authors.map(author => author + " ")}</CardSubtitle>
          </CardBody>
          <Media width="30%" src={`${data.image}`} alt="Card image cap" />
          <CardBody>
            <CardText>{data.description}</CardText>
            {props.book.volumeInfo != undefined ?
            <Button outline color="secondary" onClick={save}>save</Button> :
            <Button outline color="secondary" onClick={remove}>delete</Button>}
            <Link to={"/detail/" + data.id}>
              {` `}<Button outline color="secondary">view</Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}