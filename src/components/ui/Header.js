import React from "react";
import { Icon } from "./Icon";

export const Header = () => {
	return (
		<header className="bg-white shadow border-t-4 border-grey-600">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div>
						<a
							className="flex items-center text-gray-800 hover:text-indigo-600"
							href="/"
						>
							<i className="fas fa-terminal sm:h-6 sm:w-6 mt-2"></i>
							<span className="mx-3 font-medium text-sm md:text-base">
								Daglas Ruiz Yáñez
							</span>
						</a>
					</div>
					<div className="flex items-center -mx-2">
						<Icon
							icon="fab fa-linkedin-in fa-2x"
							label="LinkedIn"
							href="https://www.linkedin.com/in/daglas-r-1893951b2/"
						/>
						<Icon
							icon="fab fa-github fa-2x"
							label="GitHub"
							href="https://github.com/DaglasDev"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
