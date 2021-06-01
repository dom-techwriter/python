// Import the encryptors functions here.

const encryptors = require('./encryptors');

const { caesarCipher, symbolCipher, reverseCipher } = encryptors;


const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let message = caesarCipher(str, 5)
    let newMessage = symbolCipher(message);
    let finalMessage = reverseCipher(newMessage);
    return finalMessage
  }
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.

    let message = reverseCipher(newMessage);
    let newMessage = symbolCipher(message);
    let initialMessage = caesarCipher(str, 5)
    return initialMessage
    
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);