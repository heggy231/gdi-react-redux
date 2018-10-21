// Exercise 2: Set It Up
	// write a functional component
	// make it a div with class name FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from 'FeedItem';

const FeedList = () => {
  return (
    <div className="FeedList">
      <img src="https://tinyurl.com/GDISFbanner"/>
      <h1>Hello, GDISF!</h1>
			{/* including imaguploder, feedlist */}
			<FeedItem />

    </div>
  )
}

// always match the component name FeedList with export Feedlist 
// remember to always export my functional component
export default FeedList;