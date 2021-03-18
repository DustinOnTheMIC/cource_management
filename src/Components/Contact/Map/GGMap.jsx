import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GGMap extends Component {
  render() {
    return (
      <div className="col-lg-6 d-flex align-items-stretch">
        <div id="map" className="bg-white">
          <Map
            className="style-gg-map"
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 16.068, lng: 108.212 }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1uW3oMcA5QbrESWBBue9tPJti_vukNpQ",
})(GGMap);
