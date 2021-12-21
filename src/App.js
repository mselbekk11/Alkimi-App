import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home/home';
import CourseOne from './components/course-one/course-one';
import Footer from './components/footer/footer';

import NavBar from './components/navbar/navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constellation" element={<CourseOne />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;










// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       {/* <Home /> */}
//       <CourseOne />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//       <div className="App">
//         <NavBar />
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </div>
//   );
// }

// export default App;



// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/Home">Home</Link> |{" "}
//         <Link to="/Constellation">CourseOne</Link>
//       </nav>
//     </div>
//   );
// }

