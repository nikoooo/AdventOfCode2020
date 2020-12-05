import { data } from './data'

const rows = data.split('\n');

const extraxtParams = (row: string): {
  min: number;
  max: number;
  letterOccurrance: number;
} => {
  let split = row.split(': ');
  let rule = split[0];
  let ruleSplit = rule.split(' ');

  let password = split[1];

  let minMaxString = ruleSplit[0]; // 1-2
  let min = parseInt(minMaxString.split('-')[0]);
  let max = parseInt(minMaxString.split('-')[1]);

  let letter = ruleSplit[1]; // a

  let regexp = new RegExp(`[^${letter}]`, 'g');

  let letterOccurrance = password.replace(regexp, '').length;

  return {
    min,
    max,
    letterOccurrance
  };
}

const validatad = rows
  .map(x => {
    var params = extraxtParams(x);
    return (
      (params.letterOccurrance <= params.max) &&
      (params.letterOccurrance >= params.min)
    );
  });

  console.log('valid:');
  console.log(validatad.filter(x => !!x).length);
  console.log('of:');
  console.log(rows.length);

