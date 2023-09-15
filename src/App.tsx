import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sigin-in.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "sign-in", element: <SignIn /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
