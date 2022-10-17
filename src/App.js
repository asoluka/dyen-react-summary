import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// BrowserRouter >> Routes >> Route

export default App;
