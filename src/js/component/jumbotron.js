import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbotron(props) {
	const { title, body, buttonText, url } = props;
	return (
		<div className="jumbotron">
			<h1 className="display-4">{title}</h1>
			<p className="lead">{body}</p>
			<p>{body}</p>
			<a className="btn btn-primary btn-lg" href={url} role="button">
				{buttonText}
			</a>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
};
