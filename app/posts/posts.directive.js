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
                <a ng-hide="post.link_url" ui-sref="show-post({postId: post._id})">{{post.title}}</a>
                <a ng-show="post.link_url" href="{{post.link_url}}">{{post.title}}</a>
              </div>
              <div class="tagline" title="{{ post.updated_at}}">
                submitted <span am-time-ago="post.updated_at"></span>
              </div>
            </li>
          </ul>

          `
        };
      }
    ]);
}
