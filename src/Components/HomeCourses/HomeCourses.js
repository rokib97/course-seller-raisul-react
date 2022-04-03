import React from "react";
import { Card } from "react-bootstrap";
import "./HomeCourses.css";

const HomeCourses = ({ course }) => {
  const { name, image, courseFee, courseDuration, description } = course;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Card className="w-100 h-100 mx-auto p-3 card-details">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {courseFee}</Card.Text>
          <Card.Text>Duration: {courseDuration}</Card.Text>
          <Card.Text>{description.slice(0, 120)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCourses;
