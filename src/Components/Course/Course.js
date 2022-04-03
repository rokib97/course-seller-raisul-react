import React from "react";
import { Card } from "react-bootstrap";
import { AiFillShopping } from "react-icons/ai";

const Course = ({ course, handleAddToCart }) => {
  const { name, image, courseFee, courseDuration, description } = course;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <Card className="w-100 h-100 mx-auto p-3 card-details">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: {courseFee}</Card.Text>
            <Card.Text>Duration: {courseDuration}</Card.Text>
            <Card.Text>{description.slice(0, 120)}</Card.Text>
          </Card.Body>
          <button
            onClick={() => handleAddToCart(course)}
            className="btn w-100 btn-primary border-0"
          >
            Add to Cart
            <AiFillShopping className="ms-2" />
          </button>
        </Card>
      </div>
    </>
  );
};

export default Course;
