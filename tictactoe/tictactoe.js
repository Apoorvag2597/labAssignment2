var app = angular.module('tictactoe', []);
app.controller('myCtrl', function ($scope) {
    $scope.player1 = "X";
    $scope.player2 = "O";
    $scope.currentplayer = true;
    $scope.winner = "";
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
    $scope.player1num = [];
    $scope.player2num = [];

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
                $scope.winner = (p1 === 3) ? "Player1 win" : "Player2 win";
            }
        });
        if($scope.player1num.length + $scope.player2num.length === 9 ){
            $scope.winner = "Draw";
        }
    }
    $scope.mark = function (player, event) {
        event.target.innerHTML = player;
        $scope.currentplayer = !$scope.currentplayer
    }

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