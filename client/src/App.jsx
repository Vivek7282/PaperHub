import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import UploadQP from "./pages/UploadPaper";
import GetQP from "./pages/GetQP";
import Login from "./pages/Login";
import ViewPaper from "./pages/Viewpaper";
import Connect from "./pages/Connect";
import VerifyPaper from "./pages/VerifyPaper";
import Register from "./pages/Register";
const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/verify"
            element={
              <ProtectedRoute>
                <VerifyPaper />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/verify"
            element={
              <PublicRoute>
                <VerifyPaper />
              </PublicRoute>
            }
          /> */}
          <Route
            path="/theSecretRegistrationLink@7282"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/viewQuestion"
            element={
              <PublicRoute>
                <ViewPaper />
              </PublicRoute>
            }
          />
          <Route
            path="/connect"
            element={
              <PublicRoute>
                <Connect />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/uploadQP"
            element={
              <PublicRoute>
                <UploadQP />
              </PublicRoute>
            }
          />

          <Route
            path="/getQP"
            element={
              <PublicRoute>
                <GetQP />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
