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
