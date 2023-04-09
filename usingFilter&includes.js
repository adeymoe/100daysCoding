function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    const filtered = birds.filter(item => !geese.includes(item))
    return filtered
  };