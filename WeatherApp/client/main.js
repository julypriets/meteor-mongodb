import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import { Forecast } from "../imports/api/forecast";

import WeekForecast from "../imports/ui/WeekForecast.js";

Meteor.startup(() => {
  render(<WeekForecast />, document.getElementById("root"));
  let climateReport = [
    {
      day: "Sunday",
      description: "Sc'd PM Showers",
      temperature: "70 - 85",
      image:
        "https://i.etsystatic.com/16851695/r/il/8462dc/1720043717/il_794xN.1720043717_di3x.jpg"
    },
    {
      day: "Monday",
      description: "Mostly Sunny",
      temperature: "68 - 82",
      image:
        "https://image.spreadshirtmedia.com/image-server/v1/compositions/105414183/views/1,width=650,height=650,appearanceId=1,version=1547448019/sun-cute-yellow-sunny-sunshine-summer-summery-kawaii-happy-smiley-smiling-smile-sweet-adorable-rays-beams-anime-cartoon-kids-childr.jpg"
    },
    {
      day: "Tuesday",
      description: "All Shwrs PM Stms",
      temperature: "71- 84",
      image:
        "https://i.etsystatic.com/16851695/r/il/8462dc/1720043717/il_794xN.1720043717_di3x.jpg"
    },
    {
      day: "Wednesday",
      description: "Mostly Sunny",
      temperature: "62 - 78",
      image:
        "https://image.spreadshirtmedia.com/image-server/v1/compositions/105414183/views/1,width=650,height=650,appearanceId=1,version=1547448019/sun-cute-yellow-sunny-sunshine-summer-summery-kawaii-happy-smiley-smiling-smile-sweet-adorable-rays-beams-anime-cartoon-kids-childr.jpg"
    },
    {
      day: "Thursday",
      description: "Some clouds",
      temperature: "60 - 80",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/29/37/cute-sun-and-clouds-drawn-vector-23472937.jpg"
    },
    {
      day: "Friday",
      description: "Sunny nice",
      temperature: "63 - 83",
      image:
        "https://cdn.designbyhumans.com/product_images/p/645216.f56.07630S7ay1Cm2MjUAAA-650x650-b-p.jpg"
    },
    {
      day: "Saturday",
      description: "Mostly sunny",
      temperature: "64 - 83",
      image:
        "https://image.spreadshirtmedia.com/image-server/v1/compositions/105414183/views/1,width=650,height=650,appearanceId=1,version=1547448019/sun-cute-yellow-sunny-sunshine-summer-summery-kawaii-happy-smiley-smiling-smile-sweet-adorable-rays-beams-anime-cartoon-kids-childr.jpg"
    }
  ];

  climateReport.forEach(e => {
    Forecast.insert(e);
  });
});
