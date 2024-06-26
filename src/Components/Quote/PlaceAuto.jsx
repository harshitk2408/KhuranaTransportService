import React, { useRef, useContext } from "react";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import "./PlaceAuto.css";
import { MyContext } from "../../MyContext";
const libraries = ["places"];
const PlaceAuto = (props) => {
  const apiKey = import.meta.env.VITE_API_GOOGLE_API_KEY;
  const { detail, setDetails } = useContext(MyContext);
  const inputRef = useRef();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey:apiKey,
    libraries,
  });

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
      setDetails({
        ...detail,
        [props.val]: place.formatted_address,
      });
    }
  };
  return (
    isLoaded && (
      <div className="place-auto">
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            className="form-control"
            placeholder={props.name}
          />
        </StandaloneSearchBox>
      </div>
    )
  );
};

export default PlaceAuto;
