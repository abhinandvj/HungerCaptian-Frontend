
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import '../assets/style.css'
import background from '../assets/img/background1.png'
import li from '../assets/img/li.png'
import logo from '../assets/img/Hunger-Captian-whitelogo.png'
import line from '../assets/img/line.png'
import one from '../assets/img/1.png'
import like from '../assets/img/like.png'
import cart from '../assets/img/cart.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import four from '../assets/img/4.png'
import five from '../assets/img/4.png'
import six from '../assets/img/6.png'
import Header from '../components/Header'
import { getItems } from '../reducks/items/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../reducks/items/operations'
import Card from '../components/Card'
import queryString from "query-string";
import { getCarts, getSubtotal } from '../reducks/carts/selectors'
import { fetchFromLocalStorage } from '../reducks/carts/operations'
import PopupRevews from './Review'
import PopupWriteRevew from './Writereview'
import WriteReview from './Writereview'
import Reviews from './Review'




const Home=()=> {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  console.log('items',items.results);
   console.log('carts',carts);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems(parsed.category));
  }, []);
  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }
    return (
      
        <Card
          key={item.id}
          item={item}
          selected_count={selected_count}
          setShowWriteReview={setShowWriteReview}
          setShowReviews={setShowReviews}
          setSelectedItemId={setSelectedItemId}
        />
      
    );
  };

  
    
  
  return (
    <>
    <Header/>
    <section class="main2">
        <p class="recipies">Our Most Popular Recipies</p>
        <img class="line" src={line}/>
        <p class="try">Try our Most Delicious food and it usually take minutes to deliver!</p>
        <div class="buttons">
            <a href=""><button>All</button></a>
            <a href=""><button>Hot</button></a>
            <a href=""><button>Cold</button></a>
            <a href=""><button>Bagel</button></a>
        </div>
    </section>
   
    <div class="grid">

        {/* <div class="card">
            <img id="s"  src={one} alt="" />
            <div class="info">
                <div class="align">
                <img src={like} alt="" class="src"/><p class = "lik">(58)</p></div>
                <p>Chicken Submarine Burger</p>
                <div class="review">
                    <a href="http://localhost:3000/review">
                        <p>Write Review</p>
                    </a>
                    <a href="thirdhtml.html">
                        <p>Check Reviews</p>
                    </a>
                </div>
                
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div>
        <div class="card">
            <img id="s" src={two} alt="" />
            <div class="info">
                <div class="align">
                    <img src={like} alt="" class="src" />
                    <p class="lik">(52)</p>
                </div>
                <p>Toppins Pizza</p>
                <div class="review">
                    <a href="http://localhost:3000/review">
                        <p>Write Review</p>
                    </a>
                    <a href="thirdhtml.html">
                        <p>Check Reviews</p>
                    </a>
                </div>
                
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div>
        <div class="card">
            <img id="s" src={three} alt="" />
            <div class="info">
                <div class="align">
                    <img src={like} alt="" class="src" />
                    <p class="lik">(34)</p>
                </div>
                <p>Chicken Burger</p>
                <div class="review">
                    <a href="http://localhost:3000/review">
                        <p>Write Review</p>
                    </a>
                    <a href="thirdhtml.html">
                        <p>Check Reviews</p>
                    </a>
                </div>
                
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div>
        <div class="card">
            <img id="s" src={four} alt="" />
            <div class="info">
                <div class="align">
                    <img src={like} alt="" class="src" />
                    <p class="lik">(46)</p>
                </div>
                <p>Chicken Burger with Fries</p>
                <div class="review">
                    <a href="http://localhost:3000/review"><p>Write Review</p></a>
                    <a href="thirdhtml.html"><p>Check Reviews</p></a>
                </div>
               
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div>
        <div class="card">
            <img id="s" src={five} alt="" />
            <div class="info">
                <div class="align">
                    <img src={like} alt="" class="src" />
                    <p class="lik">(22)</p>
                </div>
                <p>Burger Meal</p>
                <div class="review">
                    <a href="http://localhost:3000/review">
                        <p>Write Review</p>
                    </a>
                    <a href="thirdhtml.html">
                        <p>Check Reviews</p>
                    </a>
                </div>
              
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div>
        <div class="card">
            <img id="s" src={six} alt="" />
            <div class="info">
                <div class="align">
                    <img src={like} alt="" class="src" />
                    <p class="lik">(27)</p>
                </div>
                <p>Chicken Brost Burger</p>
                <div class="review">
                    <a href="http://localhost:3000/review">
                        <p>Write Review</p>
                    </a>
                    <a href="thirdhtml.html">
                        <p>Check Reviews</p>
                    </a>
                </div>
               
                <div class="ic">
                    <a href=""><button class="cart"> <img class="carticn" src={cart}/>Add to Cart</button></a>
                    <my class="price">$10.99</my>
                </div>
            </div>
        </div> */}
        
        {items.results && items.results.map((items)=>{
            return  showItem(items);
        })}

       
        
        
    </div>
   <Footer/>
    {showWriteReview && (
        <WriteReview
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowWriteReview={setShowWriteReview}
        />
      )}
      {showReviews && (
        <Reviews
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowReviews={setShowReviews}
        />
      )}
   

    </>
  )
    }
    
    export default Home


