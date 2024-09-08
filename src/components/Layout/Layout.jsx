import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const Layout = () => {
    return (
      <div>
        <AppBar />
        <hr />
  
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
  
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
  
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    );
  };
  
  export default Layout;