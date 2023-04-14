const express = require("express");
const app = express();
app.use(express.json());
const { trainNumbers, schedules } = require("../details/train-details");

app.get("/", (req, res) => {
  const now = new Date().getTime();

  const thrityminsfromNOw = now + 1000 * 60 * 30;
  const twelveHoursFromNow = now + 12 * 60 * 60 * 1000;

  let trainsWithin12Hours = trainNumbers.filter((train) => {
    const departureTime = new Date();
    departureTime.setHours(schedules[train]?.DepartureTime.Hours);
    departureTime.setMinutes(schedules[train]?.DepartureTime.Minutes);
    departureTime.setSeconds(schedules[train]?.DepartureTime.Seconds);
    console.log({ time: departureTime.getTime(), twelveHoursFromNow });
    return (
      departureTime.getTime() < twelveHoursFromNow &&
      departureTime.getTime() > thrityminsfromNOw
    );
  });
  trainsWithin12Hours = trainsWithin12Hours.sort((a, b) => {
    const aDeparture = new Date().setHours(
      schedules[a].DepartureTime.Hours,
      schedules[a].DepartureTime.Minutes,
      schedules[a].DepartureTime.Seconds,
    );
    const bDeparture = new Date().setHours(
      schedules[b].DepartureTime.Hours,
      schedules[b].DepartureTime.Minutes,
      schedules[b].DepartureTime.Seconds,
    );
    return aDeparture - bDeparture;
  });
  res.send({ trainsWithin12Hours });
});

app.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = app;
