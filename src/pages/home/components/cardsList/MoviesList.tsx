import React from "react";
import { Card } from "./Movie";
import "./MoviesList.css";
import { Movie } from "../../../../models/movie";

type CardListProps = {
	cards: Movie[];
};

export const CardsList = ({ cards }: CardListProps) => {
	return (
		<section className="card-container">
			{cards.map((item) => (
				<Card
					card={item}
					key={item.id}
				/>
			))}
		</section>
	);
};
