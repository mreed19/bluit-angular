{
  angular
    .module('bluit.posts')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        template: '<posts></posts>'
      });
  }
}
