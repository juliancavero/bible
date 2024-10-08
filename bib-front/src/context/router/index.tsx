import NavFrame from "@/components/NavFrame";
import AllQuotesPage from "@/pages/AllQuotes";
import AllSaintsPage from "@/pages/AllSaints";
import BiblePage from "@/pages/Bible";
import BibleReadPage from "@/pages/BibleRead";
import HomePage from "@/pages/Home";
import QuestionAnswersPage from "@/pages/QuestionArchive";
import QuestionsPage from "@/pages/Questions";
import SaintDetailsPage from "@/pages/SaintDetails";
import SettingsPage from "@/pages/Settings";
import TodaysQuotePage from "@/pages/TodaysQuote";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavFrame />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/bible",
        element: <BiblePage />,
      },
      {
        path: "/bible/:book/:chapter",
        element: <BibleReadPage />,
      },
      {
        path: "/quotes",
        element: <AllQuotesPage />,
      },
      {
        path: "/quotes/:year/:month/:day",
        element: <TodaysQuotePage />,
      },
      {
        path: "/saints",
        element: <AllSaintsPage />,
      },
      {
        path: "/saints/:id",
        element: <SaintDetailsPage />,
      },
      {
        path: "/questions",
        element: <QuestionsPage />,
      },
      {
        path: "/questions/:id",
        element: <QuestionAnswersPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

const RouterProv = () => {
  return <RouterProvider router={router} />;
};

export default RouterProv;
