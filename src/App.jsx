import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import AuthLayout from "./layouts/AuthLayout";
import DashLayout from "./layouts/DashLayout";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import DashboardPage from "./pages/DashboardPages/DashboardPage";
import DashboardArticleListPage from "./pages/DashboardPages/DashboardArticleListPage";
import ReportsPage from "./pages/DashboardPages/ReportsPage";
import UsersPage from "./pages/DashboardPages/UsersPage";
import RequireAuth from "./components/RequireAuth";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles",
        element: <ArticleListPage />,
      },
      {
        path: "articles/:name",
        element: <ArticlePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <RequireAuth>
        <DashLayout />
      </RequireAuth>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "articles",
        element: (
          <RequireAuth allowedRoles={["admin", "editor"]}>
            <DashboardArticleListPage />
          </RequireAuth>
        ),
      },
      {
        path: "users",
        element: (
          <RequireAuth allowedRoles={["admin"]}>
            <UsersPage />
          </RequireAuth>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
