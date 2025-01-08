import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Problem3 from "./pages/Problem3";
import IframePage from "./pages/IframePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/problem3" element={<Problem3 />} />
				<Route path="/iframe" element={<IframePage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
