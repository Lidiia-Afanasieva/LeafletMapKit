import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import Map from "./components/Map";
import useGeoJsonData from "./hooks/useGeoJsonData";
import PoligonForm from "./components/PoligonForm";
import PoligonList from "./components/PoligonList";

function App() {
  const DATA_PATH = './shapes.json'

  const { geoJsonData, addPoligon, deleteGeoObject } = useGeoJsonData({ poligonDataPath: DATA_PATH });

  return (
    <div>
      <Map style={{ position: 'static' }} geoJsonData={geoJsonData} />
      <PoligonForm addPoligon={addPoligon} />
      <PoligonList geoJsonData={geoJsonData} deleteGeoObject={deleteGeoObject} />
    </div>
  );
}

export default App;

