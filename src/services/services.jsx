import contractAbi from "../contracts/RideSharing.json";
import Web3 from "web3";
import axios from "axios";
import { useState } from "react";
const API_KEY = "R65a16jMmWLk6JtND4kZwIuG6QDdlQVP";
let account;
const getContractInstance = async () => {
  const web3 = new Web3(window.ethereum);
  account = await web3.eth.getAccounts();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = contractAbi.networks[networkId];
  const contract = new web3.eth.Contract(
    contractAbi.abi,
    deployedNetwork && deployedNetwork.address
  );
  return contract;
};
//////////////////////////////////////////////////////////MAP\\\\\\\\\\\\\\\\\\\\\
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const getGeolocation = async () => {
     return new Promise((res,rej)=>{navigator.geolocation.getCurrentPosition(res,rej)}).then((res)=>{
      return res.coords; 
     });
  
};

/////////////////////////////////////MAP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const getRide = async (id) => {
  const contract = await getContractInstance();
  const result = await contract.methods.getRide(id).call();
  return result;
};
const getStop = async (pickup, dropoff) => {
  
  return axios.get(
    `https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${pickup}&to=${dropoff}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=true&enhancedNarrative=false&avoidTimedConditions=false`
  );
};
// totalFee, rideInfo.occupancy,rideInfo.pickup,rideInfo.dropoff,rideInfo.departure,rideInfo.distance
const addRide = async (
  fare,
  capacity,
  pickup,
  dropoff,
  departure,
  rate,
  distance
) => {
  const contract = await getContractInstance();
  const result = await contract.methods
    .addRide(fare, capacity, pickup, dropoff, departure, rate,distance)
    .send({
      from: account[0],
    });
  return result;
};
const getAllAvailableRide = async () => {
  const contract = await getContractInstance();
  const result = await contract.methods.getAllRides().call();
  return result;
};
const getCurrentRide = async (user) => {
  const contract = await getContractInstance();
  let result;
  if (user === "rider") {
    result = await contract.methods
      .getRidesByPassenger(account[0], 1)
      .call();
  } else {
    result = await contract.methods.getridesByDriver(account[0]).call();
  }
  return result;
};
const isworking = async () => {
  const contract = await getContractInstance();
  const result = await contract.methods.isWorking().call();
  return result;
};
const joinRide = async (id, fare) => {
  const contract = await getContractInstance();
  const result = await contract.methods.joinRide(id).send({
    from: account[0],
    value: fare,
  });
  return result;
};
const startRide = async (id) => {
  const contract = await getContractInstance();
  const result = await contract.methods.startRide(id).send({
    from: account[0],
  });
  return result;
};
const ReadyRide = async (id) => {
  const contract = await getContractInstance();
  const result = await contract.methods.passengerIsReady(id).send({
    from: account[0],
  });
  return result;
};
const FinishRide = async (id) => {
  const contract = await getContractInstance();
  const result = await contract.methods.completeJourney(id).send({
    from: account[0],
  });
  return result;
};
const CancelRide = async (id, ac) => {
  const contract = await getContractInstance();
  const result = await contract.methods.cancelRide(id, ac).send({
    from: account[0],
  });
  return result;
};
// int _rideId,uint _finalFare,string memory _destination,uint _distance
const CompleteRide = async (id,fare,destination,distance) => {
  const contract = await getContractInstance();
  console.log(fare);
  const result = await contract.methods.passengerIsFinished(id,destination,distance).send({
    from: account[0],
    value:fare._hex
  });
  return result;
};
const getPassengerRide = async (account) => {
  const contract = await getContractInstance();
  const result = await contract.methods.rideCompletedPassenger(account).call();
  return result;
};

const DriverCompletedRide = async (account) => {
  const contract = await getContractInstance();
  const result = await contract.methods.rideCompleted(account).call();
  return result;
};
const getDriverReward = async (account) => {
  const contract = await getContractInstance();
  const result = await contract.methods.getReward(account).call();
  return result;
};

const getAllRide = async (user,status) => {
  let result;
  const contract = await getContractInstance();
  if (user === "rider") {
    result = await contract.methods.getRidesByPassenger(account[0],status).call();
  } else {
    result = await contract.methods.getridesByDriver(account[0]).call();
  }
  return result;
};
const RateDriver = async (id, rating) => {
  const contract = await getContractInstance();
  const result = await contract.methods.rateDriver(id, rating).send({
    from: account[0],
  });
  return result;
};
const getDriverRating = async (driver) => {
  const contract = await getContractInstance();
  const result = await contract.methods.getDriverRating(driver).call();
  console.log(result);
  return result;
};
const calculateDistance = async (source, destination) => {
  return await axios.get(
    `https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${source}&to=${destination}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
  ).then((res)=>{return res.data.route.distance})
};
const doReverseGeocode = async (location) => {
  console.log(location);
 return axios.get(
    `https://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY}&location=${location.lat}%2C${location.long}&outFormat=json&thumbMaps=false`
  ).then((res)=>{return res.data.results[0].locations[0].adminArea6})
};
const toWei = (amount) => {
  const web3 = new Web3(window.ethereum);
  return  web3.utils.fromWei(amount);
};
const fromWei = (amount) => {
  const web3 = new Web3(window.ethereum);
  return web3.fromWei(amount);
};
export {
  calculateDistance,
  RateDriver,
  getRide,
  addRide,
  isworking,
  joinRide,
  getAllAvailableRide,
  getAllRide,
  getCurrentRide,
  startRide,
  ReadyRide,
  FinishRide,
  CancelRide,
  CompleteRide,
  getStop,
  doReverseGeocode,
  getDriverReward,
  getDriverRating,
  getPassengerRide,
  DriverCompletedRide,
  toWei,
  fromWei,
  getGeolocation,
};
