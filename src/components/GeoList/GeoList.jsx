import React from "react"
import classes from './GeoList.module.css'
import GeoObject from "./GeoObject/GeoObject";
import { useDispatch, useSelector } from "react-redux";

function GeoList() {
  const geoData = useSelector(state => state.geobase.data)

  if (!geoData) {
    return (
      <div>Empty</div>
    )
  }

  return (
    <div className={classes.container}>
      {geoData.map((obj, index) => 
        <GeoObject key={index} geoObject={obj} />
      )}  
    </div>
  )
};

export default GeoList;
