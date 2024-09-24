import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminForm from "./AdminForm.jsx";
import App from "./App.jsx";
import Posts from "./components/Posts.jsx";
import Admin from "./Admin.jsx";

function Mainapp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adminform" element={<AdminForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainapp;
