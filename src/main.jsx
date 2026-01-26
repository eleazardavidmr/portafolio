import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "@components/Loader";
import Layout from "@components/Layout";

const Certificados = lazy(() => import("@pages/Certificados/index.jsx"));
const Proyectos = lazy(() => import("@pages/Proyectos/index.jsx"));
const BlogPage = lazy(() => import("@pages/BlogPage/index.jsx"));
const PostPage = lazy(() => import("@pages/BlogPage/Post/PostPage.jsx"));
const ProfilePage = lazy(() => import("@pages/ProfilePage/index.jsx"));
const NotFoundPage = lazy(() => import("@components/NotFoundPage/index.jsx"));
const LoginPage = lazy(() => import("@pages/LoginPage/index.jsx"));

import { AuthProvider } from "@contexts/AuthContext";
import ProtectedRoute from "@components/ProtectedRoute/index.jsx";
// import MembersPage from "@pages/MembersPage/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Suspense fallback={<Loader fullScreen />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/certificados" element={<Certificados />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route
                path="/blog"
                element={
                  <ProtectedRoute redirectTo="/login">
                    <BlogPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <ProtectedRoute redirectTo="/login">
                    <PostPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute redirectTo="/">
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/miembros" element={<MembersPage />} />
              <Route path="/miembros/:username" element={<MembersPage />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
      <Toaster position="bottom-right" />
    </HelmetProvider>
  </StrictMode>,
);
