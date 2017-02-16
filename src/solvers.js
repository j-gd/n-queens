/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];

  var board = new Board({'n': n});
  // console.log ('our board = ', board);

  // var set = function (row, col) {
  //   board.get(row)[col] = 1;
  //   board.trigger('change');    
  // };

  // // seed
  // set(0, 0);

  // // pos
  // var pos = [0, 0];

  // board.set()


  // board.togglePiece(0, 0);
  // var level = 1;
  // board.togglePiece(1, 1);
  // view = new BoardView({model: board});
  // console.log('parent: ', board);
  // console.log('board.attr: ', board.attributes);
  // var newBoard = board.clone();
  // console.log('rows: ', board.rows());

  var increment = function(r, c) {
    if (c === n - 1) {
      c = 0;
      r++;
    } else {
      c++;
    }
    return [r, c];
  };

  var addPiece = function(board, level, row, col) {
    // var childBoard = new Board(board.rows());
    var childBoard = board;
    // var childBoard = new Board({'n': n});
    // for (var i = 0; i < n; i++) {
    //   childBoard.get(i) = board.rows();
    // }
    // console.log('child: ', childBoard);
    // console.log('clone: ', newBoard);
    // Recurse here: new object, copy of parent object
    // var childBoard = new Board ({'n': n});

    if (!childBoard._isInBounds(row, col)) {
      return false;
    }
    // debugger;
    childBoard.togglePiece(row, col);
    // level++;
    // check conflicts
    if (!childBoard.hasAnyRooksConflicts()) {
      // no conflicts
      if (level + 1 < n) {
        // not enough pieces yet
        while (childBoard._isInBounds(row, col)) {
          // debugger;
          [row, col] = increment(row, col);

          var found = addPiece(childBoard, level + 1, row, col);
          if (found) {
            return true;
          }
          // [row, col] = increment(row, col);
        }
        return false;
        // var result = addPiece(childBoard, level + 1, row, col);
        // if (result === 'no solution') {
        //   [row, col] = increment(row, col);
        // }
      } else {
        // found solution
        // debugger;
        solution = childBoard.rows().slice(0);
        return true;
      }
    } else {
      // has conflict
      childBoard.togglePiece(row, col);

      return false;
    }

    // for (var row = r; row < n; row++) {
    //   // childBoard.row = parentBoard.rows(row).slice();

    //   for (var col = 0; col < n; col++) {
    //     // new board, copy of old one
    //     // var pos = [row, col];
    //     if (row === 0 || col === 0) {

    //     } else {
    //       childBoard.togglePiece(row, col);
    //       // level++;
    //       // check conflicts
    //       if (!childBoard.hasAnyRookConflicts()) {
    //         if (level < n) {
    //           addPiece(childBoard, level + 1, row, col);
    //         }
    //       }
    //     }

              
    //   }
    // }
  };

  addPiece(board, 0, 0, 0);
  // Iterate here: pos++
  // set(pos)
  // checkconflicts (board)
  // if no conflict:
  //    if solution complete
  //       return this solution
  //    else 
  //       return result of recurse
  // else return not a solution




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
