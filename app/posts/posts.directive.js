{
  angular.module('bluit.posts')
    .directive('posts', [

      'Post',
      (Post) => {
        class PostsController {
          constructor() {
            let vm = this;
            vm.posts = Post.query();
          }
          refresh() {
            let vm = this;
            Post.query().$promise.then(posts => {
              vm.posts = posts;
            });
          }
        }
        return {
          scope: {},
          controller: PostsController,
          controllerAs: 'vm',
          bindToController: true,
          template: `

          <ul class="posts">
            <li ng-repeat="post in vm.posts | orderBy: '-updated_at' track by $index">
              <div class="title">
                {{post.title}}
              </div>
              <div class="tagline" title="{{ post.created_at}}">
                submitted {{post.created_at}}
              </div>
            </li>

          `
        };
      }
    ]);
}
