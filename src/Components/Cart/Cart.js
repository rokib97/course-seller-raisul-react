import React from "react";
import "./Cart.css";

const Cart = ({ course, handleDelete, handleEnroll }) => {
  const { name, image, courseFee } = course;
  return (
    <>
      <div className="cart-item">
        <div>
          <img className="rounded-pill" src={image} alt="" />
        </div>
        <div>
          <h6>Name: {name.slice(0, 12)}</h6>
          <p>Price: {courseFee}</p>
          <button
            onClick={() => handleDelete(course)}
            className="btn btn-primary"
          >
            Delete
          </button>
          <br />
          <button
            onClick={() => handleEnroll(course)}
            className="btn btn-primary mt-2"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
