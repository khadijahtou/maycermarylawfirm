import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Team from "./pages/team";
import Process from "./pages/process";
import Contact from "./pages/contact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
