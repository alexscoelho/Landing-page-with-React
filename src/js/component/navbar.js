import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Nav(props) {
	const { brand, links } = props;
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-white" href={links}>
				{brand}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					{links.map((link, index) => (
						<li key={index} className="nav-item active">
							<a
								className="nav-item nav-link active text-white "
								href={link.url}>
								{link.text}{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
					))}
					{/* <a
						className="nav-item nav-link active text-white "
						href={links}>
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link text-white " href={links}>
						About
					</a>
					<a className="nav-item nav-link text-white " href={links}>
						Services
					</a>
					<a
						className="nav-item nav-link text-white "
						href={links}
						tabIndex="-1"
						aria-disabled="true">
						Contact
					</a> */}
				</div>
			</div>
		</nav>
	);
}

Nav.propTypes = {
	brand: PropTypes.string,
	links: PropTypes.string
};
