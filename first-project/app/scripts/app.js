var app = angular.module('angularJsApp', ['ui.state', 'contact']);

app.config(['$stateProvider', 'statesContact', function($stateProvider, statesContact){
    $stateProvider
    .state('root',{
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: '/views/header.html',
          controller: 'HeaderCtrl'
        },
        'footer':{
          templateUrl: '/views/footer.html'
        }
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        'container@': {
          template: 'home page'
        }
      }
    })
    .state('root.about', {
      url: '/about',
      views: {
        'container@': {
          templateUrl: '/views/about.html'
        }
      }
    })
    angular.forEach(statesContact, function(state) {
      $stateProvider.state(state.name, state.options);
    })
    
  
}]);

app.controller('HeaderCtrl', ['$scope', function($scope){
  $scope.links = [
    {name: 'home', url:'/'},
    {name: 'about', url: '/about'},
    {name: 'contacts', url:'/contact'}
    ];
}]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $state.transitionTo('root.about');

}]);
