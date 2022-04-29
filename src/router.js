import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomaPage from "./components/Homepage";
import Manager from "./components/PrivateSiteManager";
import Kakao from "./components/auth/kakao";
import TestPage from "./components/TestPage";

function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login />} />
        <Route path = "/home" element={<HomaPage />} />
        <Route path="/" element={<Manager />} />
        <Route path = "/auth/kakao/callback" element={<Kakao />} />
        <Route path = "/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
