import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(API_KEY);

  return (
    <>
      <div>
        <Router>
          <Navbar />

          <LoadingBar color="#f11946" progress={progress} height={1} />
          <Routes>
            <Route
              index
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="general"
                />
              }
            />
            <Route
              path="business"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="business"
                />
              }
            />
            <Route
              path="entertainment"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              path="health"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="health"
                />
              }
            />
            <Route
              path="science"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              element={
                <News
                  apiKey={API_KEY}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
