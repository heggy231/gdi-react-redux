// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export default the component!

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?

import React from 'react';
// importing Likes.jsx
import Likes from 'Likes.jsx';

// this is my functional component called FeedItem
const FeedItem = () => {
  return (
    <div className="FeedItem">
      <img src="https://tinyurl.com/GDISFbanner"/>
			<img src="https://media.giphy.com/media/5gXYzsVBmjIsw/giphy.gif"/>
      <h1>Hello, GDISF!</h1>
			{/* including FeedItem inside the div */}
			<Likes />

    </div>
  )
}

// always match the component name FeedList 
//  with export FeedItem, this file's functional component
// remember to always export my functional component. export default the component!
export default FeedItem;