import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import '../assets/style.css'
import background1 from '../assets/img/background1.png'
import li from '../assets/img/li.png'
import whitelogo from '../assets/img/Hunger-Captian-whitelogo.png'
import line from '../assets/img/line.png'
import one from '../assets/img/1.png'
import blacklogo from '../assets/img/logo-black.png'
import like from '../assets/img/like.png'
import cart from '../assets/img/cart.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import four from '../assets/img/4.png'
import five from '../assets/img/4.png'
import six from '../assets/img/6.png'
import close from '../assets/img/close.png'
import Header from '../components/Header'
import lovplane from '../assets/img/lovplane.png'
import awesome from '../assets/img/exclike.png'
import dislike from '../assets/img/dislike.png'

import API from '../API'


const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    api.getReviews(selectedItemId).then((reviews) => {
      setSelectedItemId(null);
      setReviews(reviews);
    })
    },[]);
  const getImgReaction = (like_count) => {
    switch (like_count) {
      case 1:
        return lovplane;
      case 2:
        return lovplane;
      case 3:
        return awesome
      
      
      default:
        return dislike;
    }
}
console.log('review',reviews);
  


  

//   const getImgReaction = (like_count) => {
//     switch (like_count) {
//       case 1:
//         return Reaction1;
//       case 2:
//         return Reaction2;
//       case 3:
//         return Reaction3;
//       default:
//         return Reaction0;
//     }
//   };
  return (
    <>
    
     <div class="back">
    </div>

<section class="rev">
    <div class="tx">
    <div><p class="itm"><h2>Reviews</h2></p></div>
    <div class="th"><p calss='th'></p></div>
    <div><a href="/"><img class="x" src={close}/></a></div>
    {/* <div class="rate">
        <button> <img class="lovplane" src={lovplane} alt="" /> <div className="sa"> Good <p className="likesc">(15 likes)</p> </div></button>
        <button> <img class="lovplane" src={lovplane} alt="" /> <div className="sa"> Verry Good <p className="likesc">(15 likes)</p></div> </button>
        <button> <img class="lovplane" src={awesome} alt="" /> <div className="sa"> Excellent <p className="likesc">(15 likes)</p></div> </button>
        <button> <img class="lovplane" src={dislike} alt="" /> <div className="sa"> Not Good <p className="likesc">(15 likes)</p> </div></button>
    </div> */}
    
    <div class="bot">
    <div class="font">
        {/* <p class='rv'>Review comes here</p> */}
        <ul>
{reviews && reviews.results && reviews.results.length > 0 && reviews.results.map((review)=>(
    <li>

        <img src={getImgReaction(review.like_count)} alt="" />
        <p>{review.name}</p>
        <p>{review.body}</p>
        <hr/>
    </li>
))}
</ul>
    </div>
    </div>
    </div>
    </section>
   </>
   
  )
}
export default Reviews
