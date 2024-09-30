import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListScene, DetailScene, NotFoundScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<ListScene />} />
				<Route path={switchRoutes.detail} element={<DetailScene />} />
				<Route path="*" element={<NotFoundScene />} />
			</Routes>
		</Router>
	);
};
