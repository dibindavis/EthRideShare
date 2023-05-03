import { useEffect, useState } from "react";
import { calculateDistance, doReverseGeocode } from "../services/services";

const MapUtil = () => {
  useEffect(() => {
    getGeolocation();
  }, []);

  const [location, setLocation] = useState({ lat: "", long: "" });
  const [point, setPoint] = useState({pickup:"",dropoff:""});
  const [currentloc,setcurrentloc]=useState("")
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  async function success(pos) {
    const crd = pos.coords;
    console.log(crd);
    setLocation({
      ...location,
      long: await crd.longitude,
      lat: await crd.latitude,
    });
    await doReverseGeocode(location).then(res=>{
        setcurrentloc(res
            .data.results[0].locations[0].adminArea6);
    })
    
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
const getGeolocation = async() => {
    return navigator.geolocation.getCurrentPosition(success, error, options);
  };
  const getDistance = async () => {
    calculateDistance(point.pickup,point.dropoff).then(res=>{console.log(res.data.route.distance)})
  };
  const getStops = async () => {
    getGeolocation();
    calculateDistance(point.pickup,currentloc).then(res=>{console.log(res.data.route.distance)})
  };
  return (
    <>
      <h1>current coordinate</h1>
      <h1>{location.lat}</h1>
      <h1>{location.long}</h1>
      <h2>find distance</h2>
      <label>pickup</label>
      <input type="text" onChange={(event)=>{setPoint({...point,pickup:event.target.value})}}></input>
      <br></br>
      <label>dropoff</label>
      <input type="text" onChange={(event)=>{setPoint({...point,dropoff:event.target.value})}}></input>
      <br></br>
      <button onClick={() => getDistance(location)}>get distance</button><br></br>
      <button onClick={async () => getStops()}>
        get from current 
      </button>
    </>
  );
};
export default MapUtil;
