import React, { useState } from 'react'
import Footer from '../components/Footer'
import '../assets/style.css'
import background1 from '../assets/img/background1.png'
import li from '../assets/img/li.png'
import whitelogo from '../assets/img/Hunger-Captian-whitelogo.png'
import line from '../assets/img/line.png'
import one from '../assets/img/1.png'
import like from '../assets/img/like.png'
import cart from '../assets/img/cart.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'
import blacklogo from '../assets/img/logo-black.png'
import four from '../assets/img/4.png'
import five from '../assets/img/4.png'
import six from '../assets/img/6.png'
import close from '../assets/img/close.png'
import lovplane from '../assets/img/lovplane.png'
import awesome from '../assets/img/exclike.png'
import dislike from '../assets/img/dislike.png'
import Header from '../components/Header'
import API from '../API'


const api=new API()
const WriteReview = ({
  selectedItemId,
  setSelectedItemId,
  setShowWriteReview,
}) => {
  const [likeCount, setLikeCount] = useState(1),
    [name, setName] = useState(""),
    [body, setBody] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBody = (event) => {
    setBody(event.target.value);
  };

  const sendReviewButton = () => {
    api.writeReview(selectedItemId, name, body, likeCount).then((review) => {
      alert("Your review has been sent. Thank you for your review!");
      setName("");
      setBody("");
      setLikeCount(1);
      setSelectedItemId(null);
      setShowWriteReview(false);
    });
  };
 

  return (
    <>
   
<section class="rev">
    <div class="tx">
    <div><p><h2>Write Review </h2></p></div>
    <div class="th"><p calss='th'>Choose your thought</p></div>
    <div><a href="/"><img class="x" src={close}/></a></div>
    <div class="rate">
        <button> <img class="lovplane" src={lovplane} alt="" /> <div className="sa"> Good <p className="likesc">(15 likes)</p> </div></button>
        <button> <img class="lovplane" src={lovplane} alt="" /> <div className="sa"> Verry Good <p className="likesc">(15 likes)</p></div> </button>
        <button> <img class="lovplane" src={awesome} alt="" /> <div className="sa"> Excellent <p className="likesc">(15 likes)</p></div> </button>
        <button> <img class="lovplane" src={dislike} alt="" /> <div className="sa"> Not Good <p className="likesc">(15 likes)</p> </div></button>
    </div>
    <div class="bot">
    <div class="font">
        <textarea class="c" onChange={inputName} placeholder='Enter your name'></textarea><br/>
        <textarea class="a"onChange={inputBody} placeholder='Enter your feedback'></textarea>
    </div>
    <div class="bt">
        <button onClick={sendReviewButton}> Send Review </button> </div>
    </div>
    </div>
    </section>
   </>
  )
}
export default WriteReview;

// 
