import React from "react";

import { NavNar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	let cards = [
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		}
	];
	return (
		<div className="container-fluid">
			<NavNar />
			<Jumbotron />
			<div className="row">
				{cards.map((card, index) => (
					<div className="col-3" key={index}>
						<Card
							title={card.title}
							body={card.body}
							buttonText={card.buttonText}
							url={card.url}
							image={card.image}
						/>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}
