import  "jasmine";
import { testData } from '../day3/b/testData';
import { countTrees } from '../day3/b/index';

describe("TreeCounter move { right: 1, down: 1 }", () => {
  const testDataArray = testData.split('\n');

  it("should count to 2", () => {
    expect(countTrees(
      { right: 1, down: 1 },
      testDataArray
    )).toBe(2);
  });
});

describe("TreeCounter move { right: 3, down: 1 }", () => {
  const testDataArray = testData.split('\n');

  it("should count to 7", () => {
    expect(countTrees(
      { right: 3, down: 1 },
      testDataArray
    )).toBe(7);
  });
});

describe("TreeCounter move { right: 5, down: 1 }", () => {
  const testDataArray = testData.split('\n');

  it("should count to 3", () => {
    expect(countTrees(
      { right: 5, down: 1 },
      testDataArray
    )).toBe(3);
  });
});

describe("TreeCounter move { right: 7, down: 1 }", () => {
  const testDataArray = testData.split('\n');

  it("should count to 4", () => {
    expect(countTrees(
      { right: 7, down: 1 },
      testDataArray
    )).toBe(4);
  });
});

describe("TreeCounter move { right: 1, down: 2 }", () => {
  const testDataArray = testData.split('\n');

  it("should count to 2", () => {
    expect(countTrees(
      { right: 1, down: 2 },
      testDataArray
    )).toBe(2);
  });
});