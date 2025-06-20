// Write your solution here!
// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Functions

function destructivelyAppendCat(name) {
  cats.push(name); // Adds to the end of the array
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // Adds to the beginning of the array
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last element
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first element
}

// Nondestructive Functions

function appendCat(name) {
  return [...cats, name]; // Returns a new array with the name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the name added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last element
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first element
}
