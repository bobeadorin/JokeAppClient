import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import LoginPage from "./components/LogInPage/LogInPage.jsx";
import JokeHomePage from "./components/JokeHomePage/JokeHomePage.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
      <Layout>
        <Routes>
          <Route exact path="/jokes" element={<JokeHomePage />} />
          <Route exact path="/jokes/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
