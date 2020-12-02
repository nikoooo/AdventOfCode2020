import { data } from './data'

const array = data.split('\n');

let result = 0;

array.forEach((x, i) => {
  array.forEach((y, j) => {
    array.forEach((z, k) => {
    var intx = parseInt(x);
    var inty = parseInt(y);
    var intz = parseInt(z);
      if (
        i !== j &&
        j !== k &&
        ((intx + inty + intz) === 2020)
      ) {
        result = intx * inty * intz;
      }
    });
  });
})

console.log(result);