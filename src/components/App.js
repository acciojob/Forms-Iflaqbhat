import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link id="form-link" to="/">
            Form Section 1
          </Link>
          <Link id="form-ref-link" to="/form-ref">
            Form Section 2
          </Link>
          <Link id="form-state-link" to="/form-state">
            Form Section 3
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
