import  "jasmine";
import { passportTestData, passportIndividualTestData } from '../day4/testData';
import { validatePassport, validatePassports } from '../day4/a/index';

describe("Day 4: Password validator", () => {

  const [data1, data2, data3, data4] = passportIndividualTestData;

  it(`Passport should be ${data1.isValid}`, () => {
    expect(validatePassport(
      data1.passport
    )).toBe(data1.isValid);
  });
  
  it(`Passport should be ${data2.isValid}`, () => {
    expect(validatePassport(
      data2.passport
    )).toBe(data2.isValid);
  });
  
  it(`Passport should be ${data3.isValid}`, () => {
    expect(validatePassport(
      data3.passport
    )).toBe(data3.isValid);
  });
  
  it(`Passport should be ${data4.isValid}`, () => {
    expect(validatePassport(
      data4.passport
    )).toBe(data4.isValid);
  });
  
  
  it(`Passport test batch should have 2 valid passports`, () => {
    expect(validatePassports(passportTestData)).toBe(2);
  });

});