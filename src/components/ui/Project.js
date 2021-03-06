import React from "react";

export const Project = ({ img, href, alt, description }) => {
	let url = href.replace("https://", "");
	url = url.replace("www.", "");
	return (
		<div className="max-w-xs w-full">
			<div className="flex items-center justify-center h-40 w-full bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
				<img src={img} alt={alt} />
			</div>
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="block bg-gray-700 mt-5 sm:h-auto md:max-h-28 md:h-full  rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
			>
				<div className="flex flex-col justify-between py-2 px-3 text-center text-sm h-full">
					<p className="flex text-gray-300">{description}</p>
					<span className="block text-gray-200 mt-2">{url}</span>
				</div>
			</a>
		</div>
	);
};
