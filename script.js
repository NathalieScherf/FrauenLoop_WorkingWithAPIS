// Add content p, h2, to the div with the class dinner?
let dinnerDiv = document.querySelector('.dinner')
let content = document.createElement('div')
let guest = "Berta"
content.innerHTML = (
  `<h2> Hi ${guest}. Here is your dinner:</h2>
  <p> Enjoy! </p>
  `
)


/** Use an API
 * ajax - request
 * fetch (browser fetch)
 * axios
 * Api calls are asynchronous
 * 3 Options to wait for asynchronous code: 
 * - Callback
 * - Promises (then, catch)
 * - async await
 */

const getMeal = async () => {
  try {
    // get some data from Meals.db - API
    let myData = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    // we need to change format of the data:
    let theActualObject = await myData.json()
    // pick out the parts we want; 
    let myMeal = theActualObject.meals[0]
    console.log(myMeal);
    // add parts to our page
    let mealDisplay = document.createElement('div')
    mealDisplay.innerHTML = (`
   <img src="${myMeal.strMealThumb}" style="height: 100px">
   <h5>${myMeal.strMeal}</h5>
   <p> ${myMeal.strCategory}</p>
   `)
    dinnerDiv.append(mealDisplay)
  } catch (error) {
    console.log(error);
    let mealDisplay = document.createElement('div')
    mealDisplay.innerText = 'Could not load data from person-api'
    dinnerDiv.append(mealDisplay)
  }
}


// Call function on a click of a button:

let mealButton = document.querySelector('#meals')

mealButton.addEventListener('click', getMeal)


/** Get person */
// you need to link to jquery (CDN) to use this:
//  $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

const getPerson = async () => {
  try {
    let body = await fetch('https://randomuser.me/api/')
    let parsedData = await body.json()
    console.log(parsedData);
    let person = parsedData.results[0]

    let personDisplay = document.createElement('div')
    personDisplay.innerHTML = (`
  <img src="${person.picture.medium}" style="height: 100px">
  <h5>${person.name.first}</h5>
  <p> ${person.location.city}, ${person.location.country}</p>
  `)
    document.querySelector('.guest').append(personDisplay)
  } catch (error) {
    console.log(error);
    let personDisplay = document.createElement('div')
    personDisplay.innerText = 'Could not load data from person-api'
    document.querySelector('.guest').append(personDisplay)
  }
}
let personButton = document.querySelector('#person')

personButton.addEventListener('click', getPerson)