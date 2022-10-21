import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { PageNotFound } from "./components/pages/PageNotFound";
import { HomePage } from "./components/pages/HomePage";
import { Profile } from "./components/pages/Profile";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// BrowserRouter >> Routes >> Route

export default App;
