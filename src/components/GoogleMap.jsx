import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../utils/mapStyles";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Geocode from "react-geocode";

const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};
const center = {
  lat: 38.438899,
  lng: 22.87508,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    position: "relative",
    width: "100%",
    height: "50vh",
  },
  mapHeader: {
    position: "absolute",
    top: "1%",
    left: "1%",
    zIndex: "2",
  },
}));

function GoogleMapContainer({ stores }) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  // Geocode.fromAddress("Eiffel Tower").then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const classes = useStyles();
  const [markers, setMarkers] = useState([]);
  const [storesMarker, setStoresMarker] = useState([]);
  const onMapClick = useCallback((event) => {
    setMarkers([
      ...markers,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    console.log("Tas stores sto google maps:", stores);
    setMarkers(stores);
  }, [stores]);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <>
      <div className={classes.mapWrapper}>
        <Box display="flex" className={classes.mapHeader} alignItems="center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            height="70"
            width="70"
          />
          <Typography variant="h5">Λειβαδιά Loayalty</Typography>
        </Box>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
          onClick={onMapClick}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.address}
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </>
  );
}

export default GoogleMapContainer;
