{
  angular
    .module('bluit.posts')
    .directive('postsForm', [
      () => {
        return {
          template: `

          <h1>Posts Form</h1>

          `
        };
      }
    ]);
}
