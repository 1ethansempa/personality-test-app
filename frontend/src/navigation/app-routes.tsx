import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppLayout from "../components/templates/app-layout";
import HomePage from "../components/pages/home-page";
import NotFoundPage from "../components/pages/not-found-page";
import TestPage from "../components/pages/test-page";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout children={<HomePage />} />} />
        <Route path="/test" element={<AppLayout children={<TestPage />} />} />
        <Route path="*" element={<AppLayout children={<NotFoundPage />} />} />
      </Routes>
    </Router>
  );
};
