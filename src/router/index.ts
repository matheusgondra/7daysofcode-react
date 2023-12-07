import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home
	},
	{
		path: "*",
		Component: NotFound
	}
]);
