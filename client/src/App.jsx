import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import UploadQP from "./pages/UploadPaper";
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
      </Routes>
      <Routes>
        <Route
          path="/uploadQP"
          element={
            <PublicRoute>
              <UploadQP />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
