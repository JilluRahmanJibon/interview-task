import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import User from "../components/Home/User";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path: '/', element: <Home />, children: [
            { path: '/:id', element: <User /> },
            { path: '/', element: <div className="mt-12 text-2xl font-bold"><p className="hidden md:block">Please Select a Id on the right menu.</p> <p className="md:hidden block text-center">Please click the left menu icon And Select an ID.</p></div> },
        ]
    }
])

export default router