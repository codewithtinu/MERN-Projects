import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import Salary from "../Pages/Salary";
// import JobPost from "../Pages/JobPost";
import MyJobs from "../Pages/MyJobs";
import TestJob from "../Pages/TestForm";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home />},
        { path: "/job-salary", element: <Salary />},
        // { path: "/job-post", element: <JobPost />},
        { path: "/job-post", element: <TestJob />},
        { path: "/my-jobs", element: <MyJobs />},
      ]
    },
  ]);

  export default router;