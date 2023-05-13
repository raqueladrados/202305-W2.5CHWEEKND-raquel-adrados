export const generateRandomBoard = (num) => {
    const arr = [];
    // eslint-disable-next-line no-unreachable-loop
    for (let i = 0; i < num; i++) {
        const arrResult = [];
        for (let y = 0; y < num; y++) {
            if (Math.random() < 0.6) {
                arrResult.push(1);
            }
            else {
                arrResult.push(0);
            }
            arr.push(arrResult);
        }
        return arr;
    }
};
