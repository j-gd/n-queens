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


window.findSolution = function(row, board, n, validator, callback) {
  // base case
  // if row is our last row
  if (row === n) {
    return callback();
  }

  // recursive case
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[validator]()) {
      var results = findSolution(row + 1, board, n, validator, callback);
      if (results) {
        return results;
      }
    }
    board.togglePiece(row, i);
  }
};

window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});

  var solution = findSolution(0, board, n, 'hasAnyRooksConflicts', function() {
    return _.map(board.rows(), function (row) {
      return row.slice();
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n': n});

  findSolution(0, board, n, 'hasAnyRooksConflicts', function() {
    solutionCount++;
  });  

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});

  var solution = findSolution(0, board, n, 'hasAnyQueensConflicts', function() {
    return _.map(board.rows(), function (row) {
      return row.slice();
    });
  }) || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n': n});

  findSolution(0, board, n, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  }); 

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

/*
Complexity data points: (ms)
countNRooks(1-8):  825 733 735 732
countNQueens(1-8):  53  45  45  44
countNRooks (9): 7517 7682 8109 7730 7655

Remove row conflict check optimization:
countNRooks (9):  5288 5360 5398
countNQueens (9):  142  142

*/
