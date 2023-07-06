import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Homepage from "./Pages/Homepage/Homepage";
import OurTeam from "./Pages/Company/OurTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
    ],
  },
]);
export default router;
