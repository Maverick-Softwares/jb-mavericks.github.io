import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Homepage from "./Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
export default router;
