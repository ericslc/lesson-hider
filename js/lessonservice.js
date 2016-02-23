angular.module('directivePractice').service('lessonService', function(){
  this.getSchedule = function() {
  return $http.get('./schedule.json');
}

});
