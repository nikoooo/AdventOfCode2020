import { data } from './data'

const rows = data.split('\n');

const extraxtParams = (row: string): {
  firstIndex: number;
  secondIndex: number;
  letter: string;
  password: string;
} => {
  let split = row.split(': ');
  
  let rule = split[0];
  let password = split[1];

  let ruleSplit = rule.split(' ');

  let indicesSting = ruleSplit[0]; // 1-2
  let letter = ruleSplit[1]; // a

  let firstIndex = parseInt(indicesSting.split('-')[0]);
  let secondIndex = parseInt(indicesSting.split('-')[1]);


  return {
    firstIndex: firstIndex - 1,
    secondIndex: secondIndex - 1,
    letter,
    password
  };
}

const getStingLetterOfIndex = (i: number, p: string): string => p.slice(i, i+1);

const validatad = rows
  .map(x => {
    var { firstIndex, secondIndex, letter, password } = extraxtParams(x);
    var firstMatch = getStingLetterOfIndex(firstIndex, password) === letter;
    var secondMatch = getStingLetterOfIndex(secondIndex, password) === letter;
    var res = (!!firstMatch || !!secondMatch) && (firstMatch !== secondMatch);
    
    return res;
  });

  console.log('valid:');
  console.log(validatad.filter(x => !!x).length);
  console.log('of:');
  console.log(rows.length);
