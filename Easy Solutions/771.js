/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    let jewelSet =  new Set(jewels);
    for (let i=0; i<stones.length; i++) {
        if (jewelSet.has(stones[i])){
            counter++;
        }
    }
    return counter;
};
