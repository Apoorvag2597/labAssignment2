var app = angular.module('tictactoe', []);
app.controller('myCtrl', function ($scope) {

    //Declaring the variables.
    $scope.player1 = "X";
    $scope.player2 = "O";
    $scope.currentplayer = true;
    $scope.winner = "";

    //Giving the winning combinations.
    $scope.winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //Initializing the variables to store the count of player 1 and player 2.
    $scope.player1num = [];
    $scope.player2num = [];

    //OnClick function for the grid.
    $scope.onclick = function (number, event) {
        console.log(number);
        if ($scope.currentplayer === true) {
            $scope.mark($scope.player1, event)
            $scope.player1num.push(number)
        }
        else {
            $scope.mark($scope.player2, event)
            $scope.player2num.push(number)
        }

        //taking for the count of the players.
        $scope.winningCombos.forEach(function (el) {
            var p1 = 0;
            var p2 = 0;
            el.forEach(function (ele) {
                if ($scope.player1num.indexOf(ele) > -1) {
                    p1++;
                } else if ($scope.player2num.indexOf(ele) > -1) {
                    p2++;
                }
            });
            if (p1 === 3 || p2 === 3) {
                //Ternary operator; Also checks for count of the players and declares the winner.
                $scope.winner = (p1 === 3) ? "PLAYER 1 WIN" : "PLAYER 2 WIN";

            }
        });

        //If length of both the players is equal to 9, it will go for draw condition.
        if($scope.player1num.length + $scope.player2num.length === 9 ){
            $scope.winner = "DRAW MATCH";
        }
    }

    //To change from Player 1 to Player 2.
    $scope.mark = function (player, event) {
        event.target.innerHTML = player;
        $scope.currentplayer = !$scope.currentplayer
    }

    //Reset function- For starting a new game again.
    $scope.reset = function () {
        var tds=document.getElementsByTagName("td");
        for(var i=0; i<tds.length;i++){
            tds[i].innerHTML = "";
        }
        $scope.winner = "";
        $scope.player1num = [];
        $scope.player2num = [];
    }
});