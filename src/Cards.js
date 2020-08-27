import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "./Cards.css";
export default function Cards({ confirmed, recovered, deaths, date }) {
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19{" "}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{recovered.value}</Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of Covid-19{" "}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths diue to Covid-19{" "}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
