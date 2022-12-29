import React from "react";
import "./Section4.css";
function Section4() {
    return (
        <>
            <section className="section4">
                <div className="center">
                    <div className="heading">
                        <h2>From our blog</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                            fugit ratione dicta mollitia. Officiis ad.
                        </p>
                    </div>
                    <div className="cards">
                        <div class="card">
                            <img
                                class="card-img-top"
                                src="https://dummyimage.com/600x350/ced4da/6c757d"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <div className="news">
                                    <p>News</p>
                                </div>
                                <h5 class="card-title">Blog Post Title</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <div className="down">
                                    <div>
                                        <img
                                            src="https://dummyimage.com/40x40/ced4da/6c757d"
                                            alt=""
                                        />
                                    </div>
                                    <div className="names">
                                        <h5>Tom Ato</h5>
                                        <div class="text-muted"><span>March 12, 2022 · 6 min read</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img
                                class="card-img-top"
                                src="https://dummyimage.com/600x350/ced4da/6c757d"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <div className="news">
                                    <p>News</p>
                                </div>
                                <h5 class="card-title">Another blog post title</h5>
                                <p class="card-text">
                                    This text is a bit longer to illustrate the adaptive height of
                                    each card. Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                                <div className="down2">
                                    <div>
                                        <img
                                            src="https://dummyimage.com/40x40/ced4da/6c757d"
                                            alt=""
                                        />
                                    </div>
                                    <div className="names">
                                        <h5>Tom Ato</h5>
                                        <div class="text-muted"><span>March 12, 2022 · 6 min read</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card">
                            <img
                                class="card-img-top"
                                src="https://dummyimage.com/600x350/ced4da/6c757d"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <div className="news">
                                    <p>News</p>
                                </div>
                                <h5 class="card-title">
                                    The last blog post title is a little bit longer than the
                                    others
                                </h5>
                                <p class="card-text">
                                    Some more quick example text to build on the card title and
                                    make up the bulk of the card's content.
                                </p>
                                <div className="down3">
                                    <div>
                                        <img
                                            src="https://dummyimage.com/40x40/ced4da/6c757d"
                                            alt=""
                                        />
                                    </div>
                                    <div className="names">
                                        <h5>Tom Ato</h5>
                                        <div class="text-muted"><span>March 12, 2022 · 6 min read</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section4;
