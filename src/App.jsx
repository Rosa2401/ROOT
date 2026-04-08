import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import Services from "./views/Services";
import Cases from "./views/Cases";
import OmOs from "./views/OmOs";
import Kontakt from "./views/Kontakt";
import Error from "./views/Error";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },

      {
        path: "/services",
        element: <Services />
      },

      {
        path: "/cases",
        element: <Cases />
      },

      {
        path: "/om-os",
        element: <OmOs />
      },

      {
        path: "/kontakt",
        element: <Kontakt />
      },

      {
        path: "/error",
        element: <Error />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;