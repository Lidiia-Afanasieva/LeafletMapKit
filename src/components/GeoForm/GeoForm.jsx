import React, { useState } from "react"
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from './GeoForm.module.css'
import { useDispatch } from "react-redux";
import { addGeoObject } from "../../features/geobase/geobaseSlice";

function GeoForm() {
  const [geoObject, setgeoObject] = useState({ name: '', latitude: '', longitude: '' })
  const [latError, setLatError] = useState('');
  const [lngError, setLngError] = useState('');
  const dispatch = useDispatch();

  const isValidateLat = (value) => {
    if (isNaN(value) || value < -90 || value > 90) {
      setLatError('Широта должна быть числом от -90 до 90.');
      return false;
    }
    setLatError('');
    return true;
  };

  const isValidateLng = (value) => {
    if (isNaN(value) || value < -180 || value > 180) {
      setLngError('Долгота должна быть числом от -180 до 180.');
      return false;
    }
    setLngError('');
    return true;
  };

  function handleCreateClick(e) {
    e.preventDefault()
    // console.log('handleCreateClick called')
    const isLatValid = isValidateLat(geoObject.latitude);
    const isLngValid = isValidateLng(geoObject.longitude);

    if (isLatValid && isLngValid) {
      const newGeoObject = {
        type: "Feature",
        properties: { "id": Date.now(), "name": geoObject.name },
        geometry: {
          coordinates: [geoObject.latitude, geoObject.longitude],
          type: "Point"
        }
      }
    
      dispatch(
        addGeoObject(newGeoObject)
      )
      setgeoObject({ name: '', latitude: '', longitude: '' })
    }
  }

  return (
    <form className={classes.form}>
      <Input
        id='name'
        type='text'
        value={geoObject.name}
        placeholder='Название точки'
        onChange={e => setgeoObject({ ...geoObject, name: e.target.value })}
      />
      <Input
        id='latitude'
        type="number"
        value={geoObject.latitude}
        placeholder='Широта'
        onChange={e => setgeoObject({ ...geoObject, latitude: e.target.value })}
      />
      {/* валидация ввода */}
      {latError && <p className={classes.error}>{latError}</p>}
      <Input
        id='longitude'
        type="number"
        value={geoObject.longitude}
        placeholder='Долгота'
        onChange={e => setgeoObject({ ...geoObject, longitude: e.target.value })}
      />
      {lngError && <p className={classes.error}>{lngError}</p>}
      <Button
        buttontype='save'
        onClick={handleCreateClick}
      >
        Сохранить
      </Button>
    </form>
  )
};

export default GeoForm;
