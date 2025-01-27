import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MobileLayout from "./pages/MobileLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
