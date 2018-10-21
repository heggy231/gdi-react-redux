// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	// handle import/inheritance
	// add a render method

// Exercise 6: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
		// and when the user submits, call that function with the user submitted url.
		

// Note on convert functional to class component
// https://docs.google.com/presentation/d/144DViot4VJSOx-jmXDLIExE06Wky6pFS4QKkHZxtl1o/edit#slide=id.g249b34e1dd_0_271
// slide 88

import React, { Component } from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList.jsx';


// this is destructuring data json photos
const { photos } = data;
// const photos = data["photos"]
// 0)   destructured import
		// import React, { Component } from 'react';
// 1)   inheritance (extends)
		// class HomePage extends Component {
// 2)   render method
		// render() {
// 3)   props as an attribute
class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<img src="https://tinyurl.com/GDISFbanner"/>
				<h1>Hello, GDISF!</h1>
				{/* including imaguploder, feedlist */}
				<ImageUploaderForm />
				{/* get those photos from <Homepage/> component to <FeedList/> component?  (hint: props!), next let FeedList.jsx know it is coming.  Note: photos inside of FeedList is coming from FeedList
					{ photos } is up in code line 29 which fetching data json
				*/}
				<FeedList photos={ photos } />
			</div>
		)
	}
}

  
export default HomePage;