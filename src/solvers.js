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

  var increment = function(r, c) {
    if (c === n - 1) {
      c = 0;
      r++;
    } else {
      c++;
    }
    return [r, c];
  };

  var addPiece = function(level, row, col) {
    // var childBoard = new Board(board.rows());

    if (!board._isInBounds(row, col)) {
      return false;
    }
    board.togglePiece(row, col);
    // check conflicts
    if (!board.hasAnyRooksConflicts()) {
      // no conflicts
      if (level + 1 < n) {
        // not enough pieces yet
        while (board._isInBounds(row, col)) {
          [row, col] = increment(row, col);

          var found = addPiece(level + 1, row, col);
          if (found) {
            return true;
          }
        }
        return false;
      } else {
        // found solution
        solution = board.rows().slice(0);
        return true;
      }
    } else {
      // has conflict
      board.togglePiece(row, col);
      return false;
    }
  };

  addPiece(0, 0, 0);

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
