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
// import Likes from 'Likes.jsx';

// this is my functional component called FeedItem
{/*  This is baby of FeedList.jsx
			I am passing parameter key, photo which is an obj, and bundle it called props <FeedItem key={i} photo={photo} /> */}
const FeedItem = (props) => {

	// This is what data I am looking at, I am pulling just url which is photo!
	// {
	// 	"id": 1,
	// 	"title": "Too cool for school",
	// 	"url": "https://media.giphy.com/media/5gXYzsVBmjIsw/giphy.gif",
	// 	"likes": 305,
	// 	"userLiked": false
	// },
		// const photo = props["photo"] same syntax as below
	const { photo } = props
		// photo.url this is destructuring
	const { url } = photo
	const { likes } = photo
  return (
    <div className="FeedItem">
      <img className="Image" src="https://tinyurl.com/GDISFbanner"/>
			<img className="Image" src="https://media.giphy.com/media/5gXYzsVBmjIsw/giphy.gif"/>
			{/* img inside of <FeedItem/> needs to display the src url that gets passed to it */}
			<img className="Image" src={ url }/>
      <h1>Hello, GDISF!</h1>
			{/* including FeedItem inside the div */}
			{/* <FeedList photos={ photos } /> */}
			{/* Likes likes is used by likes component of Likes.jsx  */}
			<Likes likes = { likes }/>

    </div>
  )
}

// always match the component name FeedList 
//  with export FeedItem, this file's functional component
// remember to always export my functional component. export default the component!
export default FeedItem;