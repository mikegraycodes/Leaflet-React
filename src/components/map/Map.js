import "./Map.scss";
import React from "react";
import L from "leaflet";

const lat = 53.3491415;
const long = -1.4951546;

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      attributionControl: false,
      center: [lat, long],
      zoom: 16,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")],
      zoomControl: false
    });

    L.control
      .zoom({
        position: "bottomright"
      })
      .addTo(this.map);

    var points = [];

    var marker = L.marker([lat, long]).addTo(this.map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    var circle = L.circle([lat, long], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);

    circle.bindPopup("I am a circle.");

    var polygon = L.polygon([
      [lat, long],
      [lat + 0.002, long + 0.0003],
      [lat - 0.0003, long - 0.00002]
    ]).addTo(this.map);

    polygon.bindPopup("I am a polygon.");

    function onMapClick(e) {
      alert("You clicked the map at " + e.latlng);
    }

    this.map.on("click", onMapClick);
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
