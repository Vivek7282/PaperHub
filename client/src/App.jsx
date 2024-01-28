import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";

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
    </BrowserRouter>
  );
};

export default App;
