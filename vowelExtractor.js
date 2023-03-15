function disemvowel(str) {
    const newWord = str.match(/[^aeiou]/gi).join('')
    //[aeiou]/gi will return only the vowel
    return newWord;
  }