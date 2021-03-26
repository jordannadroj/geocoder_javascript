// TODO: Write your JS code in here
import mapboxgl from 'mapbox-gl';
import { displayResult, searchLocation } from './location';

const search = document.getElementById("text");
const submit = document.getElementById("submit");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const searchFunction = submit.addEventListener("click", (event) => {
  event.preventDefault();
  searchLocation(search.value);
});
