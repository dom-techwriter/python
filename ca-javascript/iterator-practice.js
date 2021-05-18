/*

Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

*/

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 


/*
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!


*/


const greetAliens = (arr) => {
    for (word of arr) {
        console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`)
    }
}


/*
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

*/

const convertToBaby = (arr) => {
    newArray = [];
    for (word of arr) {
        newWord = "baby " + word
        newArray.push(newWord);

    }
    return newArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


// A fix the code one. Here's the fix:

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 


/*
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

*/

const declineEverything = arr => {
    arr.forEach(politelyDecline)
  }

const acceptEverything = arr => {
    for (word of arr) {
        console.log(`Ok, I guess I will eat some ${word}.`)
    }
}


/*

Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!

*/


const squareNums = (array) => {
    return array.map(number => number ** 2)
}

/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!

*/

const shoutGreetings = (array) => {
    return array.map(word => word.toUpperCase() + "!")
}


/*

Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!
 */


const sorted = (year1, year2) => year1 < year2

const sortYears = (arr) => {
    return arr.sort(sorted);
}


/*

Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!
 */


const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))


/*
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
You can test your function when you’re ready by passing in the dinner array or by making your own!

const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}

*/

const isTheDinnerVegan = (array) => {
    let vegan = false;
    for (food of array) {
        if (food.source === 'plant') {
            vegan = true;
        } else {
            vegan = false;
        }
    }
    return vegan

}


/*

Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own!

*/

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!


*/

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

// Const function = parameter => parameter.findIndex(element => element === 'what_you_want')

/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

*/

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name () {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
          return "ruff! ruff!";
        },
        eatTooManyTreats() {
          return this._weight++
        }
    }
}