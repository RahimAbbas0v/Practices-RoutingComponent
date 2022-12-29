import React from 'react'
import "./Section5.css"
function Section5() {
    return (
        <>
            <section className='section5'>
                <form class="form-inline bg-primary">
                <div className='left'><h3>New products, delivered to you.</h3>
                <p>Sign up for our newsletter for the latest updates</p></div><div className='right'>
                    <div class="input-group mb-2">
                        <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                        <button class="btn btn-outline-light bg-primary" id="button-newsletter" type="button">Sign up</button>
                    </div>
                    <p>We care about privacy, and will never share your data.</p></div>

                </form>
                
            </section>
        </>
    )
}

export default Section5