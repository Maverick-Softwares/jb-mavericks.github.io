import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Homepage from "./Pages/Homepage/Homepage";
import OurTeam from "./Pages/Company/OurTeam";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;
