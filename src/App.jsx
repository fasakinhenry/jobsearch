import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Landing } from "./pages/App";
import { NotFound } from "./pages";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
