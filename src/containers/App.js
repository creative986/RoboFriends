import React from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState( {searchfield: event.target.value});
	}

	render() {
		const { robots , searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?  // if this 0 (! makes it oopsite of true 1 > false)
			<h1 className='tc pa5'>Loading Users...</h1> :		
			(
				<div className='tc'> 
					<h1 className='f2'> RoboFriends </h1>					
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<h2>Robots We Found For You...</h2>
							<CardList robots={ filteredRobots } />
						</ErrorBoundry>
					</Scroll>
				</div> 	
			)	
	}
}

export default App;