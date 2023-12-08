import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, Register } from "../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home
	},
	{
		path: "/cadastro",
		Component: Register
	},
	{
		path: "*",
		Component: NotFound
	}
]);
