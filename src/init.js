import delay from "./index.js"

delay(200)
	.then(_ => {
		console.log("it worked")
	})
	.catch(error => {
		throw new Error(error)
	})
