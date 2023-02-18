function caesarCipher(str, shift) {
    // Set up the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    // Create a new string to hold the encrypted message
    let encrypted = '';
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      let char = str[i];
  
      // Find the index of the current character in the alphabet
      let index = alphabet.indexOf(char.toLowerCase());
  
      // If the character is not in the alphabet, add it to the encrypted string
      if (index === -1) {
        encrypted += char;
        continue;
      }
  
      // Calculate the new index of the character after the shift
      let newIndex = (index + shift) % 26;
  
      // Add the shifted character to the encrypted string
      encrypted += char === char.toUpperCase() ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    }
  
    // Return the encrypted string
    return encrypted;
  }
  
  // Example usage
  console.log(caesarCipher('hello', 3)); // 'khoor'
  console.log(caesarCipher('world', -3)); // 'tloia'