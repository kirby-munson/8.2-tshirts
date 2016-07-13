var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({
  displayPrice: function(){
    return '$' + (this.get('price') / 100).toFixed(2);
  }
});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt
});

var CartCollection = Backbone.Collection.extend({
  model: Shirt
});


module.exports = {
  'Shirt': Shirt,
  'ShirtCollection': ShirtCollection,
  'CartCollection': CartCollection
};
