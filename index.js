//Compare the Triplets
let compare = (a, b) => {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice ++;
    }else if (b[i] > a[i]) {
      bob++
    }
  }
  return [alice, bob];
}

console.log(compare([17,28,30],[99,16,8]));
