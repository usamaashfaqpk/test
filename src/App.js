import HOC from './hoc';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HOC />,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
