import React from 'react'
import background from '../assets/img/background1.png'
import li from '../assets/img/li.png'
import logo from '../assets/img/Hunger-Captian-whitelogo.png'
import '../assets/style.css'

export default function Header() {
  return (
    <>
     <section class="mar">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        
        <div><img class="main" src={background} /></div>
        <div><img class="li" src={li}/></div>

       
        <div><img class="logo" src={logo} /></div>

       
        <div class="discription">
            <p><span class="white">Good food is <br/> The Foundation of <br/></span><span class="highlight"> Genuine
                    Happiness </span> </p>
        </div>

    </section></>
  )
}
