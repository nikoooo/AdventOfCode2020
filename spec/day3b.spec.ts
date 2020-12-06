import  "jasmine";
import { testData } from '../day3/b/testData';
import { countTrees } from '../day3/b/index';

describe("Day 3: TreeCounter ", () => {
  const testDataArray = testData.split('\n');

  it("{ right: 1, down: 1 } should count to 2", () => {
    expect(countTrees(
      { right: 1, down: 1 },
      testDataArray
    )).toBe(2);
  });
  
  it("{ right: 3, down: 1 } should count to 7", () => {
    expect(countTrees(
      { right: 3, down: 1 },
      testDataArray
    )).toBe(7);
  });
  
  it("{ right: 5, down: 1 } should count to 3", () => {
    expect(countTrees(
      { right: 5, down: 1 },
      testDataArray
    )).toBe(3);
  });
  
  it("{ right: 7, down: 1 } should count to 4", () => {
    expect(countTrees(
      { right: 7, down: 1 },
      testDataArray
    )).toBe(4);
  });
  
  it("{ right: 1, down: 2 } should count to 2", () => {
    expect(countTrees(
      { right: 1, down: 2 },
      testDataArray
    )).toBe(2);
  });
});