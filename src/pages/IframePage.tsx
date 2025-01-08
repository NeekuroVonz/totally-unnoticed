import React from "react";
import { useSearchParams } from "react-router-dom";

const IframePage: React.FC = () => {
	const [searchParams] = useSearchParams();
	const src = searchParams.get("src");

	return <div className="h-screen flex justify-center items-center">{src ? <iframe src={src} title="Embedded Problem" className="w-full h-full border-none" /> : <p>Invalid source provided!</p>}</div>;
};

export default IframePage;
