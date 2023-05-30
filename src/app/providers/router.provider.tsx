import { HomePage } from "@/pages";
import { NotFound } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";

import { baseLayout } from "../layouts";

const router = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export { router };
