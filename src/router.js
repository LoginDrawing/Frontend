import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomaPage from "./components/Homepage";

function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/home" element={<HomaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
