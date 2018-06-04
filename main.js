// //_________________________________________________________________________________

// // Create an unordered list element
// const list = document.createElement('ul')

// // Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// // Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)

// const articleRef = document.querySelector("#container-article")
// articleRef.appendChild(list)

// const listItemTwo = document.createElement('li')
// listItemTwo.className = "president"
// listItemTwo.textContent = "George Washington"

// list.appendChild(listItemTwo)

// //_________________________________________________________________________________

// // A new "virtual" document fragment to contain components
// const fragment = document.createDocumentFragment()

// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// console.log("fragment:", fragment);



// /*
//     Now I can update my HTML document all at once, with all
//     three emperor components rendered. Otherwise, I would
//     have needed to add each one, individually - a much more
// //     "expensive" operation.
// // */
// document.querySelector("#emperorList").appendChild(fragment)


//-----------------------------PRACTICE STARTS HERE -------------------------------------------------------

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const messages = document.querySelector("#messages")
console.log("Step 2: article id messages", messages);

// let daisy = document.createElement('section')
// daisy.textContent = "Daisy is pretty"
// messages.appendChild(daisy)

// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
const flowers = document.createDocumentFragment()

    // Create section element 1
const daisy = document.createElement('section')
daisy.textContent = "Daisy is pretty"
flowers.appendChild(daisy)

messages.appendChild(flowers)

    // Create section element 2
const tulip = document.createElement('section')
tulip.textContent = "Tulip is sweet"
flowers.appendChild(tulip)

    // Create section element 3
const iris = document.createElement('section')
iris.textContent = "Iris is fun"
flowers.appendChild(iris)

    // Create section element 4
const rose = document.createElement('section')
rose.textContent = "Rose is bright"
flowers.appendChild(rose)

    // Create section element 5
const lily = document.createElement('section')
lily.textContent = "Lily is fresh"
flowers.appendChild(lily)

console.log("Step 3 - fragment:", flowers);

// Using appendChild(), attach each message as a child to the messages element.
document.querySelector("#messages").appendChild(flowers)
