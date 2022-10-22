import React, { useState } from "react";
import { Col } from "react-bootstrap";

const Book = (props) => {
  const [show, setShow] = useState(false);
  const { _id, image, title, price } = props.book[0];
  const { index } = props.book[1];

  console.log(props);

  const handelClickOpen = () => {
    setShow(true);
  };
  const handelClickClose = () => {
    setShow(false);
  };

  return (
    <div className="mt-3 mb-5">
      <Col className="h-100 ">
        <div className="mb-0">
          <div className="card border-0 shadow h-100">
            <img src={image} className="card-img-top" height="100%" alt="" />
          </div>
          <button onClick={handelClickOpen}>Open</button>
          <button onClick={handelClickClose}>Close</button>
          {/* Show Info Section */}
          <div className={show ? "showSection show" : "showSection"}>
            <span>{title}</span> <br />
            <span>{price}</span>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Book;
