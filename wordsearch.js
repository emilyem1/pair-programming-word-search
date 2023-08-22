const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join('')) /* join letters together */
    for (l of horizontalJoin) { // loop through letters 
        if (l.includes(word)) return true // if contains return true 
    }
    const verticalJoin = []; // create array to push strings into 
    for (let col = 0; col < letters.length; col++) { // create a loop
        let verticalWord = ''; // string to push into
        for (let row = 0; row < letters.length; row++) { /* nested loop to swap the rows for the col */
            verticalWord += letters[row][col]; // swap positions in matrix 
        }
        verticalJoin.push(verticalWord); /* push into empty string and then empty array */
    }
    for (l of verticalJoin) { // now populated array with the vertical letters
        if (l.includes(word)) return true // if contains return true 
    }

    return false // else return false 
}

module.exports = wordSearch
