import { data } from '../data';

type Move = {
  right: number;
  down: number;
};


const checkHitRow = (
  move: Move,
  row: string,
  rowIndex: number
) => {
  const movesMadeDown = rowIndex + 1;
  const accStrayRight =  movesMadeDown * move.right;

  const colIndex = accStrayRight; // index starts with 1

  return row.charAt(colIndex) === '#' ? 1 : 0;
}


export const countTrees = (
  move: Move,
  slope: string[]
): number => {
  const slopeLength = slope.length;
  const slopeWidth = slope[0].length;
  const widthNeeded = slopeLength / move.down * move.right;

  let extendedSlope = slope;

  if (slopeWidth < widthNeeded) {
    for (let i = slopeWidth; i <= widthNeeded; i++) {
      let charFrom = i - slopeWidth;
      extendedSlope = extendedSlope.map(x => x + x.charAt(charFrom));
    }
  }

  const hits = extendedSlope
    .slice(move.down)
    .filter((_, i) =>  (i + move.down) % move.down === 0)
    .reduce((acc, current, index) => {
      return acc + checkHitRow(move, current, index);
    }, 0);

  return hits;
};

const testSlopeMoves = [
  { right: 1  , down: 1 },
  { right: 3  , down: 1 },
  { right: 5  , down: 1 },
  { right: 7  , down: 1 },
  { right: 1  , down: 2 },
];


var results = testSlopeMoves.reduce((acc, curr) => {
  return acc * countTrees(
    curr,
    data.split('\n')
  );
}, 1);


console.log(`Results: ${results}`);
