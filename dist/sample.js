"use strict";
const createBoard = (row) => {
  const arr = [];
  const boardArr = [];
  for (let i = 0; i < row; i++) {
    arr.push(0);
    boardArr.push(arr);
  }
};

createBoard(3);
