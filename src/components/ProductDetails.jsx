import React from "react";
import { useLocation, withRouter } from "react-router-dom";

function ProductDetails(props) {
  const { state } = useLocation();
  // console.log(state);
  const goToHome = () => {
    props.history.push("/home");
  };
  if (state) {
    const { item, message } = state;
    console.log(item)
    const color = item.addedToCart ? "red" : "rgb(26, 26, 231)";
    let messageDiv = null;

    if (message) {
      messageDiv = <div style={styles.messageStyle}>{message}</div>;
      setTimeout(() => {
        console.log("Inside setTimeout, message is", message);
        props.clearMessageFromDetails(item.id);
      }, 2000);
    }
    return (
      <>
        {messageDiv}
        <div style={styles.detailsContainer}>
          <h2>Product Details</h2>
          <div style={styles.grid}>
            <img src={item.img} alt="" style={styles.img} />
            <div style={styles.details}>
              <h3>{item.title}</h3>
              <p>
                <span style={styles.bold}>Description :</span> Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Iusto possimus vel
                ad ipsum corrupti velit dicta necessitatibus distinctio
                repellendus ut!
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <span style={styles.bold}>Price :</span> {`$${item.price}`}
              </p>
              <button
                style={{
                  background: color,
                  borderColor: color,
                  padding: "1rem 2rem",
                  color: "white",
                  ...styles.bold,
                  fontSize: 14
                }}
                onClick={e => props.handleClickFromDetailsPage( item.id)}
              >
                {item.addedToCart ? "Remove from cart" : "Add To Cart"}
              </button>
              <button style={styles.home} onClick={goToHome}>
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    props.history.push("/home");
    return null;
  }
}
const styles = {
  detailsContainer: {
    textAlign: "center",
    maxWidth: 1000,
    margin: "6rem auto",
    marginTop: "15%"
  },
  grid: {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  bold: {
    fontWeight: "bold"
  },
  details: {
    textAlign: "left",
    lineHeight: 1.6
  },
  img: {
    justifySelf: "flex-end",
    marginRight: "3rem",
    maxWidth: "100%",
    maxHeight: 225
  },
  home: {
    padding: "1rem 2rem",
    marginLeft: "1rem",
    fontWeight: "bold",
    fontSize: 14
  },
  messageStyle: {
    backgroundColor: "#D1ECF1",
    padding: "2rem",
    textAlign: "center",
    marginTop: "4rem"
  }
};
export default withRouter(ProductDetails);
