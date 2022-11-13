import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../assets/style.css";
import background1 from "../assets/img/background1.png";
import li from "../assets/img/li.png";
import whitelogo from "../assets/img/Hunger-Captian-whitelogo.png";
import line from "../assets/img/line.png";
import one from "../assets/img/1.png";
import additem from "../assets/img/additem.png";
import like from "../assets/img/like.png";
import cart from "../assets/img/cart.png";
import two from "../assets/img/2.png";
import three from "../assets/img/3.png";
import four from "../assets/img/4.png";
import five from "../assets/img/4.png";
import six from "../assets/img/6.png";
import close from "../assets/img/close.png";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../reducks/carts/selectors";
import { decreaseCart, increaseCart } from "../reducks/carts/operations";

const Car = ({ cart, quantity, cartId }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  console.log("carts", cart);

  const clickPlusCart = () => {
    dispatch(increaseCart(cartId));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cartId));
  };

  useEffect(() => {
    console.log("cart-i", cart.image);
    console.log("aaa", cart);
    console.log("bbb", carts);
  }, []);
  return (
    <>
      <Header />
      <section class="main2">
        <p class="recipi">Cart</p>
        <img class="line" src={line} />
      </section>

      <section class="c1">
        <div class="carttwo">
          <img src={cart.image} />
          <div class="details">
            <h3>
              {cart.item.name}
              <br />
            </h3>
            <p>{cart.message}</p>
            <div class="btmn">
              <div class="butn">
                <button class="plus" onClick={() => clickPlusCart()}>
                  +
                </button>
                <span class="count">{quantity}</span>
                <button class="minus" onClick={() => clickMinusCart()}>
                  -
                </button>
              </div>

              <p class="d">$10.99</p>
            </div>
            <button class="cart" id="cartbutton">
              {" "}
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Car;
