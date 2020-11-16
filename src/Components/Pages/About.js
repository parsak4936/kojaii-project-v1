import React from 'react';
import contactUs from '../Images/conntact_us.png'
import AbsoluteWrapper from "../AbsoluteWrapper";
 
import './About.css'
import ScrollAnimation from "react-animate-on-scroll";
import {Button} from "../Button";
import {Link} from "react-router-dom";
 

 function About() {
 
  return(
<>

    <AbsoluteWrapper>

            <div className="aboutus-container">
                <div className='header-for-images'>

                    <center>  <h1 >با <span className="nigma-txt"> نیگما</span> در ارتباط باشید</h1></center>



                </div>
                <div className="c-txt">
                    <ScrollAnimation animateIn='animate__bounceInLeft'>
                        <center>
                            <p >اگر قصد دارید از تیم <span>نیگما</span> برای  ایده های خود استفاده کنید ،از طریق راه های ارتباطی با ما تماس بگیرید، تا راهکارهای  خود را به شما معرفی کنیم.بسته به نیازهای خود ، یکی از راه های زیر را انتخاب نمایید.</p>

                        </center>
                    </ScrollAnimation>

                </div>

                <div className="c-socials-container">
                    <ScrollAnimation classname="c-socials" animateIn='animate__fadeIn'>
                        <Link
                            className=' sup-email'
                            to='/'
                            target='_blank'
                            aria-label='email'
                        >
                            kojaii@gmail.com
                            <span>      </span>

                            <i className='fa  fa-envelope sup-icons fa-2x '/>

                        </Link>

                        <Link
                            className=' sup-insta'
                            to='/'
                            target='_blank'
                            aria-label='instagram'
                        >
                            kojaii@gmail.com
                            <span>      </span>

                            <i className='fa  fa-telegram  sup-icons fa-2x '/>

                        </Link>
                        <Link
                            className=' sup-tweeter'
                            to='/'
                            target='_blank'
                            aria-label=' tweeter'
                        >
                            kojaii@gmail.com
                            <span>      </span>

                            <i className='fa  fa-instagram sup-icons fa-2x '/>

                        </Link>





                    </ScrollAnimation>

                </div>


                <img src={contactUs} alt=" " className="c-img" />



            </div>


    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
