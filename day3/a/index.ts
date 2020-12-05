import { data } from './data';

type Move = {
  right: number;
  down: number;
};


const checkHit = (
  move: Move,
  slope: string[],
  rowIndex: number
) => {
  if (rowIndex + move.down > (slope.length - 1)) {
    return 0;
  }

  const row = slope[rowIndex + move.down];
  const movesDownTot = ((rowIndex + 1) / move.down);
  const accStrayRight =  movesDownTot * move.right;

  const colIndex = accStrayRight; // index starts with 1

  return row.charAt(colIndex) === '#' ? 1 : 0;
}


export const countTrees = (
  move: Move,
  slope: string[]
): number => {
  const slopeLength = slope.length;
  const slopeWidth = slope[0].length;
  const widthNeeded = (slopeLength / move.down) * move.right;

  let extendedSlope = slope;

  for (let i = slopeWidth; i <= widthNeeded; i++) {
    let charFrom = i - slopeWidth;
    extendedSlope = extendedSlope.map(x => x + x.charAt(charFrom));
  }

  const hits = extendedSlope.reduce((acc, _current, index) => {
    return acc + checkHit(move, extendedSlope, index);
  }, 0);

  return hits;
};

const hits = countTrees(
  { right: 3  , down: 1 },
  data.split('\n')
);

console.log(`Hits: ${hits}`);