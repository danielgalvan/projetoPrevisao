app.directive('forecast', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/temperaturasSemana/temperaturasSemana.html',
    scope:{
      data: '='
    }
  };
});