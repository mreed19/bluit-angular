"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var configFunction=function(t,n){n.otherwise("/posts")};angular.module("bluit",["ui.router","ngResource","angularMoment","bluit.posts"]).config(configFunction),configFunction.$inject=["$stateProvider","$urlRouterProvider"],angular.module("bluit.posts",[]),angular.module("bluit").constant("API_BASE","http://localhost:3030/api/v1/");var configFunction=function(t){t.state("posts",{url:"/posts",template:"<posts></posts>"}).state("new-post",{url:"/posts/new",template:"<posts-form></posts-form>"}).state("show-post",{url:"/posts/:postId",template:"<post></post>"})};angular.module("bluit.posts").config(configFunction),configFunction.$inject=["$stateProvider"];var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();angular.module("bluit.posts").directive("post",["$state","Post",function(t,n){var e=function(){function e(){_classCallCheck(this,e);var t=this;t.post=t.get()}return _createClass(e,[{key:"get",value:function(){return t.params.postId?n.get({id:t.params.postId}):void t.go("posts")}}]),e}();return{scope:{},controller:e,controllerAs:"vm",bindToController:!0,template:'\n\n          <article class="post">\n            <div class="title">\n              {{vm.post.title}}\n            </div>\n            <div class="tagline" title="{{ vm.post.updated_at}}">\n              submitted <span am-time-ago="vm.post.updated_at"></span>\n            </div>\n            <section class="body" ng-show="vm.post.body">\n              {{vm.post.body}}\n            </section>\n          </article>\n\n          '}}]);var Post=function(t,n){return t(n+"posts/:id",null,{update:{method:"PUT"}})};angular.module("bluit.posts").factory("Post",Post),Post.$inject=["$resource","API_BASE"];var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();angular.module("bluit.posts").directive("postsForm",["$state","Post",function(t,n){var e=function(){function e(){_classCallCheck(this,e);var t=this;t.post=new n}return _createClass(e,[{key:"submit",value:function(){var n=this;n.post.$save().then(function(){return t.go("posts")})}}]),e}();return{scope:{},controller:e,controllerAs:"vm",bindToController:!0,template:'\n\n          <form ng-submit="vm.submit()">\n            <p>\n              <label for="post_title">Title</label>\n              <input\n                ng-model="vm.post.title"\n                type="text"\n                name="title"\n                id="post_title"\n                placeholder="Title your post"\n                focus-on\n                required>\n            </p>\n            <p>\n              <label for="post_link_url">Link URL</label>\n              <input\n                ng-model="vm.post.link_url"\n                type="url"\n                id="post_link_url"\n                placeholder="URL link">\n            </p>\n            <p>\n              <label for="post_body">Body</label>\n              <textarea\n                ng-model="vm.post.body"\n                id="post_body"\n                placeholder="Post content..."></textarea>\n            </p>\n            <div class="form-actions">\n              <input\n                type="submit"\n                value="Create Note"\n                class="btn btn-default">\n            </div>\n          </form>\n\n          '}}]);var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();angular.module("bluit.posts").directive("posts",["Post",function(t){var n=function(){function n(){_classCallCheck(this,n);var e=this;e.posts=t.query()}return _createClass(n,[{key:"refresh",value:function(){var n=this;t.query().$promise.then(function(t){n.posts=t})}}]),n}();return{scope:{},controller:n,controllerAs:"vm",bindToController:!0,template:'\n\n          <ul class="posts">\n            <li ng-repeat="post in vm.posts | orderBy: \'-updated_at\' track by $index">\n              <div class="title">\n                <a ng-hide="post.link_url" ui-sref="show-post({postId: post._id})">{{post.title}}</a>\n                <a ng-show="post.link_url" href="{{post.link_url}}">{{post.title}}</a>\n              </div>\n              <div class="tagline" title="{{ post.updated_at}}">\n                submitted <span am-time-ago="post.updated_at"></span>\n              </div>\n            </li>\n          </ul>\n\n          '}}]);
//# sourceMappingURL=bundle.js.map
