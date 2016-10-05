var app = angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/home/homeTmpl.html',
    controller: 'homeCtrl'

  }).state('settings', {
    url: '/settings',
    templateUrl: 'app/settings/settingsTmpl.html',
    controller: 'settingsCtrl'

  }).state('products',{
    url: '/products/:id',
    templateUrl: 'app/products/productTmpl.html',
    controller: 'productsCtrl'
  });
  $urlRouterProvider
  .otherwise('/');

});
