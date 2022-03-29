import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {
	// Babel initialize the state as if you were using the constructor() {}
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// does not override all elements of state, i.e. errorMessage remains the same 
			(position) => this.setState({ lat: position.coords.latitude }),
			// or here: i.e. lat remains the same
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	// This method is used to avoid adding conditional statements in render()
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Spinner message="Please accept location request" />;
		}
	}

	// render() -> Life cycle function that always necessary, returns JSX
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
