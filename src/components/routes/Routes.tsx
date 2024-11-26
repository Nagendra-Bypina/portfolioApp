// src/Routes.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeTab = lazy(() => import("../HomeTab"));
const ProfileTab = lazy(() => import("../ProfileTab"));
const AboutTab = lazy(() => import("../AboutTab"));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<HomeTab />} />
      <Route path="/profile" element={<ProfileTab />} />
      <Route path="/about" element={<AboutTab />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
