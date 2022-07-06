import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFkaTc4NiIsImEiOiJjbDUzcWI3bGYwbmhyM2luNTAyaGowM3MzIn0.wLr8i2Hjt94qb_b2oxi1jg";

const Map = (props) => {

  console.log(props)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [76.9827, 28.498],
      zoom: 3,
    });
    if(props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
