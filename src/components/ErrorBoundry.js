import React from 'react';


class ErrorBoundry extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false }
	};

	componentDidCatch(error, info) {
		this.setState( { hasError: true} );
	}

	render() {
		if (this.state.hasError) { // if its true = has error
			return <h1>Error-Cannot display this site</h1>
		} 
		return this.props.children
	}
}

export default ErrorBoundry;