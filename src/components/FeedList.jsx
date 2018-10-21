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
// eventhough file is right next to me I need to add ./ for file path
import FeedItem from './FeedItem.jsx';

const FeedList = (props) => {
	// calling the props.photos from jason data
	//  get those photos from <Homepage/> component to <FeedList/> component?  (hint: props!)
	const { photos } = props
  return (
    <div className="FeedList">
      <img src="https://tinyurl.com/GDISFbanner"/>
      <h1>Hello, GDISF!</h1>
			{/* including FeedItem inside the div */}

			{
				photos.map((photo, i) =>
				// FeedList is parent and FeedItem is a baby component look at slide 84, https://docs.google.com/presentation/d/144DViot4VJSOx-jmXDLIExE06Wky6pFS4QKkHZxtl1o/edit#slide=id.g1ea4206e08_4_330
					<FeedItem key={i} photo={photo} />
				)
			}
		</div>
  )
}

// always match the component name FeedList with export Feedlist 
// remember to always export my functional component. export default the component!
export default FeedList;