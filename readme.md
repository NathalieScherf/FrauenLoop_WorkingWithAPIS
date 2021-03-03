# Working with APIs

When we want to get data from a server, we need to send a request for data from our page to the server. We do this by sending a requst to an  API (application programming interface) of that server. 

I like to think of an API as a counter in a fast food restaurant. First, we have a look at the menue to see what we want to order. Then we place the order and a bit later, our food arrives! 
Have a look at the image:[The API-restaurant](./API_GetBurger.png)

In code, this means that first we read the documentation of the API to see what type of data we can get and how to order it!

Then, placing an order translates to sending a request.  
We have many possibilities to do this, but here are the most common:
1. using ajax. 

This is a a function built into the library jQuery. If you want to use it, you have to add jQuery to your project.  You will see examples of this in code, but since it is rather old-school I do not recommend that you use it. But it is good to know what it looks like!

2. using fetch

*This is the option we use in the demo* 
Fetch is availabe in the browser via the [Web-API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), so we can use it without installing any extra library (exept for Internet Explorer) (In case you want to try it out in node.js, there is also a library [node-fetch](https://www.npmjs.com/package/node-fetch)) 

3. using axios

axios is a library on its own, wich we can also include in our code using a link to a cnd or installing in [have a look here](https://github.com/axios/axios).

All of these options are *asynchronous*. That means that our programm (the code) starts the request, by sending it, but it is not waiting for the answer! Instead the programm continues to the next line of code. But we need that answer, so we need to find a way to be informed that the request is done and response is here! 
There are 3 ways to do this: 
1. a call back function: 
Once the request is done, an other function (the call back) is called, and in it we have access to the response.
2. Using promises. 
This is an easier way to deal with asyncronous code. A request with fetch returns a promise, and once the request is done, the promise is resolved, and we have access to the data. 
3. Using async await
This is syntactic sugar on a promise (making a promise look better), and makes it easier to write and read asyncronous code. 

Here are 3 examples all doing the same thing: Using fetch to get data from the meals.db and log the response. 

1. Call-back: 

``` javaScript 

const callBackFetch = () => {
  fetch('my api', (err, response)=> {
    if (err) { 
      console.log(err)
      } else {
    let parsedData = response.json()
          console.log(parsedData)
      }
  })
}

``` 

2. Promise: 

``` javaScript 

const promiseFetch = () => {
  fetch('my api')
  .then(response => {
    let parsedData = response.json()
    console.log(parsedData)
  })
  .catch(error => {
    console.log(error)
  })
}

``` 

3. Async await: 

``` javaScript 

const asyncFetch = () => {
  try {
    let response = await fetch('my api')
    let parsedData = await response.json()
    console.log(parsedData)
  } catch(error){
    console.log(error)
  }
}

```

Once we have sent the request and gotten a result back, we want to do something with it. The first thing we do is: parse the data. That means transforming the data (usually) from a JSON-Object to a regular JavaScript Object. We do this by calling the method `json()` on the request. We now have an object filled with data we got from an API that we can use to insert into our html-code!  

This last step is like getting a tray of food from the kitchen and unwrapping it! 

Enjoy!

	
  
## More reading on fetch: 
[jsInfo-Fetch](https://javascript.info/fetch)

## Link to the APIs we use: 

[themeal.db](https://www.themealdb.com/api.php)

[random user](https://randomuser.me/documentation)

[A collection of other free APIs](https://www.programmableweb.com/category/random/api)