import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleAddToCart = (course) => {
    const newCourses = [...cart, course];
    setCart(newCourses);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row g-4">
            {courses.map((course) => (
              <Course
                handleAddToCart={handleAddToCart}
                course={course}
                key={course.name}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-3 sidebar">
          {cart.map((course) => (
            <Cart key={course.name} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
