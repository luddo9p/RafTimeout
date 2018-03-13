# Delay 

> Promises & Performance

``` bash
# install
npm install delay-9p --save

# import 
import delay from "delay-9p"

``` javascript
delay(200)
	.then(_ => {
		console.log("it worked")
	})
	.catch(error => {
		throw new Error(error)
	})
```