import React from "react";

import { Nav } from "./navbar.js";
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
	let menu = [
		{
			text: "Home",
			url: "#"
		},
		{
			text: "About",
			url: "#"
		},
		{
			text: "Service",
			url: "#"
		},
		{
			text: "Contact",
			url: "#"
		}
	];

	return (
		<div>
			<Nav brand="React" links={menu} />
			<div>
				<Jumbotron
					title="A warm welcome"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque."
					buttonText="Call to action"
					url="#"
				/>
			</div>
			<div className="row mb-2">
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
