import { createBrowserRouter } from "react-router";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { Booking } from "./pages/booking";
import { Doctor } from "./pages/doctor";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Signin />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/booking",
		element: <Booking />,
	},
	{
		path: "/doctors",
		element: <Doctor />,
	},
]);
