import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Problem3: React.FC = () => {
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		fetch("/src/problem3/readme.md")
			.then((response) => response.text())
			.then((text) => setContent(text));
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Problem 3</h1>
			<div className="prose">
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Problem3;
