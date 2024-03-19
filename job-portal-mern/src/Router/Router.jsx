import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import Salary from "../Pages/Salary";
import JobPost from "../Pages/JobPost";
import MyJobs from "../Pages/MyJobs";
import TestJob from "../Pages/TestForm";
import EditJobs from "../Pages/EditJobs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home />},
        { path: "/job-salary", element: <Salary title="Estimated Salary" page="Salary" />},
        { path: "/job-post", element: <JobPost />},
        // { path: "/job-post", element: <TestJob />},
        { path: "/my-jobs", element: <MyJobs />},
        { 
          path: "/edit/:id", 
          element: <EditJobs />,
           loader: ({params}) => fetch(`http://localhost:5173/all-jobs?${params.id}`)
          //  loader: ({params}) => console.log(params.id)
        },
      ]
    },
  ]);

  export default router;