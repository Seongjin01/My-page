import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  })
  return (
    <>
    <header className='header'>
      <div className='ibox'><a href='#myl'>"My life"</a></div>
      <div className='ibox'><a href="#edu">"Education"</a></div>
      <div className='ibox'><a href="#pro">"Project"</a></div>
      <div className='ibox'><a href="#con">"Contact"</a></div>
    </header>
    <section className="section">
      <div className='edu' id='edu'>
        <h1>.</h1>
        <div className='ele' data-aos="flip-up" >
          성남동초등학교
          <h6>2012 ~ 2017</h6>
        </div>
        <div className='mid' data-aos="flip-up" >
          성남동중학교
          <h6>2018 ~ 2020</h6>
        </div>
        <div className='high' data-aos="flip-up" >
          성일정보고등학교
          <h6>2021 ~ 2023</h6>
        </div>
      </div>
      <div className='pro' id='pro'>
        <h1>.</h1>
        <div className='p1' data-aos="zoom-in-left" data-aos-delay="100">
          proejct 1
          <h6>이 프로젝트는 ...</h6>
          </div>
        <div className='p2' data-aos="zoom-in-right"data-aos-delay="200">
          proejct 2
          <h6>이 프로젝트는 ...</h6>
           </div>
        <div className='p3' data-aos="zoom-in-left" data-aos-delay="300">
          proejct 3
          <h6>이 프로젝트는 ...</h6>
          </div>
      </div>
      <div className='con' id='con'>
        <div className='contact'>
          <h2>CONTACT</h2>
          <div className='c' data-aos="fade-up">b</div>
          <div className='c' data-aos="fade-up" data-aos-delay="100">a</div>
          <div className='c' data-aos="fade-up" data-aos-delay="200">e</div>
          <div className='c' data-aos="fade-up" data-aos-delay="300">s</div>
          <div className='c' data-aos="fade-up" data-aos-delay="400">e</div>
          <div className='c' data-aos="fade-up" data-aos-delay="500">o</div>
          <div className='c' data-aos="fade-up" data-aos-delay="600">n</div>
          <div className='c' data-aos="fade-up" data-aos-delay="700">g</div>
          <div className='c' data-aos="fade-up" data-aos-delay="800">j</div>
          <div className='c' data-aos="fade-up" data-aos-delay="900">i</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1000">n</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1100">0</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1200">3</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1300">1</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1400">1</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1500">@</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1600">g</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1700">m</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1800">a</div>
          <div className='c' data-aos="fade-up" data-aos-delay="1900">i</div>
          <div className='c' data-aos="fade-up" data-aos-delay="2000">l</div>
          <div className='c' data-aos="fade-up" data-aos-delay="2100">.</div>
          <div className='c' data-aos="fade-up" data-aos-delay="2200">c</div>
          <div className='c' data-aos="fade-up" data-aos-delay="2300">o</div>
          <div className='c' data-aos="fade-up" data-aos-delay="2400">m</div>
        </div>
      </div>
    </section>
    
    
    <footer className='footer'>

    </footer>
      
      </>
  );
}

export default App;
