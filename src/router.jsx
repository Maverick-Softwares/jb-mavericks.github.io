import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      /*  {
        path: "/",
        element: <div>hello world</div>,
      }, */
    ],
  },
]);
export default router;
