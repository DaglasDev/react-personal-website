import React from "react";
import avatar from "../../assets/avatar.jpg";

export const Presentation = () => {
	return (
		<section className="bg-white mt-20">
			<div className="max-w-2xl px-6 text-center mx-auto">
				<h2 className="text-3xl font-semibold text-gray-800">
					Hola!, Mi nombre es Daglas. Encantado de conocerte
				</h2>
				<p className="text-gray-600 mt-4">
					Tengo 21 años, egresado de Técnico universitario en
					informática. Llevo una temporada mejorando mis habilidades
					de programación y aprendiendo nuevas, tales como Javascript
					y algunos frameworks del mismo React y Node. De cara a un
					futuro próximo tengo previsto aprender Vue, Django, Flutter,
					React Native y más.
				</p>
				<p>
					Me caracterizo por ser una persona perseverante con lo que
					se propone, con un gran sentimiento de auto superación y
					esforzarme todo lo posible por entregar todo de mí para
					hacer las cosas de la manera correcta.
				</p>
				<div className="flex items-end justify-center mt-8 mb-8">
					<img
						src={avatar}
						alt="avatar"
						className="h-96 rounded-full"
					/>
				</div>
			</div>
		</section>
	);
};
