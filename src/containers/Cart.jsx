import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import '../assets/style.css'
import background1 from '../assets/img/background1.png'
import li from '../assets/img/li.png'
import whitelogo from '../assets/img/Hunger-Captian-whitelogo.png'
import line from '../assets/img/line.png'
import one from '../assets/img/1.png'
import additem from '../assets/img/additem.png'
import like from '../assets/img/like.png'
import cart from '../assets/img/cart.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import four from '../assets/img/4.png'
import five from '../assets/img/4.png'
import six from '../assets/img/6.png'
import close from '../assets/img/close.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchFromLocalStorage } from '../reducks/carts/operations'
import { fetchItems } from '../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../reducks/items/selectors'
import { getCarts } from '../reducks/carts/selectors'
import Car from './Car'

export default function Cart() {
 const selector = useSelector((state) => state);
 const dispatch = useDispatch();
 const items = getItems(selector);
 const carts = getCarts(selector);

 useEffect(() => {
   dispatch(fetchItems());
   dispatch(fetchFromLocalStorage());
 }, []);
 console.log("cart", cart);
 console.log("Hoo",carts)
  return (
   <>
   <Header/>
    <section class="main2">
        <p class="recipi">Cart</p>
        <img class="line" src={line}/>

    </section>
   

    <section class="c1">
        {/* {carts.item && carts.length
            ? carts.map((cart) => (
                <Car
                  cart={cart.item}
                  cartId={cart.id}
                  key={cart.item.id}
                  quantity={cart.quantity}
                />
              ))
            : "Not An Array"} */}
            {carts && carts.length>0 && carts.map((cart)=>{
             return <Car/>
            })}
        <br/>
    </section>
    <div class="hmbt">
        <Link to ="/"><button class="hmbt1">Back To Home</button></Link><br/>
        <p class="s">Total Cost : <span>$ 31.51</span></p>
    
    </div>
    <Footer/>
   </>
  )
}
