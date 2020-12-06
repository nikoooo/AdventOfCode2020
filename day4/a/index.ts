import { data } from '../dataA';
type validatorMap = {[key: string]: ((value: string) => boolean)};

/**
 * KVPairs seperated by \n and ' '
 * @return [key, value]
 */
const extractKeyValuePairs = (passport: string): ([string, string])[] => {
  /**
   * k:1;k:2;k:3
   */
  const structuredPassport = passport
    .replace(new RegExp('\n', 'g'), ';')
    .replace(new RegExp(' ', 'g'), ';')
    .split(';')

  return structuredPassport
    .map(x => {
      const keySplit = x.split(':');
      return [keySplit[0], keySplit[1]];
    });
}

const requiredFields: string[] = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid'
];

/**
 * Required keys exists and has value.
 * @param passport 
 */
export const validatePassport = (
  passport: string,
  validators?: validatorMap
): boolean => {
  const kvPairs = extractKeyValuePairs(passport);

  const allRequiredPresent = requiredFields
    .every(x => (
      kvPairs.some(y => x === y[0])
    ));

  const rulesApplied = kvPairs.map(x => 
    (!!validators && !!validators[x[0]]) ?
      validators[x[0]](x[1]) :
      true
  );

  const allRulesValid = rulesApplied.every(x => !!x);
  return (
    allRequiredPresent &&
    (!validators || allRulesValid)
  );
}

export const validatePassports = (
  passports: string[],
  validators?: validatorMap
): number =>  passports
    .map(x => {
      return validatePassport(x, validators);
    })
    .filter(x => !!x)
    .length


console.log('Valid passports: ' + validatePassports(data));
