import React from "react"
import classes from './GeoObject.module.css'
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { deleteGeoObject } from "../../../features/geobase/geobaseSlice";

function GeoObject({ geoObject }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    console.log(`deleted: ${geoObject.properties.id}`)
    dispatch(
      deleteGeoObject(geoObject.properties.id)
    )
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
