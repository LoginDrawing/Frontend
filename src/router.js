import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/Homepage";
import Kakao from "./components/auth/kakao";
import TestPage from "./components/TestPage";

function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/home" element={<HomePage />} />
        <Route path = "/auth/kakao/callback" element={<Kakao />} />
        <Route path = "/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
