import React from "react";
import "./Cart.css";

const Cart = ({ course }) => {
  const { name, image, courseFee } = course;
  return (
    <>
      <div className="cart-item">
        <div>
          <img className="rounded-pill" src={image} alt="" />
        </div>
        <div>
          <h6>Name: {name}</h6>
          <p>Price: {courseFee}</p>
          <button onClick={handleDelte} className="btn btn-primary">
            Delete
          </button>
          <br />
          <button onClick={handleEnroll} className="btn btn-primary mt-2">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
