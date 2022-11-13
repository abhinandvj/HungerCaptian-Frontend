import React, { useEffect } from "react";
import line from "../assets/img/line.png";
import one from "../assets/img/1.png";
import like from "../assets/img/like.png";
import cart from "../assets/img/cart.png";
import two from "../assets/img/2.png";
import three from "../assets/img/3.png";
import four from "../assets/img/4.png";
import five from "../assets/img/4.png";
import six from "../assets/img/6.png";
import "../assets/style.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../reducks/carts/operations";
import { Link } from "react-router-dom";

const Card = ({
  item,
  selected_count,
  setShowWriteReview,
  setShowReviews,
  setSelectedItemId,
}) => {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  const clickCheckReviews = () => {
    setSelectedItemId(item.id);
    setShowReviews(true);
  };
  const clickWriteReview = () => {
    setSelectedItemId(item.id);
    setShowWriteReview(true);
  };
  console.log("Hee", item);

  return (
    <>
      <div class="card">
        <img id="s" src={item.image} alt="" />
        <div class="info">
          <div class="align">
            <img src={like} alt="" class="src" />
            <p class="lik">({item.total_like_count})</p>
          </div>
          <p class="itemnm">{item.name}</p>
          <div class="review">
            {/* <p onClick={()=>clickWriteReview()}>Write Review</p> */}
            <p onClick={() => clickWriteReview()}>Write Review</p>

            <p onClick={() => clickCheckReviews()}>Check Review</p>
          </div>

          <div class="ic">
            {selected_count == 0 ? (
              <button class="cart" onClick={clickAddCart}>
                {" "}
                <img class="carticn" src={cart} />
                Add to Cart
              </button>
            ) : (
              <div class="btmn">
                <div class="butn">
                  <button class="minus" onClick={() => clickMinusCart()}>
                    -
                  </button>
                  <span class="count">{selected_count}</span>
                  <button class="plus" onClick={() => clickPlusCart()}>
                    +
                  </button>
                </div>

                {/* <p class='price'>$ {item.price}</p> */}
              </div>
            )}
            <p class="price">$ {item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
