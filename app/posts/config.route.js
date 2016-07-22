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
      })

      .state('newPost', {
        url: '/posts/new',
        template: '<posts-form></posts-form>'
      });
  }
}
