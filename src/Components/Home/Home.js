import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CoursesContext } from "../../App";
import HomeCourses from "../HomeCourses/HomeCourses";

const Home = () => {
  // const [courses, setCourses] = useState([]);
  const [courses, setCourses] = useContext(CoursesContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [setCourses]);
  return (
    <>
      <div className="container mt-4">
        <div className="row g-4">
          <h2 className="fw-bold text-center">Top Three Courses..</h2>
          {courses.slice(0, 3).map((course) => (
            <HomeCourses key={course.name} course={course} />
          ))}
        </div>
      </div>

      <div className="text-end container mt-3">
        <button
          onClick={() => navigate("/courses")}
          className="btn btn-primary"
        >
          Explore More
        </button>
      </div>
    </>
  );
};

export default Home;
