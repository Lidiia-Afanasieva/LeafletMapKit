import React from "react"
import classes from './PoligonList.module.css'
import GeoObject from "./GeoObject/GeoObject";

const PoligonList = ( {geoJsonData, deleteGeoObject} ) => {
  if (!geoJsonData) {
    return (
      <div>Empty</div>
    )
  }

  return (
    <div className={classes.container}>
      {geoJsonData.map((item, index) => 
        <GeoObject key={index} geoObject={item} deleteGeoObject={deleteGeoObject} />
      )}  
    </div>
  )
};

export default PoligonList;
