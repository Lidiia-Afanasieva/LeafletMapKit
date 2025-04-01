import React from "react"
import classes from "./InteractionPanel.module.css"
import GeoForm from "../GeoForm";
import GeoList from "../GeoList";

function InteractionPanel(props) {
  return (
    <div className={classes.container}>
      <GeoList />
      <GeoForm />
    </div>
  )
};

export default InteractionPanel;
