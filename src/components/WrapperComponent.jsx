import React, { Component } from "react";

import ListOfItems from "./ListOfItems";

import { withRouter } from "react-router-dom";
import Slider from "./Slider";

class WrapperComponent extends Component {
  componentWillUnmount(){
    console.log("Unmount", this.props)
    //this.abortController.abort()
  }
  render() {
    let messageDiv = null;
    const { message } = this.props;
    if (message) {
      messageDiv = <div style={style.messageStyle}>{message}</div>;
      setTimeout(() => {
        console.log("Inside setTimeout")
        this.props.clearMessage()
      }, 2000);
    }
    return (
      <div>
        <Slider />
        {messageDiv}

        <ListOfItems
          items={this.props.items}
          handleClick={this.props.handleClick}
          showDetails={this.props.showDetails}
        />
      </div>
    );
  }
}

const style = {
  messageStyle: {
    backgroundColor: "#D1ECF1",
    padding: "2rem",
    textAlign: "center",
    marginTop: "4rem"
  }
};
export default withRouter(WrapperComponent);
