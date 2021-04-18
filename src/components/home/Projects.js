import React from "react";
import journal from "../../assets/journal.png";
import tickets from "../../assets/tickets.png";
import heroApp from "../../assets/heroApp.png";
import { Project } from "../ui/Project";

export const Projects = () => {
	return (
		<section className="bg-gray-800 py-20">
			<div className="max-w-5xl px-6 mx-auto text-center">
				<h2 className="text-2xl font-semibold text-white">Proyectos</h2>

				<div className="flex items-center justify-center mt-10">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Project
							img={journal}
							alt="journal-app"
							href="https://github.com/DaglasDev/react-journal-app"
							description="Aplicación de notas para uso diario, similar a un diario de vida"
						/>
						<Project
							img={tickets}
							alt="tickets-app"
							href="https://github.com/DaglasDev/node-tickets"
							description="Aplicación de notas para uso diario, similar a un diario de vida"
						/>
						<Project
							img={heroApp}
							alt="journal-app"
							href="https://github.com/DaglasDev/react-hero-app"
							description="Aplicación de notas para uso diario, similar a un diario de vida"
						/>
					</div>
				</div>

				<div className="flex items-center justify-center mt-12">
					<a
						className="flex items-center text-white hover:underline hover:text-gray-200"
						href="https://github.com/DaglasDev"
						target="_blank"
						rel="noreferrer"
					>
						<span>Ve más en Github</span>
						<i className="fab fa-github-alt h-5 w-5 ml-1 mt-1"></i>
					</a>
				</div>
			</div>
		</section>
	);
};
