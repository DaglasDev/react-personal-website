import React from "react";

export const Icon = ({ href, label, icon }) => {
	return (
		<a
			className="flex flex-col items-center mx-2 text-gray-600 hover:text-indigo-600"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<i className={`${icon} h-5 w-5 sm:h-6 sm:w-6`}></i>
			<p className="mt-2">{label}</p>
		</a>
	);
};
