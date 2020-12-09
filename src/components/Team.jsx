import React, { Component } from "react";
import World from "@svg-maps/world";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
// import Map from './map'

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Our team is an elegant combination of education experts and active regional advisors all over the world.
            </p> 
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    {/* <img src={d.img} alt="..." className="team-img" /> */}
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <p>{d.email}</p>
                      <p>{d.phone}</p>
                    </div>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
          <RadioSVGMap map={World} />
          {/* <Map /> */}
        </div>
      </div>
    );
  }
}

export default Team;
