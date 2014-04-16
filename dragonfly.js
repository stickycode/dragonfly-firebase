var dragonfly = angular.module("Dragonfly", ["firebase"]);
 
function PlayerControl($scope, $firebase) {
  var playersReference = new Firebase("https://resplendent-fire-1962.firebaseio.com/dragonfly/players");
  
  $scope.players = $firebase(playersReference);
  
  $scope.skeleton = {};
  
  $scope.addPlayer = function(player) {
    $scope.players.$add(player);
  }
  
}