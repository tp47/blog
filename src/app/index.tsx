import { Loading } from "@/shared/ui";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./providers";
import "./styles/index.css";

function App(): React.ReactElement {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export { App };
