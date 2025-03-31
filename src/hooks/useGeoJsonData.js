import { useState, useEffect, useCallback } from "react";
//  import data from '../../public/shapes.json'

function useGeoJsonData({ poligonDataPath }) {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    fetch(poligonDataPath) 
      .then(response => response.json())
      .then(data => setGeoJsonData(data))
      .catch(error => console.error('JSON load error:', error));
  }, [poligonDataPath]);


  const addPoligon = useCallback((newPoligon) => {
    setGeoJsonData((prev) => ([
      ...prev,
      newPoligon
    ]));
  }, []);

  const deleteGeoObject = useCallback((poligonId) => {
    setGeoJsonData((prev) => (
      prev.filter(geometry => geometry.properties.id != poligonId)
    ));
  }, []);

    console.log(geoJsonData)
  return { geoJsonData, addPoligon, deleteGeoObject };

}

export default useGeoJsonData;