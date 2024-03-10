import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout.tsx";
import Page from "../components/page/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/:path",
        Component: Page,
      },
    ],
  },
]);

export default router;