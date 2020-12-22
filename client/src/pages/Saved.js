import React, { useState, useEffect} from "react";
import ResultBox from "../componenets/ResultBox";
import { Container, Row, Col} from "reactstrap";
import API from "../utils/API";
export default function saved(){

  const [savedBooks, setSavedBooks] = useState({});
  
  function loadBooks(){
    API.getBooks()
      .then(res => setSavedBooks(res.data))
      .catch(err => console.log(err));
  };
  loadBooks()

    return(
        <div>
          <Container className="">
            <h5>Saved Books</h5>
            <ResultBox books={savedBooks}/>
          </Container>
        </div>
    )
}