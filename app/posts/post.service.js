{
  angular.module('bluit.posts')
    .factory('Post', Post);

  Post.$inject = ['$resource', 'API_BASE'];
  function Post($resource, API_BASE) {
    return $resource(`${API_BASE}posts/:id`, null, {
      update: {method: 'PUT'}
    });
  }
}
