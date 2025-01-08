import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";

type Problem = {
	id: number;
	name: string;
	type: "iframe" | "component";
	path: string;
};

const Home: React.FC = () => {
	const problems: Problem[] = [
		{ id: 1, name: "Problem 1", type: "iframe", path: "/src/problem1/index.html" },
		{ id: 2, name: "Fancy Form (Problem 2)", type: "iframe", path: "/src/problem2/index.html" },
		{ id: 3, name: "Problem 3 (Markdown)", type: "component", path: "/problem3" },
		{ id: 4, name: "Problem 4 (Markdown)", type: "component", path: "/problem4" },
		{ id: 5, name: "Problem 5 (React App)", type: "iframe", path: "/src/problem5/index.html" },
	];

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
			<h1 className="text-4xl font-bold mb-8">Code Challenge Projects</h1>
			<div className="w-full max-w-md">
				{problems.map((problem) => (
					<Link key={problem.id} to={problem.type === "component" ? problem.path : `/iframe?src=${problem.path}`} className="flex items-center justify-between px-4 py-3 mb-2 bg-white shadow rounded-lg hover:shadow-lg hover:bg-gray-100">
						<span className="text-lg font-medium">{problem.name}</span>
						<ChevronRightIcon className="w-5 h-5 text-gray-600" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
