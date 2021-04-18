import React from "react";
import { AboutMe } from "../components/home/AboutMe";
import { Presentation } from "../components/home/Presentation";
import { Projects } from "../components/home/Projects";
import { Header } from "../components/ui/Header";

export const Home = () => {
	return (
		<main className="font-sans bg-white">
			<div>
				<Header />
				<Presentation />
				<AboutMe />
				<Projects />
			</div>
		</main>
	);
};
