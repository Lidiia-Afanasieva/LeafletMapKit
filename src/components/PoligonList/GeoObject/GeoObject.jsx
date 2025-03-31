import React from "react"
import classes from './GeoObject.module.css'
import Button from "../../UI/Button";

const GeoObject = ({deleteGeoObject, geoObject}) => {

  function handleDeleteClick() {
    console.log(`deleted: ${geoObject.properties.id}`)
    deleteGeoObject(geoObject.properties.id)
  }

  return (
    <div className={classes.geo_obj}>
      <div>{geoObject.properties.name} </div>
      <Button 
        buttontype='delete'
        onClick={handleDeleteClick}
      >
        Удалить
      </Button>
    </div>
  )
};

export default GeoObject;
