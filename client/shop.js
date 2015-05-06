(function() {
    var app = angular.module('shoppingList', []);

    app.controller('ShopController', function() {
        this.items = [];
        this.deleteItem = function(item) {

        };
    });

    app.controller("NewItemController", function() {
        this.newItem = {name:"", shop: "Rewe", quantity:1};
        this.addItem = function(items) {
            items.push(this.newItem);
            this.newItem = {name:"", shop:"Rewe", quantity:1};
        };
    });
})();
