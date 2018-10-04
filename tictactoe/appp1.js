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