import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomaPage from "./components/Homepage";
import Manager from "./components/PrivateSiteManager";

function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login />} />
        <Route path = "/home" element={<HomaPage />} />
        <Route path="/" element={<Manager />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
