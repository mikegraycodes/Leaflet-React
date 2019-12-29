import React from "react";
import L from "leaflet";

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      attributionControl: false,
      center: [53.3491415, -1.4951546],
      zoom: 16,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")]
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
