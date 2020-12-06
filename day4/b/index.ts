import { validatePassports } from "../a";
import { data } from "../dataB";

type Validator = (value: string) => boolean;

const validateBYR: Validator = value => {
  const number = parseInt(value);
  const valid = (
    number >= 1920 &&
    number <= 2002
  );
  return valid;
}

const validateIYR: Validator = value => {
  const number = parseInt(value);
  const valid = (
    number >= 2010 &&
    number <= 2020
  );
  return valid;
}

const validateEYR: Validator = value => {
  const number = parseInt(value);
  const valid = (
    value.length === 4 &&
    number >= 2020 &&
    number <= 2030
  );
  return valid;
}

const validateHGT: Validator = value => {
  if (value.indexOf('cm') !== -1) {
    const number = parseInt(value.split('cm')[0]);
    const valid = (
      number >= 150 &&
      number <= 193
    );
    return valid;
  }

  if (value.indexOf('in') !== -1) {
    const number = parseInt(value.split('in')[0]);
    const valid = (
      number >= 59 &&
      number <= 76
    );
    return valid;
  }

  return false;
}

const validateHCL: Validator = value => {
  const valid = (
    value.indexOf('#') === 0 &&
    /^[\da-f]{6}$/g.test(value.split('#')[1])
  );
  return valid;
}

const validateECL: Validator = value => {
  const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(x => x === value);
  return valid;
}

const validatePID: Validator = value => {
  const valid = /^\d{9}$/.test(value);
  return valid;
}

export const validators = {
  'byr': validateBYR,
  'iyr': validateIYR,
  'eyr': validateEYR,
  'hgt': validateHGT,
  'hcl': validateHCL,
  'ecl': validateECL,
  'pid': validatePID 
}

console.log('Passports valid: ', validatePassports(data, validators));
