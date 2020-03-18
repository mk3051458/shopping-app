import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { withRouter } from 'react-router-dom';
// import Cart from "./components/Cart";
// import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// import WrapperComponent from "./components/WrapperComponent";
// import ProductDetails from "./components/ProductDetails";
import Img1 from "./assets/iphone-11-pro.jpeg";
import Img2 from "./assets/iphone-11.jpeg";
import Img3 from "./assets/iphone-xr.jpeg";
import Img4 from "./assets/iphone-8.jpeg";
import Img5 from "./assets/iphone-8-1.jpeg";
import Img6 from "./assets/apple-iphone-7-red1.jpeg";
import Img7 from "./assets/apple-iphone-7-red2.jpg";
import Img8 from "./assets/iphone-11.jpeg";
import Footer from "./components/Footer";
class App extends Component {
  state = {
    items: [
      {
        id: 1,
        img: Img1,
        title: "Iphone 11 Pro",
        price: 400,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 2,
        img: Img2,
        title: "Iphone 11",
        price: 350,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 3,
        img: Img3,
        title: "Iphone xr",
        price: 300,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 4,
        img: Img4,
        title: "Iphone 8(32GB)",
        price: 250,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 5,
        img: Img5,
        title: "Iphone 8(64GB)",
        quantity: 0,
        price: 200,
        addedToCart: false
      },
      {
        id: 6,
        img: Img6,
        title: "Iphone 7",
        price: 150,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 7,
        img: Img7,
        title: "Iphone 7(Red 64GB)",
        price: 100,
        quantity: 0,
        addedToCart: false
      },
      {
        id: 8,
        img: Img8,
        title: "Iphone 7(Red 32GB)",
        price: 50,
        quantity: 0,
        addedToCart: false
      }
    ],
    addedItems: 0,
    message: false
  };
  handleClick = (e, id) => {
    e.stopPropagation();
    let { items, addedItems, message } = this.state;
    const index = items.findIndex(el => el.id === id);
    items[index].addedToCart = !items[index].addedToCart;
    addedItems = items[index].addedToCart ? addedItems + 1 : addedItems - 1;
    items[index].quantity = items[index].addedToCart ? 1 : 0;
    message = items[index].addedToCart
      ? "Item added successfully in Cart"
      : "Item removed from Cart";
    this.setState({ items, addedItems, message });
  };

  handleClickFromDetailsPage = id => {
    console.log("handleClickFromDetailsPage", id);
    let { items, addedItems, message } = this.state;
    const index = items.findIndex(el => el.id === id);
    console.log(index);
    items[index].addedToCart = !items[index].addedToCart;
    addedItems = items[index].addedToCart ? addedItems + 1 : addedItems - 1;
    message = items[index].addedToCart
      ? "Item added successfully in Cart"
      : "Item removed from Cart";
    this.setState({ items, addedItems, message }, () => {
      this.showDetails(id);
    });
  };
  showCart = () => {
    this.props.history.push({
      pathname: "/cart",
      state: {
        items: this.state.items
      }
    });
  };
  showDetails = id => {
    console.log("showDetails");
    const { items, message } = this.state;
    const item = items.find(el => el.id === id);
    this.props.history.push({
      pathname: "/details",
      state: {
        item,
        message
      }
    });
  };
  clearMessageFromDetails = id => {
    console.log("clearMessageFromDetails");
    this.setState({ message: "" }, () => {
      console.log("message = ", this.state.message);
      this.showDetails(id);
    });
  };
  clearMessage = () => {
    this.setState({ message: "" });
  };

  changeQuantity = (value, id) => {
    let { items } = this.state;
    const index = items.findIndex(el => el.id === id);
    if(items[index].quantity + value >= 0){
      items[index].quantity = items[index].quantity + value;
      this.setState({ items })
    }
    
    
  };
  render() {
    return (
      <>
        <Navbar addedItems={this.state.addedItems} showCart={this.showCart} />
        {/* <Switch>
          <Route
            path="/cart"
            exact
            render={() => (
              <Cart
                {...this.props}
                removeFromCart={this.handleClick}
                items={this.state.items}
                changeQuantity={this.changeQuantity}
              />
            )}
          />
          <Route
            path="/home"
            exact
            render={() => (
              <WrapperComponent
                message={this.state.message}
                items={this.state.items}
                handleClick={this.handleClick}
                showDetails={this.showDetails}
                clearMessage={this.clearMessage}
              />
            )}
          />
          <Route
            path="/details"
            exact
            render={() => (
              <ProductDetails
                {...this.props}
                handleClickFromDetailsPage={this.handleClickFromDetailsPage}
                clearMessageFromDetails={this.clearMessageFromDetails}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch> */}
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
