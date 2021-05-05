let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push("to", "Program");

const changeItem = (word, replace) => {
    index = secretMessage.indexOf(word);
    secretMessage[index] = replace;
    return secretMessage;
}

changeItem("easily", "right");
console.log(secretMessage);
secretMessage.shift();
secretMessage.unshift("Programming");


const begInd = secretMessage.indexOf("get");
const number = (secretMessage.indexOf("time,") + 1) - begInd;
console.log(number);

secretMessage.splice(begInd, number, "know,");

console.log(secretMessage);

console.log(secretMessage.join(" "));