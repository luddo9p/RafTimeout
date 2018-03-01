# Delay based on Promises and Performance

npm install delay-9p --save

import delay from "delay-9p"

delay(200)
	.then(_ => {
		console.log("it worked")
	})
	.catch(error => {
		throw new Error(error)
	})
