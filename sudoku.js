function getRow(grid, index){
    let gridIndex = grid[index];
    return gridIndex;
}

function getColumn(grid, index){
    let columnIndex = []

    for (let i = 0; i < grid.length; i++){
        columnIndex.push(grid[i][index]);
    }
    return columnIndex;
}

function getSection(puzzle, y, x) {
      // Stole Ryan's solution out of not melting my brain anymore //

      // multiply by 3 to get each "chunk" or section of grid
      x *= 3;
      y *= 3;
      
      // create empty array to store sudoku grids as arrays
      let section = [];

      // loop through each array
      for (let i = x; i < x + 3; i++) {

        // loop through each index in array
        for (let j = y; j < y + 3; j++) {
          section.push(puzzle[i][j]);
        }
      }
    
      return section;
    }
      
function includes1to9(subSection){
    // temp variable to hold numbers in array for checking for duplicates
    let tempNum = 0;

    for (let i = 0; i < subSection.length; i++){
        tempNum = subSection[i];

        // if number is not 1-9 or number is equal to a number already in array, return false
        if (subSection.indexOf(i+1) === -1 || subSection[i+1] === tempNum){
            return false;
        }
    }
    return true;
}

function sudokuIsValid(puzzle){

    // loop through length of puzzle and get  each column/row. Check them with includes1to9 function
    for (let index = 0; index < puzzle.length; index++){
        let column = getColumn(puzzle, index);
        let row = getRow(puzzle, index);
        if (!includes1to9(column) || !includes1to9(row)){
            return false;
        }
    }

    // loop through each sudoku grid and check with includes1to9 function
    for (let i = 0; i < 3 ; i++){
        for (let j = 0; j < 3; j++){
           let section = getSection(puzzle,i,j);
           if (!includes1to9(section)){
                return false;
           }
        }
    }
    return true;
}

function isSame(puzzle1, puzzle2){

    // loop through every index in both puzzles and check for duplicate numbers
    for (let i = 0; i < puzzle1.length; i++){
        for (let j = 0; j <puzzle1.length; j++){
            if (puzzle1[i][j] !== puzzle2[i][j]){
                return false;
            }
        }
    }
    return true;
}


// ****** I left this in to show that I at least tried to do the getSection portion of this project before using Ryan's solution ****** //


      // **** Attempt number 2 at getSection **** //

    // let newGrid = [];


    // for (let i = 0; i<grid.length; i++){
    //     // console.log(grid[i]);
    //     for (let j=0; j <= 2; j++){
    //         let gridSection = grid[i]
    //         // gridSection[j].splice(0,2)
    //         // console.log(newGrid[i])
    //         if (newGrid.length > 3){
    //         grid.splice(0,2);
    //         console.log(grid);
    //         newGrid.concat(grid[i]);
    //         }
    //         newGrid.push(grid[i][j]);
        
    // }
    // console.log(newGrid);
    // }


 // **** Attempt number 1 at getSection **** //

//     let row = getRow(grid, xIndex);
//     // console.log(row)
//     // let column = getColumn(grid,yIndex);
//     // console.log(column);

//     for (let i = xIndex; i < xIndex+3; i++){

//     // console.log(section)

//     for (let j = yIndex; j < yIndex+3; j++){
//         // let row = getRow(grid, i);
//         // section.push(row[j]);
//         let column = getColumn(grid, j);
//         section.push(column[i]);
//     }
// }
