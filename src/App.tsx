import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import { Header } from './components/Header';
import { Details } from "./pages/details/Details";
import { HomePage } from "./pages/home/HomePage";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					path=""
					element={<HomePage />}
				/>
				<Route
					path={`/details/:movieId`}
					element={<Details />}
				/>
			</>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
