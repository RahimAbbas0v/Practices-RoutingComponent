import React from "react";
import "./Section2.css";
import { FaCreditCard } from "react-icons/fa";

function Section2() {
  return (
    <section className="section2">
      <div className="container" id="container2">
        <div className="left">
          <h2>A better way to start building.</h2>
        </div>
        <div className="right">
          <div className="row">
            <div className="col-6">
              <div className="icon">
                <FaCreditCard />
              </div>
              <h5>Featured Title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                Here is just a bit more text.
              </p>
            </div>
            <div className="col-6">
              <div className="icon">
                <FaCreditCard />
              </div>
              <h5>Featured Title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                Here is just a bit more text.
              </p>
            </div>
          </div>
          <div className="row" id="row2">
            <div className="col-6">
              <div className="icon">
                <FaCreditCard />
              </div>
              <h5>Featured Title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                Here is just a bit more text.
              </p>
            </div>
            <div className="col-6">
              <div className="icon">
                <FaCreditCard />
              </div>
              <h5>Featured Title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                Here is just a bit more text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
