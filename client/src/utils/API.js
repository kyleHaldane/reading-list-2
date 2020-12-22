import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q="
const APIkey = "AIzaSyDDObDojjIwY2Ei259fSOmLvBsaIhChgJE"
export default {
    //get all books
    getBook: function(id){
        return axios.get("/api/books/"+id);
    },
    getBooks: function(){
        return axios.get("/api/books");
    },
    saveBook: function(bookData){
        return(axios.post("api/books", bookData))
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" +id)
    },
    searchBook: function(query){
        return axios.get(URL+query+"&key="+APIkey);
    }
};