import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import Salary from "../Pages/Salary";
import JobPost from "../Pages/JobPost";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home />},
        { path: "/job-salary", element: <Salary />},
        { path: "/job-post", element: <JobPost />},
      ]
    },
  ]);

  export default router;