const createBoard = (row: number) => {
  const arrayRow: Array = [];
  const boardArray: Array = [];
  for (let i = 0; i < row; i++) {
    arrayRow.push(0);
    boardArray.push(arrayRow);
  }

  console.log(boardArray);
};

createBoard(3);
