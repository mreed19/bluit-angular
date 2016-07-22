{
  angular.module('bluit.posts')
    .directive('post', [

      '$state',
      'Post',
      ($state, Post) => {
        class PostController {
          constructor() {
            var vm = this;
            vm.post = vm.get();
          }
          get() {
            if ($state.params.postId) {
              return Post.get({ id: $state.params.postId });
            }
            $state.go('posts');
          }
        }
        return {
          scope: {},
          controller: PostController,
          controllerAs: 'vm',
          bindToController: true,
          template: `

          <article class="post">
            <div class="title">
              {{vm.post.title}}
            </div>
            <div class="tagline" title="{{ vm.post.updated_at}}">
              submitted <span am-time-ago="vm.post.updated_at"></span>
            </div>
            <section class="body" ng-show="vm.post.body">
              {{vm.post.body}}
            </section>
          </article>

          `
        };
      }
    ]);
}
