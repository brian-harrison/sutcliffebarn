import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map({ address }) {
  const mapRef = useRef(null);
const geocoder = useMemo(() => new google.maps.Geocoder(), []);
useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_MAP_KEY,
      version: "weekly",
    });
loader.load().then(() => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 8,
          });
const marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address, geocoder]);
return <div style={{ height: "400px" }} ref={mapRef} />;
}
export default Map;