import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails />
            }
        ]
    },
]);

export default router;