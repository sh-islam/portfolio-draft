import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import HelloAnim from './Animations/animation_hello.json';

import cIcon from './Images/c.svg';
import javaIcon from './Images/java.svg';
import javascriptIcon from './Images/javascript.svg';
import pythonIcon from './Images/python.svg';

import KUTE from 'kute.js'


export default function About() {
    
    // Blob animation
    useEffect(()=>{
        const tween = KUTE.fromTo(
            '#blob1',
            {path: '#blob1'},
            {path: '#blob2'},
            {repeat: true, duration: 3000, yoyo: true}
        )
        tween.start();
    },[])

    // Replay lottie hello anim on click
      

    return (
        <div className='about-container'>
            <div className='about-background'></div>
            <div className='hello-container'>
                <div className='hello-text'>
                    <h1>Hello</h1>
                    <h2>I'm Shad. </h2>
                    <div className='blob'>
                        <section className='hello-blob-animation'>
                            <svg id="blob-svg" viewBox="0 0 500 500" width="500" height="500" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(262.9331695735905 245.69272545771875)"><path id='blob1' d="M116.8 -102C160 -73.7 209.5 -36.8 210.6 1.1C211.8 39.1 164.6 78.3 121.4 116.1C78.3 153.9 39.1 190.5 -7.4 197.9C-54 205.3 -108 183.6 -150.3 145.8C-192.6 108 -223.3 54 -233.1 -9.8C-243 -73.7 -232 -147.3 -189.6 -175.6C-147.3 -204 -73.7 -187 -18.4 -168.6C36.8 -150.2 73.7 -130.3 116.8 -102" fill="#1B263B" ></path></g>
                            <g transform="translate(222.32844585426807 210.36023294078)"><path  style={{visibility:"hidden"}} id='blob2' d="M161.7 -144.2C209.4 -114.1 247.7 -57 239.9 -7.8C232.2 41.5 178.3 83 130.6 130.6C83 178.3 41.5 232.2 -16.1 248.2C-73.7 264.3 -147.3 242.6 -173.4 195C-199.4 147.3 -177.8 73.7 -163.5 14.3C-149.2 -45 -142.1 -90 -116.1 -120.2C-90 -150.4 -45 -165.7 6 -171.7C57 -177.7 114.1 -174.4 161.7 -144.2" fill="#1B263B"></path></g>
                            </svg>
                        </section>
                    </div>
                </div>
                <Lottie
                    id='hello'
                    className='helloAnimation'
                    animationData={(HelloAnim)}
                    loop = "false"
                />
            </div>
            <div className='tech-container'>
                <h1 style={{ color: '#E0E1DD', fontFamily: "'Noto Sans Display', sans-serif", fontSize: '22px' }}>My tech stack</h1>
                <div className='tech-icons'>
                    <img src={pythonIcon} alt='Python Icon' width='33' height='33' />
                    <img src={javaIcon} alt='Java Icon' width='33' height='33' />
                    <img src={cIcon} alt='C Icon' width='33' height='33' />
                    <img src={javascriptIcon} alt='JavaScript Icon' width='33' height='33' />
                </div>
            </div>
        </div>
    );
}
