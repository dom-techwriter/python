/*
Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

Helpful Notes:
Your function can be a function expression or a function declaration.
Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.

*/

const greetWorld = () => {
    return "Hello, World!"
}

/*

The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

*/

const canIVote = (number) => number >= 18 ? true : false;

/*
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
*/


const agreeOrDisagree = (string1, string2) => string1 === string2 ? "You agree!" : "You disagree!";

/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

*/

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
/*
// As a function declaration:
function lifePhase (age) {
    if (age < 0 || age > 140) {
       return 'This is not a valid age'
   } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
       return 'teen'
    } else if (age < 65) {
       return 'adult'
    } else {
        return 'senior citizen'
    }  
}
*/
console.log(lifePhase(5)) 


/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'

*/


const finalGrade = (num1, num2, num3) => {
    avg = (num1 + num2 + num3) / 3
    if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100) {
        return 'You have entered an invalid grade.'
    } else if (avg < 59) {
        return 'F'
    } else if (avg < 69) {
        return 'D'
    } else if (avg < 79) {
        return 'C'
    } else if (avg < 89) {
        return 'B'
    } else {
        return 'A'
    }
}


/*
Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

*/

const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`; 


/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

*/

const calculateWeight = (earthWeight, planet) => {
    let weight
    switch (planet) {
        case "Mercury":
            weight = earthWeight * 0.378
            return weight
        case "Venus":
            weight = earthWeight * 0.907
            return weight
        case "Mars":
            weight = earthWeight * 0.377
            return weight
        case "Jupiter":
            weight = earthWeight * 2.36
            return weight
        case "Saturn":
            weight = earthWeight * 0.916
            return weight
        default:
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."
    }
}


/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/

const truthyOrFalsy = (value) => value ? false : true;


/*

A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.
*/

const numImaginaryFriends = (friends) => {
    imaginary = Math.ceil(friends / 4)
    return imaginary
}


/*
Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:

*/

const sillySentence = (string1, string2, string3) => `I am so ${string1} because I ${string2} coding! Time to write some more awesome ${string3}!`;

/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'

*/

const howOld = (age, year) => {
    if (year > 2021) {
        calYear = year - 2021;
        age += calYear;
        return `You will be ${age} in the year ${year}` 
    } else if ((2021 - age) > year) {
        let yearsAgo = 2021 - age - year;
        return `The year ${year} was ${yearsAgo} years before you were born` 
    } else if ((2021 - age) < year) {
        age = year - (2021 - age)
        return `You were ${age} in the year ${year}`
    } else {
        return "Well, you fucked up..."
    }
}

console.log(howOld(32, 1969));


/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20

*/


const tipCalculator = (quality, cost) => {
    switch (quality) {
        case "bad":
            return cost * 0.05
        case "ok":
            return cost * 0.15
        case "good":
            return cost * 0.20
        case "excellent":
            return cost * 0.30
        default:
            return cost * 0.18
    }
}

/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'

*/

const toEmoticon = (string) => {
    switch (string) {
        case "shrug":
            return '|_{"}_|';
        case "smiley face":
            return ':)';
        case "frowny face":
            return ':(';
        case "winky face":
            return ';)';
        case "heart":
            return '<3';
        default:
            return '|_(* ~ *)_|';      
    }
}


// Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

// If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

// If not, return the string 'That is a nice color.'

// Feel free to test your code under the function definition.

const colorMessage = (favoriteColor, shirtColor) => favoriteColor === shirtColor ? "The shirt is your favorite color!" : "That is a nice color.";


// Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.

const isEven = (number) => (number % 2) === 0 ? true : false ;


// Create a function numberDigits() that takes the variable x as its only parameter.

// If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

// 'One digit: 5'
// If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

// 'Two digits: 12'
// Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

// 'The number is: -202'
// Feel free to test out your code below the function definition.


const numberDigits = (x) => {
    if (x <= 9 && x >= 0) {
        return `One digit: ${x}`
    } else if (x <= 99 && x >= 0) {
        return `Two digits: ${x}`
        
    } else {
        return `The number is: ${x}`
    }
}

console.log(numberDigits(-23))