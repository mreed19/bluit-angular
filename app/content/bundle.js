"use strict";!function(){function t(t,o){o.otherwise("/posts")}angular.module("bluit",["ui.router","bluit.posts"]).config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){angular.module("bluit.posts",[])}(),function(){function t(t){t.state("posts",{url:"/posts",template:"<h2>posts</h2>"})}angular.module("bluit.posts").config(t),t.$inject=["$stateProvider"]}();
//# sourceMappingURL=bundle.js.map