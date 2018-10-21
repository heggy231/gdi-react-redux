// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

// Exercise 5: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, { Component } from 'react';

// 0)   destructured import
		// import React, { Component } from 'react';
// 1)   inheritance (extends)
		// class HomePage extends Component {
// 2)   render method
		// render() {
// 3)   props as an attribute


class Likes extends Component {
	constructor(props) {
		// set step when extending another class
		super(props)
		this.state = {
			liked: false
		}
	}
// handling method for each click for likes
 handleClick = (e) => {
	console.log("Clicked! ")
	this.setState({ numLikes: e.target.value })
 }


	render() {
		// this points to instance of likes
		const { numLikes } = this.props
			return (
				<div className="Likes">
					<span>
						{/* displaying likes from line 31 */}
						{ numLikes }
					</span>
					{/* Create a button that toggles between two states: "Liked" and "Not liked (yet)"" */}
					<button onClick={this.handleClick}>
						Liked!!
					</button>
		
				</div>
			)
	}
	// props is obj that has the attribute of likes, take in number of likes as a prop
}

export default Likes;