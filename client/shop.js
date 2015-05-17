(function() {
    var app = angular.module('shoppingList', [])

    var db = new PouchDB('http://192.168.66.98:5984/shopping')

    app.controller('ShopController', function() {
        var that = this
        that.items = initData()
        function initData() {
            return db.allDocs({include_docs:true}).then(function(result) {
                that.items = []
                for(i=0; i < result.rows.length; i++) {
                    that.items.push(result.rows[i].doc)
                }
                return that.items
            }).catch(function(error) {
                alert(error)
            })
        }

        this.deleteItem = function(item, items) {
            items.forEach(function(element, index, array) {
                if(element._id === item._id) {
                    items.splice(index, 1)
                    return
                }
            })
        }
    })

    app.controller("NewItemController", function() {
        this.newItem = {name:"", shop: "Rewe", quantity:1}

        this.addItem = function() {
            db.post(this.newItem)
            this.newItem = {name:"", shop:"Rewe", quantity:1}
        }
    })
})()
