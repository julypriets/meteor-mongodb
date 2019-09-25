import React, { Component } from "react";

export default class DayForecast extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.day}</h5>
          <p className="card-text">
            {this.props.description}
          </p>
          <p className="card-text">
            <small className="text-muted">{this.props.temperature}</small>
          </p>
        </div>
      </div>
    );
  }
}
