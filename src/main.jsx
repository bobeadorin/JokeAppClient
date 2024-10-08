import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import LoginPage from "./components/LogInPage/LogInPage.jsx";
import JokeHomePage from "./components/JokeHomePage/JokeHomePage.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import ExternalProfilePage from "./components/ExternalProfilePage/ExternalProfilePage.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout/Layout.jsx";
import { AuthProvider } from "./utility/AuthContext/authContext.jsx";
import { LoginPopupProvider } from "./utility/loginPopUpContext/loginPopUpContext.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import ShopLayout from "./components/ShopComponents/ShopLayout/Layout/ShopLayout.jsx";
import ShopHomePage from "./components/ShopComponents/ShopHomePage/ShopHomePage.jsx";
import ShopItemPage from "./components/ShopComponents/ShopItemPage/ShopItemPages.jsx";
import ShopCart from "./components/ShopComponents/ShopCart/ShopCart.jsx";
import { CartProvider } from "./utility/shopCartContext/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoginPopupProvider>
          <CartProvider>
            <LoginPopup />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route
                exact
                path="/jokes"
                element={
                  <Layout>
                    <JokeHomePage />{" "}
                  </Layout>
                }
              />
              <Route
                exact
                path="/jokes/:category"
                element={
                  <Layout>
                    <JokeHomePage />{" "}
                  </Layout>
                }
              />
              <Route
                exact
                path="/jokes/profile"
                element={
                  <Layout>
                    <ProfilePage />
                  </Layout>
                }
              />
              <Route
                exact
                path="/jokes/profile/:username"
                element={
                  <Layout>
                    <ExternalProfilePage />
                  </Layout>
                }
              />
              <Route
                exact
                path="/shop"
                element={
                  <ShopLayout>
                    <ShopHomePage />
                  </ShopLayout>
                }
              />
              <Route
                exact
                path="/shop/:id"
                element={
                  <ShopLayout>
                    <ShopHomePage />
                  </ShopLayout>
                }
              />
              <Route
                exact
                path="/shop/item/:id"
                element={
                  <ShopLayout>
                    <ShopItemPage />
                  </ShopLayout>
                }
              />
              <Route
                exact
                path="/shop/shopCart"
                element={
                  <ShopLayout>
                    <ShopCart />
                  </ShopLayout>
                }
              />
            </Routes>
          </CartProvider>
        </LoginPopupProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
