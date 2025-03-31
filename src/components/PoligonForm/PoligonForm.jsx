import React, { useState } from "react"
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from './PoligonForm.module.css'

const PoligonForm = ({ addPoligon }) => {
  const [poligon, setPoligon] = useState({ name: '', latitude: '', longitude: '' })

  function handleCreateClick() {
    console.log('addNewPoligon called')

    const newPoligon = {
      type: "Feature",
      properties: { "id": Date.now(), "name": poligon.name },
      geometry: {
        coordinates: [poligon.latitude, poligon.longitude],
        type: "Point"
      }
    }

    addPoligon(newPoligon)
  }

  return (
    <div className={classes.form}>
      <Input
        type='text'
        value={poligon.name}
        placeholder='Name'
        onChange={e => setPoligon({ ...poligon, name: e.target.value })}
      />
      <Input
        type='text'
        value={poligon.latitude}
        placeholder='0'
        onChange={e => setPoligon({ ...poligon, latitude: e.target.value })}
      />
      <Input
        type='text'
        value={poligon.longitude}
        placeholder='0'
        onChange={e => setPoligon({ ...poligon, longitude: e.target.value })}
      />
      <Button
        buttontype='save'
        onClick={handleCreateClick}
      >
        Сохранить
      </Button>
    </div>
  )
};

export default PoligonForm;
