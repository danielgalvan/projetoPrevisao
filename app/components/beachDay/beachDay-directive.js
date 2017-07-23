app.directive('beach', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/beachDay/beachDay.html',
    scope:{
      beachData: '='
    }
  };
});