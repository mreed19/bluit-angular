{
  angular
    .module('bluit.posts')
    .directive('postsForm', [

      '$state',
      'Post',
      ($state, Post) => {
        class PostsFormController {
          constructor() {
            var vm = this;
            vm.post = new Post();
          }
          submit() {
            var vm = this;
            vm.post
              .$save()
              .then(() => $state.go('posts'));
          }
        }
        return {
          scope: {},
          controller: PostsFormController,
          controllerAs: 'vm',
          bindToController: true,
          template: `

          <form ng-submit="vm.submit()">
            <p>
              <label for="post_title">Title</label>
              <input
                ng-model="vm.post.title"
                type="text"
                name="title"
                id="post_title"
                placeholder="Title your post"
                focus-on
                required>
            </p>
            <p>
              <label for="post_link_url">Link URL</label>
              <input
                ng-model="vm.post.link_url"
                type="url"
                id="post_link_url"
                placeholder="URL link">
            </p>
            <p>
              <label for="post_body">Body</label>
              <textarea
                ng-model="vm.post.body"
                id="post_body"
                placeholder="Post content..."></textarea>
            </p>
            <div class="form-actions">
              <input
                type="submit"
                value="Create Note"
                class="btn btn-default">
            </div>
          </form>

          `
        };
      }
    ]);
}
