import React from "react";
import { withRouter, Link } from "react-router-dom";
function Cart(props) {
    const { items } = props;
    const addedItems = items.filter(el => el.addedToCart);
    let sr = 0;
    if (addedItems.length) {
        let total = 0
        // addedItems.forEach(item=>total += item.price)
      return (
        <div style={styles.item}>
          <h2>Items In The Cart</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.td}>Sr.No.</th>
                <th style={styles.td}>Title</th>
                <th style={styles.td}>Price</th>
                <th style={styles.td}>Quantity</th>
                <th style={styles.td}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {addedItems.map(item => {
                sr++;
                total += (item.price * item.quantity)
                return (
                  <tr key={item.id}>
                    <td style={styles.td}>{sr}</td>
                    <td style={{ ...styles.td, textTransform: "uppercase" }}>
                      <p>{item.title}</p>
                    </td>
                    <td style={styles.td}>
                      <p>{`$${item.price}`}</p>
                    </td>
                    <td style={{...styles.td, display : "flex", justifyContent : "center"}}>
                      <button style={{ padding : "0.5rem"}} onClick={e => props.changeQuantity(-1, item.id)}>-</button>
                      <div style={{padding : "0.5rem 1rem"}}><span>{item.quantity}</span></div>
                      {/* <input type="number" min={0}  value= {item.quantity} onChange={e => props.changeQuantity(e.target.value, item.id)}/> */}
                      <button style={{ padding : "0.5rem"}} onClick={e => props.changeQuantity(1, item.id)}>+</button>
                    </td>
                    <td style={styles.td}>
                      <button style={styles.remove} onClick={e=>props.removeFromCart(e, item.id)}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={styles.total}>
              <h3>Total Cost : {`$${total}`}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.item}>
          Cart is empty. <Link to="/home">Shop Now</Link>
        </div>
      );
    }
  
}
const styles = {
  item: {
    margin: "10% auto",
    padding: "1rem",
    maxWidth: 1100,
    textAlign: "center",
    marginBottom: 250
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "2rem"
  },
  td: {
    padding: "1rem"
  },
  remove: {
    padding: "0.5rem 1rem",
    background: "#dc3545",
    color: "white",
    borderRadius: 5,
    cursor : "pointer"
  },
  total : {
      marginTop : "2rem",
      textAlign : "right"
  }
};
export default withRouter(Cart);
