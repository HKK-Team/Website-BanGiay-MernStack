import React from "react";
import address from "../../images/images/address.png";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 10.976827, lng: 106.674147 }}
      >
        <Marker
          icon={{
            url: { address },
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={{ lat: 10.976827, lng: 106.674147 }}
        >
        </Marker>
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
