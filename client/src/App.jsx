import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import UploadQP from "./pages/UploadPaper";
import GetQP from "./pages/GetQP";
import Login from "./pages/Loigin";
import ViewPaper from "./pages/Viewpaper";

const App = () => {
  return (
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
          path="/viewQuestion"
          element={
            <PublicRoute>
              <ViewPaper />
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
  );
};

export default App;
