import React from "react";
import { Jumbotron } from 'reactstrap';

export default function header() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">(React) Google Books Search</h1>
                <p className="lead">Search for and save books of interest</p>
            </Jumbotron>
        </div>
    )
}