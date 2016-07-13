var React = require('react');
var CartCollection = require('../models/models').CartCollection;
var ShirtCollection = require('../models/models').ShirtCollection;



var Cart = React.createClass({
  render: function(){
    return (
      <div></div>
    );
  }
});

var ShirtListing = React.createClass({
  render: function(){
    var self = this;

      var listItemList = this.props.listItems.map(function(model){
        return (
          <div className="tile-wrap1 col-md-4">
            <div className="tile">
              <div className="img-container">
                <img src={model.get('url')} />
              </div>
              <li key={model.cid}>{'"' + model.get('title') + '"' + ' ' + '//'}  {model.displayPrice()}</li>
              <button className="buy btn" onClick={self.props.handleAddToCart}>Buy</button>
            </div>
          </div>
        );
      });
      return(
      <ul className="list col-md-12">{listItemList}</ul>
    );
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      listItems: [],
      cartItems: []
    }
  },
  componentWillMount: function(){
    var listItems = new ShirtCollection();
    var cartItems = new CartCollection();

    listItems.add([
      {title:'Oh Whale', url: 'images/il_570xN.658175429_gnbc.jpg', price: 900},
      {title:'Cat', url: 'images/il_570xN.853828550_beju.jpg', price: 1100},
      {title:'Freak Meowt', url: 'images/il_570xN.929485283_s22m.jpg', price: 1000},
      {title:'Expresso Yoself', url: 'images/il_570xN.979117302_did3.jpg', price: 900},
      {title:'Tea Shirt', url: 'images/il_570xN.1024352483_ch1y.jpg', price: 1900},
      {title:'BLT', url: 'images/blt.png', price: 2000}
    ]);

    this.setState({
      'listItems': listItems,
      'cartItems': cartItems
    });
  },
  handleAddToCart: function(model){
    this.state.cartItems.add(model);
    this.forceUpdate();
  },
  render: function(){
    return (
      <div className="app row">
        <nav className="nav">
          <img src="images/tea-shirt.png" />
            <dl>
              <dd><a calssName="nav-links" href="index.html">Shirts</a></dd>
              <dd><a href="cart.html">Cart</a></dd>
            </dl>
        </nav>
        <ShirtListing handleAddToCart={this.handleAddToCart} listItems={this.state.listItems} />
        <Cart cartItems={this.state.cartItems} />
      </div>
    );
  }
});

module.exports = AppComponent;
