import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Feedback from "./Components/Feedback/Feedback";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

export const CoursesContext = createContext();
function App() {
  const [courses, setCourses] = useState([]);
  return (
    <CoursesContext.Provider value={[courses, setCourses]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </CoursesContext.Provider>
  );
}

export default App;
