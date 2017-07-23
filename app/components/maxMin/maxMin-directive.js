app.directive('minMax', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/maxMin/maxMin.html',
    scope: {
      temperature:'@',
      type: '@',
      date: '@'
    }
  };
});