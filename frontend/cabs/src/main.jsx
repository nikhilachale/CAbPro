import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";

const ReviewsPage = lazy(() => import("./components/ReviewsPage.jsx"));
const ContactInfo = lazy(() => import("./components/ContactInfo.jsx"));
const IndoreBlog = lazy(() => import("./components/IndoreBlog.jsx"));
const IndorePlaceDetails = lazy(() => import("./components/IndorePlaces.jsx"));
const PopularPlaceDetails = lazy(() => import("./components/PopularPlaceDetails.jsx"));
const routeFallbackElement = (
  <div className="page-section">
    <div className="section-shell">
      <div className="h-32 rounded-2xl bg-slate-100" />
    </div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="reviews"
        element={
          <Suspense fallback={routeFallbackElement}>
            <ReviewsPage />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={routeFallbackElement}>
            <ContactInfo />
          </Suspense>
        }
      />
      <Route
        path="indore"
        element={
          <Suspense fallback={routeFallbackElement}>
            <IndoreBlog />
          </Suspense>
        }
      />
      <Route
        path="indore/:slug"
        element={
          <Suspense fallback={routeFallbackElement}>
            <IndorePlaceDetails />
          </Suspense>
        }
      />
      <Route
        path="places/:slug"
        element={
          <Suspense fallback={routeFallbackElement}>
            <PopularPlaceDetails />
          </Suspense>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
