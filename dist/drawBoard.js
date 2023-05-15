export const drawBoard = (board) => {
    let drawBoard = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i] === 1) {
                drawBoard += "⭕";
            }
            if (board[i] === 0) {
                drawBoard += "❌";
            }
        }
    }
    return drawBoard;
};
