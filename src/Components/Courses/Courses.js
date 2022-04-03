import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [enroll, setEnroll] = useState(false);
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
  const handleEnroll = (selectedCourse) => {
    setEnroll(true);
  };
  const handleDelete = (selectedCourse) => {
    const filtered = cart.filter(
      (course) => course.name !== selectedCourse.name
    );
    setCart(filtered);
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
            <Cart
              handleDelete={handleDelete}
              handleEnroll={handleEnroll}
              key={course.name}
              course={course}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
