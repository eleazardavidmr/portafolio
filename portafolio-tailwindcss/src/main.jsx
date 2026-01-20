import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificados from "./Pages/Certificados/index.jsx";
import Proyectos from "./Pages/Proyectos/index.jsx";
import NotFoundPage from "./components/NotFoundPage/index.jsx";
import BlogPage from "./Pages/BlogPage/index.jsx";
import PostPage from "@pages/BlogPage/Post/PostPage.jsx";
import BlogLayout from "./Pages/BlogPage/blogpage-components/BlogLayout/index.jsx";
import LoginPage from "./Pages/LoginPage/index.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import ProfilePage from "./Pages/ProfilePage/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route element={<BlogLayout />}>
              <Route
                path="/blog"
                element={
                  <ProtectedRoute redirectTo="/">
                    <BlogPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <ProtectedRoute redirectTo="/">
                    <PostPage />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/">
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
      <Toaster position="bottom-right" />
    </HelmetProvider>
  </StrictMode>,
);
