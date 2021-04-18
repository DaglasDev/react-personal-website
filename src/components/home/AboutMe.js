import React from "react";

export const AboutMe = () => {
	return (
		<section className="bg-gray-800 py-20">
			<div className="max-w-5xl px-6 mx-auto text-center">
				<h2 className="text-2xl font-semibold text-white">Sobre mí</h2>
				<p className="text-gray-400 mt-4">
					Mi lenguaje de programación favorito es Javascript.
				</p>
				<p className="text-gray-400 mt-1">
					Me gusta mucho la programación full-stack, pero
					recientemente me ha llamado más la atención el front-end,
					aunque me puedo desenvolverme de igual manera en ambos.
				</p>
				<p className="text-gray-400 mt-1">
					Mi ideal es ser lo mejor posible en todo lo que hago y mi
					meta es poder contestar cualquier pregunta.
				</p>
			</div>
		</section>
	);
};
