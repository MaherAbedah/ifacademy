import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our great partners</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                       <a href={d.link}> <img src={d.img} alt="" /></a>{" "}
                      </div>
                      <div className="testimonial-content">
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                        {/* <div className="testimonial-meta"> - {d.name} </div> */}
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
