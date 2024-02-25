let str = "add";
let str1 = "aaaadd";

const wordLetters = (str1, str2) => {
    // Create an object with letter frequencies
    const letterFrequency = (word) => {
      const freq = {};
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (freq[letter]) {
          freq[letter]++;
        } else {
          freq[letter] = 1;
        }
      }
      console.log( freq);
    };
  
   
    return letterFrequency(str1) === letterFrequency(str2);
  };
console.log(wordLetters(str, str1)); //true
