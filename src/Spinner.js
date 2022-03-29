import React from "react";

const Spinner = (props) => {
	return (
		<div class="ui active dimmer">
			<div class="big ui text loader">{props.message}</div>
		</div>
	);
};

// Instead of writing { props.message || 'Loading...' }
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;