import { createBrowserRouter } from "react-router";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Signin />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);
