import React from 'react'
import "./Section1.css"

function Section1() {
    return (
        <>
        <section className='Section1 bg-dark'>
            <div className='container'>
                <div className='Left'>
                    <h1>A Bootstrap 5 template for modern businesses</h1>
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                    <div className='buttons'>
                    <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                    <button type="button" class="btn btn-outline-light btn-lg">Learn More</button>
                    </div>
                </div>
                <div className='Right'>

                    <div className='container'>
                    
                    <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
                </div>
                </div>
            </div></section>
        </>
    )
}

export default Section1