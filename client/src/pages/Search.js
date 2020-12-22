import React , { useState }from "react";
import SearchBox from "../componenets/SearchBox";
import ResultBox from "../componenets/ResultBox";
import API from "../utils/API";
export default function search(){

    const [formObject, setFormObject] = useState([]);
    const [books, setBooks] = useState({});

    function searchBooks(query){
        API.searchBook(query)
          .then(res => setBooks(res.data.items))
          .catch(err => console.log(err)); 
    };


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});

      };

    function handleSearchSubmit(event){
        event.preventDefault();
        if (formObject.search){
            console.log(formObject.search);
            searchBooks(formObject.search)
        }
    }

  return(
  <div>
    <SearchBox
      handleInputChange={handleInputChange}
      handleSearchSubmit={handleSearchSubmit}
    />
    <ResultBox 
      books={books}
    />
    {console.log(books)}
  </div>
  )
}