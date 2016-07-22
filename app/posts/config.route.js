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

      .state('new-post', {
        url: '/posts/new',
        template: '<posts-form></posts-form>'
      })

      .state('show-post', {
        url: '/posts/:postId',
        template: '<post></post>'
      });
  }
}
