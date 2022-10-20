import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { PageNotFound } from "./components/pages/PageNotFound";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// BrowserRouter >> Routes >> Route

export default App;
