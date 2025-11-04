import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import FundraiserPage from "./pages/FundraiserPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactUs.jsx";

import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import PledgeForm from "./components/PledgeForm.jsx";
import NewFundraiser from "./components/NewFundraiser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      { path: "/signup", element: <SignUpForm /> },
      { path: "/pledge", element: <PledgeForm /> },
      { path: "/new-fundraiser", element: <NewFundraiser /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Here we wrap our app in the router provider so they render */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
