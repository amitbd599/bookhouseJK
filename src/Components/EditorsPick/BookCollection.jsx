import React from "react";
import { Row, Spinner } from "react-bootstrap";
import Book from "./Book";
import useBooks from "../../hooks/useBooks";

function BookCollection() {
  const [books] = useBooks();

  return (
    <div className="mt-4 mb-3">
      <h3 className="text-center">Editor's Pick</h3>
      {books.length === 0 ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Row xs={1} lg={4} md={2} className="container w-75 mx-auto">
          {books.map((book, index) => (
            <Book key={book._id} book={[book, index]}></Book>
          ))}
        </Row>
      )}
    </div>
  );
}

export default BookCollection;
