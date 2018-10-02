var app = angular.module('tictactoe', []);
app.controller('myCtrl', function($scope) {
    $scope.player1="X";
    $scope.player2="O";
    $scope.currentplayer=true;
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
    $scope.player1num=[];
    $scope.player2num=[];

$scope.onclick = function(number,event){
    console.log(number);
    if($scope.currentplayer===true){
        $scope.mark($scope.player1,event)
        $scope.player1num.push(number)
    }
else{
        $scope.mark($scope.player2,event)
        $scope.player2num.push(number)
    }

}
$scope.mark=function(player,event){
    event.target.innerHTML=player;
$scope.currentplayer=!$scope.currentplayer
}
});