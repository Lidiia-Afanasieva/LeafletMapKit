import React, { useRef, useEffect } from "react"
import classes from './Map.module.css'
import { useSelector } from "react-redux";

function Map() {
  const mapRef = useRef(null);
  const geoJsonLayerRef = useRef(null);
  const geoData = useSelector(state => state.geobase.data)

  useEffect(() => {
    mapRef.current = L.map("map-id", { zoomControl: false }).setView(
      [51.505, 25.09],
      4
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);


  useEffect(() => {
    if (mapRef.current && geoData) {
      // console.log(mapRef.current)

      if (geoJsonLayerRef.current) {
        mapRef.current.removeLayer(geoJsonLayerRef.current)
      }


      // слой с полигонами
      geoJsonLayerRef.current = L.geoJSON(geoData, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.name);
          layer.featureid = feature.properties.id;
        }
      }).addTo(mapRef.current);
    }

  }, [geoData])

  return (
    <div className={classes.map} id="map-id"></div>
  )
};

export default Map;

