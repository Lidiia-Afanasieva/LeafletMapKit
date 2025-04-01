import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/style.css";
import Map from "./components/Map";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeobase } from "./features/geobase/geobaseSlice";
import InteractionPanel from "./components/InteractionPanel";

const DATA_PATH = './shapes.json'

function App() {
  const dispatch = useDispatch();
  const geobaseStatus = useSelector(state => state.geobase.status);

  useEffect(() => {
    dispatch(fetchGeobase(DATA_PATH));
  }, [])

  if (geobaseStatus === 'loading') {
    return <div>Загрузка...</div>;
  }

  if (geobaseStatus === 'failed') {
    return <div>Ошибка загрузки {DATA_PATH}</div>;
  }

  return (
    <div>
      <Map style={{ position: 'static' }} />
      <InteractionPanel />
    </div>
  );
}

export default App;

