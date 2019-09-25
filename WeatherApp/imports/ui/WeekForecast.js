import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Forecast } from "../api/forecast.js";
import DayForecast from "./DayForecast.js";

class WeekForecast extends Component {
  renderDays() {
    return this.props.forecast.map(d => (
      <DayForecast
        key={d._id}
        day={d.day}
        description={d.description}
        temperature={d.temperature}
        image={d.image}
      />
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="card-deck">{this.renderDays()}</div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(WeekForecast);
