function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function shuffle(str) {
    const randomChars = shuffleArray([...str.replace(/\s+/g, '')]);
    let index = 0;
    return str.replace(/\S/g, () => randomChars[index++]);
  }
  
  console.log(shuffle('#paragraph'));