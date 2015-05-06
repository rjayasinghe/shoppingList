(function() {
    var app = angular.module('shoppingList', [])

    app.controller('ShopController', function() {
        this.items = []
        this.deleteItem = function(item, items) {
            items.forEach(function(element, index, array) {
                if(element.uid === item.uid) {
                    items.splice(index, 1)
                    return
                }
            })
        }
    })

    app.controller("NewItemController", function() {
        this.newItem = {name:"", shop: "Rewe", quantity:1, uid:nextUid()}
        this.addItem = function(items) {
            items.push(this.newItem)
            this.newItem = {name:"", shop:"Rewe", quantity:1, uid : nextUid()}
        }
    })
})()
