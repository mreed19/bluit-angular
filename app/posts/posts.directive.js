{
  angular.module('bluit.posts')
    .directive('posts', () => {
      return {
        scope: {},
        template: `

        <ul class="posts">
          <li>Post template</li>
        </ul>
        <main class="col-xs-8" ui-view></main>

        `
      };
    });
}
