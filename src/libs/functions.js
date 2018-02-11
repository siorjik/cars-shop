export let shuffleArr = (arr) => { //random 
  return arr.sort(() => Math.random() - 0.5);
}

export let concatArr = (...args) => {
  let res = [];
  for(let i = 0; i < args.length; i++) {
    args[i].forEach((el) => {
      res.push(el);
    });
  }
  return res;
}