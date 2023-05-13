"use strict";
const createBoard = (row) => {
    const arrayRow = [];
    const boardArray = [];
    for (let i = 0; i < row; i++) {
        arrayRow.push(0);
        boardArray.push(arrayRow);
    }
    console.log(boardArray);
};
createBoard(3);
