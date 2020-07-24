import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbotron(props) {
    const {title,}
	return (
		<div className="jumbotron">
			<h1 className="display-4">A warm welcome</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	buttonText: PropTypes.string,
};