import React, { useEffect } from 'react';
import Project from './Components/Project';
import About from './Components/About';


export default function App() {

    // For section face-in and out
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <div className='App'>
            <section className='hidden'><About /></section>
            <section className='hidden'><Project /></section>
        </div>
    )
}
