import { lazy } from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts
import { DefaultLayout } from "./layout/containers";

// pages
const MainPage = lazy(() =>
	import("./modules/MainPage").then((module) => ({
		default: module.MainPage,
	}))
);

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<DefaultLayout />}>
					<Route path="" element={<MainPage />}></Route>
					<Route path="*" element={<Navigate to="" replace />} />
				</Route>

				<Route path="*" element={<Navigate to=""></Navigate>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
