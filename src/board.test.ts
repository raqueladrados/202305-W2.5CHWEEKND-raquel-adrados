import { before } from "node:test";
import { createBoard } from "./board.js";

describe("Given a function", () => {
  describe("When it receives 3", () => {
    test("Then it should return [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]", () => {
      const row = 3;
      const expectedResult = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const result = createBoard(row);

      expect(expectedResult).toStrictEqual(result);
    });
  });
  describe("When it receives 0", () => {
    test("Then it should return []", () => {
      const row = 0;
      const expectedResult: any[] = [];

      const result = createBoard(row);

      expect(expectedResult).toStrictEqual(result);
    });
  });
});

import { generateRandomBoard } from "./random-board.js";

describe("Given a random function", () => {
  describe("When it receives 3", () => {
    test("Then it should returns [ [ 0, 1, 1 ], [ 0, 1, 1 ], [ 0, 1, 1 ] ]", () => {
      const num = 3;
      const expectedResult = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 1, 1],
      ];

      const result = generateRandomBoard(num);

      expect(expectedResult).toBe(result);
    });
  });
});
