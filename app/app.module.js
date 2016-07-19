{
  angular.module('bluit', [
    'ui.router',
    'bluit.posts'
  ])
  .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configFunction($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/posts');
  }
}
